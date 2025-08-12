"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-navy-900">
              Tacoma Kitchen Pro
            </h1>
            <p className="text-sm text-gray-600">Remodeling Experts</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-navy-900 font-medium transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-navy-900 font-medium transition-colors">
              Services
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-navy-900 font-medium transition-colors">
              Gallery
            </a>
            <a href="#about" className="text-gray-700 hover:text-navy-900 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-navy-900 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
              <Phone className="w-4 h-4 mr-2" />
              (253) 555-0123
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-navy-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-navy-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 text-gray-700 hover:text-navy-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-navy-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-navy-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  (253) 555-0123
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}