import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#about", label: "About Us" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-[#0a2540]" />
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-[#0a2540]">[Your Company Name] Remodelers</span>
            <span className="text-xs text-slate-500">Transforming Kitchens, Enhancing Homes</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-[#0a2540]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="bg-amber-500 text-slate-900 hover:bg-amber-600">Request Free Estimate</Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mt-6 flex flex-col gap-5">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="text-base font-medium text-slate-700 hover:text-[#0a2540]">
                    {item.label}
                  </Link>
                ))}
                <Button className="mt-2 bg-amber-500 text-slate-900 hover:bg-amber-600">Request Free Estimate</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}