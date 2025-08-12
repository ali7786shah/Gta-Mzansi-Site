import { ShieldCheck, Star, Gem, Banknote } from "lucide-react"

const features = [
  {
    title: "Licensed & Insured",
    description: "[Placeholder: Confirmation of licensing and insurance]",
    icon: ShieldCheck,
  },
  {
    title: "5-Star Rated on Google",
    description: "[Placeholder: Link or summary of reviews]",
    icon: Star,
  },
  {
    title: "Premium Quality Materials",
    description: "[Placeholder: Notes on materials and brands]",
    icon: Gem,
  },
  {
    title: "Affordable Financing Available",
    description: "[Placeholder: Financing info and options]",
    icon: Banknote,
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0a2540] sm:text-4xl">
            Why Choose Us
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#0a2540]">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}