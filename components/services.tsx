import { Button } from "@/components/ui/button"
import { 
  Palette, 
  Package, 
  Lightbulb, 
  Square, 
  Hammer, 
  Leaf 
} from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Kitchen Design & Planning",
    description: "Expert design consultation and comprehensive planning to create your perfect kitchen layout and aesthetic.",
    features: ["3D Design Renderings", "Space Optimization", "Material Selection", "Budget Planning"]
  },
  {
    icon: Package,
    title: "Custom Cabinets & Countertops",
    description: "Premium custom cabinetry and stunning countertops in granite, quartz, marble, and more.",
    features: ["Custom Design", "Premium Materials", "Professional Installation", "Lifetime Warranty"]
  },
  {
    icon: Lightbulb,
    title: "Lighting & Fixtures Installation",
    description: "Modern lighting solutions and fixture installation to brighten and enhance your kitchen space.",
    features: ["LED Lighting", "Under Cabinet Lights", "Pendant Installation", "Smart Controls"]
  },
  {
    icon: Square,
    title: "Flooring & Tiling",
    description: "Beautiful and durable flooring options including hardwood, tile, and luxury vinyl installations.",
    features: ["Hardwood Floors", "Ceramic Tile", "Backsplash Design", "Grout & Sealing"]
  },
  {
    icon: Hammer,
    title: "Full Kitchen Renovation",
    description: "Complete kitchen transformation from demolition to final touches, handled by our expert team.",
    features: ["Complete Remodel", "Project Management", "Quality Assurance", "Timeline Adherence"]
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Upgrades",
    description: "Sustainable and energy-efficient kitchen solutions for environmentally conscious homeowners.",
    features: ["Energy Star Appliances", "Sustainable Materials", "Water Conservation", "Green Building"]
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Our Comprehensive Kitchen Remodeling Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From initial design to final installation, we offer complete kitchen remodeling solutions tailored to your vision and budget.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-yellow-600" />
              </div>
              
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg">
            Get Your Free Consultation
          </Button>
          <p className="text-gray-600 mt-4">
            Schedule a free in-home consultation to discuss your kitchen remodeling project
          </p>
        </div>
      </div>
    </section>
  )
}