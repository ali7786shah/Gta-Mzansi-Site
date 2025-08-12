import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0a2540] sm:text-4xl">
              Ready to Transform Your Kitchen? Let’s Talk!
            </h2>
            <p className="mt-3 text-slate-600">
              [Placeholder: Contact intro text] Tell us about your project and we’ll follow up to schedule your free consultation.
            </p>
            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="[Name]" />
                <Input placeholder="[Email]" type="email" />
              </div>
              <Input placeholder="[Phone]" />
              <Textarea placeholder="[Message]" rows={5} />
              <Button className="bg-amber-500 text-slate-900 hover:bg-amber-600">Request Free Estimate</Button>
            </form>
          </div>
          <div className="rounded-xl border bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-[#0a2540]">Contact Information</h3>
            <div className="mt-3 space-y-1 text-sm text-slate-600">
              <p>[Phone Number]</p>
              <p>[Email Address]</p>
              <p>[Street Address, City, State, Zip]</p>
              <p>[Business Hours]</p>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-[#0a2540]">Privacy</h4>
              <p className="mt-1 text-xs text-slate-500">[Placeholder: We respect your privacy and never share your information.]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}