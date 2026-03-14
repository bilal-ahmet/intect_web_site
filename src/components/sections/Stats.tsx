"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { processFlowIntro, processSteps } from "@/data/content"

type Step = (typeof processSteps)[0]

const useReveal = (delay = 0) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible, delay }
}

const StepCard = ({ step, index }: { step: Step; index: number }) => {
  const { ref, isVisible } = useReveal(index * 60)

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`h-full rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm shadow-xl shadow-slate-950/20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-xs font-semibold text-sky-300">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <ArrowRight size={10} />
        <span>Aşama</span>
      </div>
      <h3 className="text-sm font-bold text-white mb-2 leading-snug">{step.title}</h3>
      <p className="text-xs leading-relaxed text-slate-300">{step.description}</p>
    </div>
  )
}

const TimelineDot = ({ index }: { index: number }) => {
  const { ref, isVisible } = useReveal(index * 60)

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`relative z-10 flex items-center justify-center transition-all duration-500 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-sky-300/70 bg-slate-950 shadow-[0_0_0_5px_rgba(56,189,248,0.12)]">
        <div className="h-3 w-3 rounded-full bg-sky-300" />
      </div>
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
          {processFlowIntro.badge}
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          <span className="gradient-text">{processFlowIntro.title}</span>
        </h2>
        <p className="text-slate-400 max-w-4xl mx-auto leading-relaxed">
          {processFlowIntro.description}
        </p>
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-4">
        {processSteps.map((step, index) => (
          <StepCard key={step.id} step={step} index={index} />
        ))}
      </div>

      {/* Desktop: 3 explicit rows so cards expand naturally */}
      <div className="relative hidden md:block">
        {/* Row 1 — top cards */}
        <div className="grid grid-cols-8 gap-x-3">
          {processSteps.map((step, index) =>
            step.position === "top" ? (
              <StepCard key={step.id} step={step} index={index} />
            ) : (
              <div key={step.id} />
            )
          )}
        </div>

        {/* Row 2 — timeline dots */}
        <div className="relative grid grid-cols-8 gap-x-3 py-5">
          <div className="absolute left-5 right-5 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-sky-400/10 via-sky-400/60 to-sky-400/10" />
          {processSteps.map((step, index) => (
            <TimelineDot key={step.id} index={index} />
          ))}
        </div>

        {/* Row 3 — bottom cards */}
        <div className="grid grid-cols-8 gap-x-3">
          {processSteps.map((step, index) =>
            step.position === "bottom" ? (
              <StepCard key={step.id} step={step} index={index} />
            ) : (
              <div key={step.id} />
            )
          )}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          "Tekliften sevkiyata kadar tek ekip koordinasyonu",
          "Donanım, yazılım ve üretim doğrulaması aynı akışta ilerler",
          "Her aşamada izlenebilirlik ve planlı geçiş noktaları uygulanır",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300 backdrop-blur-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Stats
