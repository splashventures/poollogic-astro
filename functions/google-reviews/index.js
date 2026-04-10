const functions = require("@google-cloud/functions-framework");
const { SecretManagerServiceClient } = require("@google-cloud/secret-manager");
const { Storage } = require("@google-cloud/storage");

const PROJECT_ID = "cabana-cac";
const BUCKET_NAME = "cabana-cac";
const CACHE_PREFIX = "reviews/";
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours
const SECRET_NAME = `projects/${PROJECT_ID}/secrets/google-places-api-key/versions/latest`;

let apiKeyCache = null;
const secretClient = new SecretManagerServiceClient();
const storage = new Storage();
const bucket = storage.bucket(BUCKET_NAME);

async function getApiKey() {
  if (apiKeyCache) return apiKeyCache;
  const [version] = await secretClient.accessSecretVersion({ name: SECRET_NAME });
  apiKeyCache = version.payload.data.toString("utf8").trim();
  return apiKeyCache;
}

function cacheFilePath(placeId) {
  return `${CACHE_PREFIX}${placeId}.json`;
}

async function getCachedReviews(placeId) {
  const file = bucket.file(cacheFilePath(placeId));
  try {
    const [exists] = await file.exists();
    if (!exists) return null;

    const [metadata] = await file.getMetadata();
    const updated = new Date(metadata.updated || metadata.timeCreated);
    if (Date.now() - updated.getTime() > CACHE_TTL_MS) return null;

    const [content] = await file.download();
    return JSON.parse(content.toString("utf8"));
  } catch {
    return null;
  }
}

async function setCachedReviews(placeId, data) {
  const file = bucket.file(cacheFilePath(placeId));
  await file.save(JSON.stringify(data), {
    contentType: "application/json",
    metadata: { cacheControl: "no-cache" },
  });
}

async function fetchPlaceReviews(placeId, apiKey) {
  // Places API (New) - fetch place details including reviews
  const url = `https://places.googleapis.com/v1/places/${placeId}`;
  const response = await fetch(url, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "displayName,reviews,rating,userRatingCount",
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Places API error ${response.status}: ${text}`);
  }

  return response.json();
}

function transformReviews(placeData, placeId) {
  const reviews = placeData.reviews || [];
  const businessName = placeData.displayName?.text || "";

  return reviews
    .filter((r) => r.rating === 5 && r.text?.text)
    .map((r) => ({
      reviewerName: r.authorAttribution?.displayName || "Google User",
      reviewerPhotoUrl: r.authorAttribution?.photoUri || null,
      rating: r.rating,
      text: r.text.text,
      publishedAt: r.publishTime || null,
      googleReviewUrl: r.googleMapsUri || null,
      relativeTimeDescription: r.relativePublishTimeDescription || "",
      placeId,
      businessName,
    }));
}

functions.http("google-reviews", async (req, res) => {
  // CORS headers
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).send("");
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const placeIdsParam = req.query.placeIds;
  if (!placeIdsParam) {
    return res.status(400).json({ error: "placeIds query parameter required" });
  }

  const placeIds = placeIdsParam.split(",").filter(Boolean);
  if (placeIds.length === 0) {
    return res.status(400).json({ error: "No valid place IDs provided" });
  }

  try {
    const apiKey = await getApiKey();
    const allReviews = [];
    let totalRatingSum = 0;
    let totalRatingCount = 0;

    for (const placeId of placeIds) {
      // Check cache first
      const cached = await getCachedReviews(placeId);
      if (cached) {
        allReviews.push(...cached.reviews);
        totalRatingSum += cached.ratingSum || 0;
        totalRatingCount += cached.ratingCount || 0;
        continue;
      }

      // Fetch from Places API
      const placeData = await fetchPlaceReviews(placeId, apiKey);
      const reviews = transformReviews(placeData, placeId);

      const ratingSum = (placeData.rating || 0) * (placeData.userRatingCount || 0);
      const ratingCount = placeData.userRatingCount || 0;

      // Cache the result
      await setCachedReviews(placeId, { reviews, ratingSum, ratingCount });

      allReviews.push(...reviews);
      totalRatingSum += ratingSum;
      totalRatingCount += ratingCount;
    }

    const averageRating =
      totalRatingCount > 0 ? Math.round((totalRatingSum / totalRatingCount) * 10) / 10 : 0;

    res.json({
      reviews: allReviews,
      metadata: {
        totalReviews: totalRatingCount,
        averageRating,
        lastFetched: new Date().toISOString(),
      },
    });
  } catch (err) {
    console.error("Error fetching reviews:", err);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});
