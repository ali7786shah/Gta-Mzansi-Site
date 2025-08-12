export function Certifications() {
  const certifications = [
    {
      name: "NKBA",
      fullName: "National Kitchen & Bath Association",
      description: "Professional member since 2010",
      logo: "🏆"
    },
    {
      name: "BBB",
      fullName: "Better Business Bureau",
      description: "A+ Rating Accredited Business",
      logo: "⭐"
    },
    {
      name: "Houzz",
      fullName: "Houzz Pro",
      description: "Best of Houzz 2024 Winner",
      logo: "🏠"
    },
    {
      name: "NARI",
      fullName: "National Association of Remodeling Industry",
      description: "Certified Remodeling Professional",
      logo: "🔨"
    }
  ]

  const suppliers = [
    { name: "KraftMaid", logo: "🏭" },
    { name: "Quartz", logo: "💎" },
    { name: "Kohler", logo: "🚿" },
    { name: "GE Appliances", logo: "⚡" },
    { name: "Shaw Floors", logo: "🪵" },
    { name: "Daltile", logo: "🧱" }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Industry Recognition & Trusted Partnerships
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence has earned us recognition from leading industry organizations and partnerships with premium suppliers.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-navy-900 text-center mb-8">
            Professional Certifications & Awards
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{cert.logo}</div>
                <h4 className="text-lg font-bold text-navy-900 mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{cert.fullName}</p>
                <p className="text-xs text-yellow-600 font-medium">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Supplier Partners */}
        <div>
          <h3 className="text-xl font-semibold text-navy-900 text-center mb-8">
            Premium Material Suppliers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {suppliers.map((supplier, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{supplier.logo}</div>
                <h4 className="text-sm font-semibold text-navy-900">{supplier.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statement */}
        <div className="text-center mt-12">
          <div className="inline-block bg-white rounded-lg px-8 py-4 shadow-md">
            <p className="text-gray-600">
              <span className="font-semibold text-navy-900">Trusted by Tacoma homeowners since 2009</span>
              <br />
              <span className="text-sm">Licensed • Bonded • Insured • BBB Accredited</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}