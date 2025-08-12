import { Button } from "@/components/ui/button"
import {
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Shield,
  Clock,
  MapPin,
  Phone,
  Calendar,
} from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "Kitchen Design", href: "#services" },
    { name: "Portfolio Gallery", href: "#gallery" },
    { name: "About Us", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ]

  const services = [
    { name: "Custom Cabinets", href: "#services" },
    { name: "Countertop Installation", href: "#services" },
    { name: "Kitchen Renovation", href: "#services" },
    { name: "Lighting & Fixtures", href: "#services" },
    { name: "Flooring & Tiling", href: "#services" },
  ]

  const support = [
    { name: "Free Consultation", href: "#contact" },
    { name: "Get Estimate", href: "#contact" },
    { name: "Project Planning", href: "#services" },
    { name: "Warranty Info", href: "#warranty" },
    { name: "Care Instructions", href: "#care" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer id="contact" className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Tacoma Kitchen Pro
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Transforming kitchens and enhancing homes throughout the Puget Sound region with professional craftsmanship, 
                beautiful designs, and exceptional customer service.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Shield className="w-4 h-4 text-yellow-400" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock className="w-4 h-4 text-yellow-400" />
                15+ Years Experience
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-yellow-400" />
                Local Tacoma Company
              </div>
            </div>

            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
              <Phone className="w-4 h-4 mr-2" />
              Call (253) 555-0123
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get Started</h4>
            <ul className="space-y-2 mb-6">
              {support.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black bg-transparent"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">(253) 555-0123</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">info@tacomakitchenpro.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Tacoma, WA 98402</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Service Areas</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                <div>• Tacoma</div>
                <div>• Puyallup</div>
                <div>• Lakewood</div>
                <div>• Federal Way</div>
                <div>• Auburn</div>
                <div>• Kent</div>
                <div>• Gig Harbor</div>
                <div>• University Place</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Follow Our Work</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 bg-gray-800 hover:bg-yellow-500 rounded-lg transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 hover:text-black" />
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="flex flex-wrap gap-2 justify-center md:justify-end mb-3">
                <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-3 py-1 rounded-full text-sm">
                  BBB A+ Rated
                </span>
                <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-3 py-1 rounded-full text-sm">
                  NKBA Member
                </span>
                <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-3 py-1 rounded-full text-sm">
                  Licensed & Insured
                </span>
              </div>
              <p className="text-gray-400 text-sm">Serving Tacoma since 2009</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div className="flex flex-wrap gap-4">
              <span>© 2024 Tacoma Kitchen Pro. All rights reserved.</span>
              <a href="#privacy" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <a href="#sitemap" className="hover:text-yellow-400 transition-colors">
                Sitemap
              </a>
            </div>

            <div className="text-center md:text-right">
              <p>Transforming kitchens, enhancing homes in Tacoma</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-8 p-6 bg-yellow-500 rounded-lg text-center">
          <h3 className="text-xl font-bold text-black mb-2">
            Ready to Transform Your Kitchen?
          </h3>
          <p className="text-black/80 mb-4">
            Get your free consultation and estimate today!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-navy-900 hover:bg-navy-800 text-white font-bold">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
