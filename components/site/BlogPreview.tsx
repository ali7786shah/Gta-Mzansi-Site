import Image from "next/image"

const posts = [
  {
    title: "Top 5 Kitchen Trends for 2025",
    excerpt: "[Placeholder: Short snippet about trends]",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "How to Choose Countertops",
    excerpt: "[Placeholder: Short snippet about countertop materials]",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Budget-Friendly Kitchen Upgrades",
    excerpt: "[Placeholder: Short snippet about affordable upgrades]",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
  },
]

export function BlogPreview() {
  return (
    <section id="blog" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0a2540] sm:text-4xl">
            Kitchen Remodeling Insights & Inspiration
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg">
              <div className="relative aspect-[16/10] w-full">
                <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#0a2540]">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}