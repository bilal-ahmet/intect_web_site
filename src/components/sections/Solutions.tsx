"use client"

import { Gauge, Router, Radio, BarChart3, CheckCircle, ArrowRight } from "lucide-react"
import { solutions } from "@/data/content"

const iconMap: Record<string, React.ElementType> = {
  Gauge,
  Router,
  Radio,
  BarChart3,
}

const Solutions = () => (
  <section id="solutions" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-sm font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
          Çözümlerimiz
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          Kapsamlı{" "}
          <span className="gradient-text">IoT Çözümleri</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Geleneksel gaz sayaçlarını akıllı ve bağlı cihazlara dönüştürün. Sensörden yazılıma kadar
          uçtan uca çözümler sunuyoruz.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map((solution, index) => {
          const Icon = iconMap[solution.icon] || Gauge
          return (
            <div
              key={solution.id}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 hover:border-sky-100 card-hover"
            >
              {/* Icon */}
              <div
                className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.color} items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon size={24} className="text-white" />
              </div>

              {/* Tag */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-sky-500 bg-sky-50 px-2.5 py-1 rounded-full">
                  Çözüm 0{index + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                {solution.title}
              </h3>

              <p className="text-slate-500 leading-relaxed mb-6 text-sm">
                {solution.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle size={14} className="text-sky-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <div className="flex items-center gap-1 text-sky-600 text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                Daha Fazla Bilgi
                <ArrowRight size={14} />
              </div>
            </div>
          )
        })}
      </div>

      {/* CTA Band */}
      <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-48 h-48 bg-sky-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-cyan-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Projenizi Hayata Geçirelim
          </h3>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Geliştirdiğimiz çözümler hakkında daha fazla bilgi almak veya projenizi
            görüşmek için bizimle iletişime geçin.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/30"
          >
            Teklif Alın
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Solutions
