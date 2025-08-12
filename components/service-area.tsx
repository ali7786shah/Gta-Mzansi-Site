import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const serviceAreas = [
  "Tacoma",
  "Puyallup", 
  "Lakewood",
  "Federal Way",
  "Auburn",
  "Kent",
  "Renton",
  "Gig Harbor",
  "University Place",
  "Fircrest"
]

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    detail: "(253) 555-0123",
    link: "tel:253-555-0123"
  },
  {
    icon: Mail,
    title: "Email",
    detail: "info@tacomakitchenpro.com",
    link: "mailto:info@tacomakitchenpro.com"
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM"
  }
]

export function ServiceArea() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Serving the Greater Tacoma Area
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We proudly serve homeowners throughout the Puget Sound region, bringing professional kitchen remodeling services to your neighborhood.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">
                Our Service Coverage Area
              </h3>
              
              {/* Simplified Map */}
              <div className="relative bg-blue-50 rounded-lg p-8 mb-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h4 className="text-lg font-semibold text-navy-900 mb-2">Greater Tacoma Region</h4>
                  <p className="text-gray-600 text-sm">
                    We cover a 25-mile radius around Tacoma, serving homeowners in Pierce and King Counties.
                  </p>
                </div>
                
                {/* Service Area Dots */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-yellow-500 rounded-full"></div>
                </div>
              </div>

              {/* Service Areas List */}
              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin className="w-4 h-4 text-yellow-500" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">
                Ready to Transform Your Kitchen?
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're in Tacoma, Puyallup, Lakewood, or any of our service areas, we're here to help you create the kitchen of your dreams. 
                Contact us today for a free consultation and estimate.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <contact.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900">{contact.title}</div>
                    {contact.link ? (
                      <a 
                        href={contact.link}
                        className="text-gray-600 hover:text-navy-900 transition-colors"
                      >
                        {contact.detail}
                      </a>
                    ) : (
                      <div className="text-gray-600">{contact.detail}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-8 py-3">
                Get Free Estimate
              </Button>
            </div>

            {/* Service Area Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Not in our service area?</strong> We may still be able to help! 
                Contact us to discuss your project and we'll let you know if we can accommodate your location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}