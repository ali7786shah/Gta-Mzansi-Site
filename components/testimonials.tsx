"use client"

import { useState } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah & Mike Johnson",
    location: "Tacoma, WA",
    rating: 5,
    text: "Our kitchen remodel exceeded all expectations! The team was professional, communicative, and the results are absolutely stunning. Our outdated 1980s kitchen is now a modern, functional space that we love spending time in. Highly recommend!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    project: "Full Kitchen Renovation"
  },
  {
    id: 2,
    name: "David Chen",
    location: "Puyallup, WA",
    rating: 5,
    text: "The attention to detail was incredible. From the custom cabinets to the quartz countertops, everything was perfectly executed. The project was completed on time and within budget. Couldn't be happier with our new kitchen!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    project: "Custom Cabinets & Countertops"
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    location: "Lakewood, WA",
    rating: 5,
    text: "Professional, reliable, and exceptional quality work. The team transformed our cramped kitchen into an open, airy space that's perfect for entertaining. The design process was collaborative and fun. We love our new kitchen!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    project: "Kitchen Layout & Design"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            What Our Happy Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Tacoma homeowners have to say about their kitchen transformation experience.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200"
          >
            <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200"
          >
            <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Current Testimonial */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center relative">
            <Quote className="w-12 h-12 text-yellow-500 mx-auto mb-6 opacity-20" />
            
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 italic leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 mb-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="text-left">
                <div className="font-semibold text-navy-900">{testimonials[currentIndex].name}</div>
                <div className="text-sm text-gray-600">{testimonials[currentIndex].location}</div>
                <div className="text-xs text-yellow-600 font-medium">{testimonials[currentIndex].project}</div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-yellow-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-16">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              Join Our 200+ Happy Customers
            </h3>
            <p className="text-gray-600 mb-4">
              Read more reviews and see why Tacoma homeowners choose us for their kitchen remodeling projects.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg transition-colors">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}