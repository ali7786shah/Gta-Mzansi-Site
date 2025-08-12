import { Button } from "@/components/ui/button"

export function CTABanner() {
  return (
    <section className="bg-[#0a2540] py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-white">Book Your Free Kitchen Design Consultation Today!</h3>
        <Button className="bg-amber-500 text-slate-900 hover:bg-amber-600">Request Free Estimate</Button>
      </div>
    </section>
  )
}