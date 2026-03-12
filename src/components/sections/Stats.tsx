"use client"

import { useEffect, useRef, useState } from "react"
import { Award, CheckCircle, Headphones, Target } from "lucide-react"
import { stats } from "@/data/content"

const iconMap: Record<string, React.ElementType> = {
  Award,
  CheckCircle,
  HeadphonesIcon: Headphones,
  Target,
}

const StatItem = ({ stat }: { stat: (typeof stats)[0] }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const Icon = iconMap[stat.icon] || Award

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="inline-flex w-16 h-16 rounded-2xl bg-white/10 items-center justify-center mb-4 mx-auto">
        <Icon size={28} className="text-sky-300" />
      </div>
      <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">{stat.value}</div>
      <div className="text-sky-300 font-semibold mb-1">{stat.label}</div>
      <div className="text-slate-400 text-sm">{stat.description}</div>
    </div>
  )
}

const Stats = () => (
  <section
    id="stats"
    className="py-24 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 relative overflow-hidden"
  >
    {/* Background decorations */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          Başarılarımız
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Rakamlarla{" "}
          <span className="gradient-text">Meven Teknoloji</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Enerji sektöründe yarattığımız değeri somut verilerle paylaşıyoruz.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat) => (
          <StatItem key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Divider */}
      <div className="mt-20 border-t border-slate-700/50 pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { label: "React, Node.js, Python", desc: "Yazılım Teknolojileri" },
            { label: "NB-IoT, LoRaWAN, LTE-M", desc: "Haberleşme Protokolleri" },
            { label: "ISO 9001, CE, FCC", desc: "Sertifikasyon Standartları" },
          ].map((item) => (
            <div key={item.label} className="group">
              <div className="text-sky-400 font-bold text-lg mb-1 group-hover:text-sky-300 transition-colors">
                {item.label}
              </div>
              <div className="text-slate-500 text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Stats
