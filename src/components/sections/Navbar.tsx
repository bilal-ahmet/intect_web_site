"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { navLinks, siteConfig } from "@/data/content"
import Image from "next/image"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navLinks.map((link) => link.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg shadow-slate-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2 group"
            aria-label="Ana sayfaya git"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
                <Image
                  src={siteConfig.logoUrl}
                  alt={`${siteConfig.name} logosu`}
                  width={40}
                  height={40}
                  className="h-8 w-8 object-contain"
                  priority
                />
              </div>
              <span className="text-white font-bold text-lg tracking-tight group-hover:text-sky-400 transition-colors">
                {siteConfig.name}
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "")
              const isActive = activeSection === sectionId
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  tabIndex={0}
                  aria-label={link.label}
                  onKeyDown={(e) => e.key === "Enter" && handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-sky-400 bg-sky-400/10"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
            <button
              onClick={() => handleNavClick("#contact")}
              className="ml-4 px-5 py-2 bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/30 hover:-translate-y-0.5"
              aria-label="İletişime Geç"
            >
              İletişime Geç
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2"
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-sm border-t border-slate-700/50">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                tabIndex={0}
                aria-label={link.label}
                onKeyDown={(e) => e.key === "Enter" && handleNavClick(link.href)}
                className="block w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full px-4 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-lg transition-colors"
                aria-label="İletişime Geç"
              >
                İletişime Geç
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
