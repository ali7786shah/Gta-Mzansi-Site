import { Wrench, Hammer, Lightbulb, Ruler, Leaf, LayoutGrid } from "lucide-react"

const services = [
  {
    title: "Kitchen Design & Planning",
    description: "[Placeholder: Service Description] Expert layouts for flow and functionality.",
    icon: Ruler,
  },
  {
    title: "Custom Cabinets & Countertops",
    description: "[Placeholder: Service Description] Tailored storage and premium surfaces.",
    icon: Hammer,
  },
  {
    title: "Lighting & Fixtures Installation",
    description: "[Placeholder: Service Description] Bright, efficient lighting solutions.",
    icon: Lightbulb,
  },
  {
    title: "Flooring & Tiling",
    description: "[Placeholder: Service Description] Durable, stylish floors and backsplashes.",
    icon: LayoutGrid,
  },
  {
    title: "Full Kitchen Renovation",
    description: "[Placeholder: Service Description] From demo to the final reveal.",
    icon: Wrench,
  },
  {
    title: "Eco-Friendly Upgrades",
    description: "[Placeholder: Service Description] Sustainable materials and appliances.",
    icon: Leaf,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0a2540] sm:text-4xl">
            Our Comprehensive Kitchen Remodeling Services
          </h2>
          <p className="mt-3 text-slate-600">[Placeholder: Brief intro to services]</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#0a2540]">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}