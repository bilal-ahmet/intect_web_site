"use client"

import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Zap } from "lucide-react"
import { contactInfo, siteConfig } from "@/data/content"
import Image from "next/image"

const Footer = () => {
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  const companyLinks = [
    { label: "Hakkımızda", id: "about" },
    { label: "Ekibimiz", id: "team" },
    { label: "Neden Meven", id: "why-us" },
    { label: "İletişim", id: "contact" },
  ]

  const solutionLinks = [
    { label: "Elektronik Donanım Tasarımı", id: "solutions" },
    { label: "Gömülü Yazılım Geliştirme", id: "solutions" },
    { label: "Bağlantı ve Haberleşme", id: "solutions" },
    { label: "Prototipten Seri Üretime", id: "solutions" },
  ]

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
                <Image
                  src={siteConfig.logoUrl}
                  alt={`${siteConfig.name} logosu`}
                  width={44}
                  height={44}
                  className="h-9 w-9 object-contain"
                />
              </div>
              <span className="text-white font-bold text-lg">{siteConfig.name}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Fikir aşamasından prototipe, üretim doğrulamasından teslimata kadar IoT cihazları
              için uçtan uca geliştirme ve ürünleştirme desteği sunuyoruz.
            </p>
            {/* Social icons */}
            {/* <div className="flex gap-3">
              {[
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
                { Icon: Twitter, label: "Twitter", href: "#" },
                { Icon: Github, label: "GitHub", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  tabIndex={0}
                  className="w-9 h-9 bg-slate-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} className="text-slate-400 hover:text-white" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-sky-500 rounded-full" />
              Şirket
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    tabIndex={0}
                    aria-label={link.label}
                    onKeyDown={(e) => e.key === "Enter" && handleNavClick(link.id)}
                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-sky-500 rounded-full" />
              Çözümlerimiz
            </h4>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    tabIndex={0}
                    aria-label={link.label}
                    onKeyDown={(e) => e.key === "Enter" && handleNavClick(link.id)}
                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-sky-500 rounded-full" />
              İletişim
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  aria-label="E-posta"
                  tabIndex={0}
                  className="flex items-start gap-3 text-slate-400 hover:text-sky-400 text-sm transition-colors"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  aria-label="Telefon"
                  tabIndex={0}
                  className="flex items-start gap-3 text-slate-400 hover:text-sky-400 text-sm transition-colors"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400 text-sm">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                  {contactInfo.address}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © {currentYear} Meven Teknoloji. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <Zap size={12} className="text-sky-500" />
            IoT Tabanlı Enerji Teknolojileri
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
