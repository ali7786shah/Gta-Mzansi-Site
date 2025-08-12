import Image from "next/image"

export function AboutUs() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop"
              alt="Team working in a kitchen"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0a2540] sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-slate-600">
              [Placeholder: Short company intro] We are your local Tacoma kitchen remodeling experts, dedicated to crafting beautiful, functional kitchens with a seamless experience from design to completion. Our team blends innovative design with meticulous craftsmanship to deliver results you will love for years.
            </p>
            <p className="mt-3 text-slate-600">
              Over <span className="font-semibold text-[#0a2540]">15 years</span> serving Tacoma homeowners.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}