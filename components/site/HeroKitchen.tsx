import { Button } from "@/components/ui/button"
import { Star, ShieldCheck, BadgeCheck } from "lucide-react"

export function HeroKitchen() {
  return (
    <section
      className="relative"
      aria-label="Hero: Kitchen Remodeling Tacoma"
    >
      <div
        className="relative isolate min-h-[80vh] w-full overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />

        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Your Dream Kitchen Starts Here in Tacoma
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90 md:text-xl">
              Beautiful Designs. Professional Craftsmanship. Local Experts You Can Trust.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button className="h-12 rounded-md bg-amber-500 px-6 text-base font-semibold text-slate-900 hover:bg-amber-600">
                Request Free Estimate
              </Button>
              <Button
                variant="outline"
                className="h-12 border-white/80 bg-transparent px-6 text-base font-semibold text-white hover:bg-white/10"
              >
                View Gallery
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 text-white/90 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <Star className="h-6 w-6 text-amber-400" />
                <div>
                  <p className="text-sm font-semibold">4.9 Stars on Google</p>
                  <p className="text-xs text-white/70">[Placeholder: Google Reviews rating]</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BadgeCheck className="h-6 w-6 text-amber-400" />
                <div>
                  <p className="text-sm font-semibold">15+ Years in Business</p>
                  <p className="text-xs text-white/70">Over 15 years serving Tacoma homeowners</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-amber-400" />
                <div>
                  <p className="text-sm font-semibold">Licensed & Insured</p>
                  <p className="text-xs text-white/70">[Placeholder: License details]</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 w-full -translate-x-1/2 px-4 sm:bottom-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="no-scrollbar flex gap-2 overflow-x-auto rounded-full border border-white/20 bg-black/30 p-2 backdrop-blur">
              {[
                "Kitchen Renovation",
                "Cabinets",
                "Islands",
                "Countertops",
                "Tile Backsplashes",
              ].map((tag) => (
                <span
                  key={tag}
                  className="whitespace-nowrap rounded-full bg-white/10 px-4 py-1 text-sm text-white hover:bg-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}