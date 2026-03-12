"use client"

import { ArrowRight, Play, Zap, Shield, Clock } from "lucide-react"
import { siteConfig, heroStats } from "@/data/content"
import Image from "next/image"

const iconMap: Record<string, React.ElementType> = {
  "Yıllık Deneyim": Zap,
  "Sistem Güvenilirliği": Shield,
  "Teknik Destek": Clock,
}

const Hero = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              IoT Tabanlı Enerji Takibi
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
              Geleceğin{" "}
              <span className="gradient-text">Enerji Takibini</span>{" "}
              Bugünden Tasarlıyoruz
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
              {siteConfig.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => handleScroll("solutions")}
                aria-label="Çözümlerimizi Keşfedin"
                onKeyDown={(e) => e.key === "Enter" && handleScroll("solutions")}
                tabIndex={0}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/30 hover:shadow-sky-400/40 hover:-translate-y-0.5"
              >
                Çözümlerimizi Keşfedin
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => handleScroll("contact")}
                aria-label="İletişime Geçin"
                onKeyDown={(e) => e.key === "Enter" && handleScroll("contact")}
                tabIndex={0}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-600 hover:border-sky-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:bg-sky-500/10"
              >
                <Play size={18} />
                İletişime Geçin
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {heroStats.map((stat) => {
                const Icon = iconMap[stat.label] || Zap
                return (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sky-500/10 rounded-lg flex items-center justify-center">
                      <Icon size={18} className="text-sky-400" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative flex justify-center items-center">
            {/* Main image */}
            <div className="relative w-full max-w-lg float-animation">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sky-900/30 border border-slate-700/50">
                <Image
                  src={siteConfig.heroImage1}
                  alt="Meven IoT Çözümleri"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>

              {/* Floating badge 1 */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-xl flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Shield size={16} className="text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Güvenli Sistem</div>
                  <div className="text-xs text-slate-500">99.9% Uptime</div>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -bottom-4 -right-4 bg-slate-800 rounded-xl px-4 py-3 shadow-xl border border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-400 text-xs font-semibold">Gerçek Zamanlı İzleme</span>
                </div>
                <div className="text-white text-sm font-bold mt-1">Aktif Sensörler</div>
              </div>
            </div>

            {/* Small thumbnail */}
            <div className="absolute bottom-8 left-0 w-32 rounded-xl overflow-hidden shadow-lg border-2 border-sky-500/30 hidden sm:block">
              <Image
                src={siteConfig.heroImage2}
                alt="Meven IoT Cihazları"
                width={128}
                height={96}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
