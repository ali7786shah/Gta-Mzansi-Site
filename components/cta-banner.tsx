import { Button } from "@/components/ui/button"
import { Calendar, Phone, MessageCircle } from "lucide-react"

export function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Book Your Free Kitchen Design Consultation Today!
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transform your kitchen dreams into reality with our expert design team. 
            Get personalized recommendations, 3D renderings, and a detailed estimate - all completely free.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4">
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Free Consultation
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-navy-900 font-bold text-lg px-8 py-4">
            <Phone className="w-5 h-5 mr-2" />
            Call (253) 555-0123
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Free Consultation</h3>
            <p className="text-gray-300">No obligation, no pressure - just expert advice</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">3D Design Renderings</h3>
            <p className="text-gray-300">See your new kitchen before construction begins</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Detailed Estimate</h3>
            <p className="text-gray-300">Transparent pricing with no hidden costs</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-400">15+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">500+</div>
              <div className="text-sm text-gray-300">Kitchens Remodeled</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">4.9/5</div>
              <div className="text-sm text-gray-300">Customer Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">100%</div>
              <div className="text-sm text-gray-300">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="mt-8">
          <p className="text-yellow-400 font-semibold">
            ⏰ Limited Availability - Book Your Spot Before the New Year Rush!
          </p>
        </div>
      </div>
    </section>
  )
}