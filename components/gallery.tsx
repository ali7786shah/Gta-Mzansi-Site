"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Eye } from "lucide-react"

const transformations = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Modern Farmhouse Transformation",
    description: "From outdated to outstanding: a complete modern kitchen overhaul with custom cabinetry and quartz countertops.",
    location: "Tacoma, WA"
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Contemporary Elegance",
    description: "Sleek, minimalist design with premium materials and smart storage solutions for a growing family.",
    location: "Puyallup, WA"
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Classic to Contemporary",
    description: "Timeless design meets modern functionality with custom woodwork and premium appliances.",
    location: "Lakewood, WA"
  }
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === transformations.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? transformations.length - 1 : prevIndex - 1
    )
  }

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            See Our Transformations: Before & After
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Witness the incredible transformations we've created for Tacoma homeowners. Each project tells a story of vision, craftsmanship, and stunning results.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-navy-900" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-navy-900" />
          </button>

          {/* Current Slide */}
          <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Before Image */}
              <div className="relative">
                <img
                  src={transformations[currentIndex].before}
                  alt={`Before: ${transformations[currentIndex].title}`}
                  className="w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  BEFORE
                </div>
              </div>

              {/* After Image */}
              <div className="relative">
                <img
                  src={transformations[currentIndex].after}
                  alt={`After: ${transformations[currentIndex].title}`}
                  className="w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  AFTER
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                {transformations[currentIndex].title}
              </h3>
              <p className="text-gray-600 mb-3">
                {transformations[currentIndex].description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  📍 {transformations[currentIndex].location}
                </span>
                <Button variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white">
                  <Eye className="w-4 h-4 mr-2" />
                  View Full Project
                </Button>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {transformations.map((_, index) => (
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

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 text-lg">
            View Complete Portfolio
          </Button>
          <p className="text-gray-600 mt-4">
            Explore hundreds of kitchen transformations in our comprehensive gallery
          </p>
        </div>
      </div>
    </section>
  )
}