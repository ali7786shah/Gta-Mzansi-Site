import { Shield, Star, Award, CreditCard } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Full licensing and comprehensive insurance coverage for your peace of mind and project protection.",
    details: ["State Licensed Contractor", "General Liability Insurance", "Workers Compensation", "Bonded & Insured"]
  },
  {
    icon: Star,
    title: "5-Star Rated on Google",
    description: "Consistently excellent reviews from satisfied customers across the Puget Sound region.",
    details: ["4.9/5 Average Rating", "200+ Verified Reviews", "Customer Satisfaction", "Repeat Clients"]
  },
  {
    icon: Award,
    title: "Premium Quality Materials",
    description: "We use only the finest materials from trusted manufacturers and suppliers.",
    details: ["Premium Cabinets", "Natural Stone Countertops", "Hardwood Flooring", "Energy Star Appliances"]
  },
  {
    icon: CreditCard,
    title: "Affordable Financing Available",
    description: "Flexible payment options and financing solutions to make your dream kitchen a reality.",
    details: ["0% Interest Options", "Flexible Terms", "Quick Approval", "No Hidden Fees"]
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Why Choose Tacoma Kitchen Pro?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're not just another remodeling company. We're your neighbors, your trusted partners, and your kitchen transformation experts.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors">
                <reason.icon className="w-10 h-10 text-yellow-600" />
              </div>
              
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {reason.description}
              </p>
              
              <ul className="space-y-2 text-left">
                {reason.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-navy-900 text-center mb-8">
            Our Seamless Remodeling Process
          </h3>
          
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Consultation", desc: "Free in-home consultation" },
              { step: "2", title: "Design", desc: "Custom design & planning" },
              { step: "3", title: "Quote", desc: "Detailed project estimate" },
              { step: "4", title: "Installation", desc: "Professional installation" },
              { step: "5", title: "Completion", desc: "Final walkthrough & warranty" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                  {process.step}
                </div>
                <h4 className="font-semibold text-navy-900 mb-1">{process.title}</h4>
                <p className="text-sm text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statement */}
        <div className="text-center mt-16">
          <div className="bg-navy-900 text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Your Trust is Our Most Important Asset
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              We understand that inviting us into your home is a significant decision. That's why we're committed to transparency, 
              communication, and delivering results that exceed your expectations. Every project is backed by our comprehensive 
              warranty and our promise to stand behind our work.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}