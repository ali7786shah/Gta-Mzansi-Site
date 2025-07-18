import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  Mail,
  MessageCircle,
  Github,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Shield,
  Clock,
  Globe,
} from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "Download APK", href: "#download" },
    { name: "Installation Guide", href: "#installation" },
    { name: "System Requirements", href: "#requirements" },
    { name: "Screenshots", href: "#screenshots" },
    { name: "FAQ", href: "#faq" },
  ]

  const gameFiles = [
    { name: "GTA Mzansi APK + OBB", href: "#apk-obb" },
    { name: "Kasi Vibes Mod", href: "#kasi-vibes" },
    { name: "Stereo Hearts Pack", href: "#stereo-hearts" },
    { name: "Legacy Edition", href: "#legacy" },
    { name: "PC Version", href: "#pc-version" },
  ]

  const support = [
    { name: "Help Center", href: "#help" },
    { name: "Contact Support", href: "#contact" },
    { name: "Bug Reports", href: "#bugs" },
    { name: "Feature Requests", href: "#features" },
    { name: "Community Forum", href: "#forum" },
  ]

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: MessageCircle, href: "#", label: "Discord" },
  ]

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                GTA Mzansi APK
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Experience the ultimate South African Grand Theft Auto adventure with authentic locations, local
                culture, and thrilling gameplay.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Shield className="w-4 h-4 text-green-400" />
                100% Safe & Secure
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4 text-blue-400" />
                Regular Updates
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Globe className="w-4 h-4 text-purple-400" />
                110M+ Downloads
              </div>
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <Download className="w-4 h-4 mr-2" />
              Download Now
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Game Files */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Game Files</h4>
            <ul className="space-y-2">
              {gameFiles.map((file, index) => (
                <li key={index}>
                  <a href={file.href} className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                    {file.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 mb-6">
              {support.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Support
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="flex flex-wrap gap-2 justify-center md:justify-end mb-3">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Latest Version 4.0.7</Badge>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Android 5.0+</Badge>
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Free Download</Badge>
              </div>
              <p className="text-gray-400 text-sm">Updated November 2024</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div className="flex flex-wrap gap-4">
              <span>© 2024 GTA Mzansi APK. All rights reserved.</span>
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#disclaimer" className="hover:text-white transition-colors">
                Disclaimer
              </a>
            </div>

            <div className="text-center md:text-right">
              <p>Made with ❤️ for South African GTA fans</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-500/20 rounded-lg">
          <p className="text-yellow-400 text-sm text-center">
            <strong>Disclaimer:</strong> GTA Mzansi is a fan-made modification. This website is not affiliated with
            Rockstar Games. Grand Theft Auto and GTA are trademarks of Take-Two Interactive Software Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
