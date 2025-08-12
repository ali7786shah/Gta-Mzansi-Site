import Link from "next/link"

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-lg font-semibold text-[#0a2540]">[Your Company Name] Remodelers</h4>
            <p className="mt-2 text-sm text-slate-600">[Placeholder: Short footer blurb]</p>
            <div className="mt-4 space-y-1 text-sm text-slate-600">
              <p>[Phone Number]</p>
              <p>[Email Address]</p>
              <p>[Street Address, Tacoma, WA]</p>
              <p>[Business Hours]</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#0a2540]">Quick Links</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li><Link href="#services" className="hover:text-[#0a2540]">Services</Link></li>
              <li><Link href="#gallery" className="hover:text-[#0a2540]">Gallery</Link></li>
              <li><Link href="#about" className="hover:text-[#0a2540]">About Us</Link></li>
              <li><Link href="#faq" className="hover:text-[#0a2540]">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#0a2540]">Resources</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li><Link href="#blog" className="hover:text-[#0a2540]">Blog</Link></li>
              <li><Link href="#" className="hover:text-[#0a2540]">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#0a2540]">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-[#0a2540]">Sitemap</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#0a2540]">Follow Us</h4>
            <div className="mt-2 flex gap-3 text-sm text-slate-600">
              <Link href="#" className="hover:text-[#0a2540]">Facebook</Link>
              <Link href="#" className="hover:text-[#0a2540]">Instagram</Link>
              <Link href="#" className="hover:text-[#0a2540]">Pinterest</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} [Your Company Name]. All rights reserved.
        </div>
      </div>
    </footer>
  )
}