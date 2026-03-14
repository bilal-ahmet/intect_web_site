import {
  Rocket,
  Users,
  Leaf,
  TrendingUp,
  Lightbulb,
  Shield,
} from "lucide-react"
import { values, approaches } from "@/data/content"

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Users,
  Leaf,
  TrendingUp,
  Lightbulb,
  Shield,
}

const WhyUs = () => (
  <section id="why-us" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-sm font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
          Neden Meven
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          Değerlerimiz ile{" "}
          <span className="gradient-text">Fark Yaratıyoruz</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Sektörde öncü olmamızı sağlayan temel değerler ve ilkeler. Her projede bu
          değerleri önceliklendirerek çalışıyoruz.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {values.map((value, index) => {
          const Icon = iconMap[value.icon] || Shield
          const isPopular = index === 4
          return (
            <div
              key={value.id}
              className={`relative rounded-2xl p-7 transition-all duration-300 card-hover ${
                isPopular
                  ? "bg-gradient-to-br from-sky-600 to-cyan-600 shadow-xl shadow-sky-500/25"
                  : "bg-slate-50 hover:bg-white border border-slate-100 hover:border-sky-100 hover:shadow-lg"
              }`}
            >
              {isPopular && (
                <div className="absolute top-4 right-4 px-2.5 py-1 bg-white/20 text-white text-xs font-semibold rounded-full">
                  Öne Çıkan
                </div>
              )}

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  isPopular ? "bg-white/20" : "bg-sky-50"
                }`}
              >
                <Icon size={22} className={isPopular ? "text-white" : "text-sky-600"} />
              </div>

              <h3
                className={`text-lg font-bold mb-3 ${
                  isPopular ? "text-white" : "text-slate-900"
                }`}
              >
                {value.title}
              </h3>

              <p
                className={`text-sm leading-relaxed ${
                  isPopular ? "text-sky-100" : "text-slate-500"
                }`}
              >
                {value.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Approach Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            Proje Yaklaşımımız
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
            Müşteri Odaklı,{" "}
            <span className="gradient-text">Çevik Süreç</span>
          </h3>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Her projede müşteri ihtiyaçlarını merkeze alarak, çevik ve sürdürülebilir
            çözümler üretiyoruz. Analiz aşamasından destek sürecine kadar yanınızdayız.
          </p>

          <div className="space-y-4">
            {approaches.map((approach) => (
              <div
                key={approach.step}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {approach.step}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">{approach.title}</div>
                  <div className="text-sm text-slate-500">{approach.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Visual */}
        <div className="relative">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
            {/* Circular progress visual */}
            <div className="relative w-48 h-48 mx-auto mb-8">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="40" stroke="#1e293b" strokeWidth="8" fill="none" />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#grad)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="251.3"
                  strokeDashoffset="0"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold text-white">%100</span>
                <span className="text-sky-400 text-xs mt-1">Müşteri Memnuniyeti</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5+", label: "Yıllık Deneyim" },
                { value: "99.9%", label: "Sistem Uptime" },
                { value: "24/7", label: "Destek" },
                { value: "4", label: "Ürün Ailesi" },
              ].map((item) => (
                <div key={item.label} className="bg-slate-700/50 rounded-xl p-4 text-center">
                  <div className="text-xl font-bold text-white">{item.value}</div>
                  <div className="text-slate-400 text-xs mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default WhyUs
