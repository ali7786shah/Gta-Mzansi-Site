import { Button } from "@/components/ui/button"
import { Users, MapPin, Clock } from "lucide-react"

export function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
              alt="Our team working on a kitchen remodel"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
                About Tacoma Kitchen Pro
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are Tacoma's premier kitchen remodeling company, dedicated to transforming ordinary kitchens into extraordinary spaces that inspire and delight. Our passion for quality craftsmanship and attention to detail has made us the trusted choice for homeowners throughout the Puget Sound region.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 15 years serving Tacoma homeowners, we've built our reputation on delivering beautiful designs, professional craftsmanship, and exceptional customer service. Every project we undertake reflects our commitment to excellence and our understanding that your kitchen is the heart of your home.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="font-semibold text-navy-900">Expert Team</div>
                  <div className="text-sm text-gray-600">Skilled craftsmen</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="font-semibold text-navy-900">Local Focus</div>
                  <div className="text-sm text-gray-600">Tacoma & surrounding areas</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="font-semibold text-navy-900">Timely Delivery</div>
                  <div className="text-sm text-gray-600">On schedule, every time</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Button className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-3">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}