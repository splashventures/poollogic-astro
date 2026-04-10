'use client';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  image?: string;
  yearsCustomer?: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Emma Valdez',
    location: 'San Diego',
    text: "We have been using PoolLogic for our pool and spa services and had a great experience the entire time. Automated billing, weekly maintenance, and real-time pool health data. Our technician Roni is always reliable and thorough.",
    rating: 5,
  },
  {
    name: 'Tracy Serrano',
    location: 'San Diego',
    text: "Pool Logic is by far the best pool servicing company we've used! Believe me, after 30 plus years owning a pool, we've had a number of scammers. PoolLogic is efficient, prompt, very knowledgeable and reasonably priced.",
    rating: 5,
  },
  {
    name: 'Wayne Hawkins',
    location: 'San Diego',
    text: "Great pool service. Our pool water has been crystal clear, starting from the first day of Pool Logic's service. Highly recommend them to anyone looking for professional, reliable pool care.",
    rating: 5,
  },
];

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 text-lg leading-relaxed flex-grow">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#88d2c7] to-[#00568c] rounded-full flex items-center justify-center text-white font-semibold text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-gray-500 text-sm">
            {testimonial.location}
            {testimonial.yearsCustomer && (
              <span> · Customer for {testimonial.yearsCustomer} years</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#00568c] font-semibold mb-3">TESTIMONIALS</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Don&apos;t just take our word for it
          </h2>
          <p className="text-lg text-gray-600">
            See why San Diego homeowners trust us with their pools
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Verified reviews from real customers</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>5.0/5 star rating on Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
