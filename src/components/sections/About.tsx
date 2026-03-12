import { CheckCircle, TrendingUp, ShieldCheck, Award, Clock, Activity } from "lucide-react"
import { aboutContent } from "@/data/content"
import Image from "next/image"

const statIconMap: Record<string, React.ElementType> = {
  "Yıllık Deneyim": Award,
  "Sistem Güvenilirliği": ShieldCheck,
  "Teknik Destek": Clock,
}

const About = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Images */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://www.Meventeknoloji.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.ab1c34c0.webp&w=1200&q=75"
              alt="Meven Teknoloji - IoT Çözümleri"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>

          {/* Stats card overlay */}
          <div className="absolute -bottom-8 -right-8 bg-slate-900 rounded-2xl p-6 shadow-2xl text-center min-w-40">
            <div className="text-3xl font-extrabold gradient-text mb-1">10+</div>
            <div className="text-slate-400 text-sm">Yıllık Sektör</div>
            <div className="text-slate-400 text-sm">Deneyimi</div>
          </div>

          {/* Top badge */}
          <div className="absolute -top-4 -left-4 bg-sky-500 text-white rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
            <Activity size={16} />
            <span className="text-sm font-semibold">Ar-Ge Odaklı</span>
          </div>
        </div>

        {/* Right — Content */}
        <div className="lg:pl-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            {aboutContent.badge}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-2">
            {aboutContent.subtitle}
          </h2>
          <h2 className="text-3xl sm:text-4xl font-extrabold gradient-text mb-6">
            {aboutContent.title}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            {aboutContent.description}
          </p>

          <p className="text-slate-500 leading-relaxed mb-8">
            {aboutContent.vision}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {aboutContent.highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl"
              >
                <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.label === "Verimlilik" ? (
                    <TrendingUp size={16} className="text-sky-600" />
                  ) : (
                    <ShieldCheck size={16} className="text-sky-600" />
                  )}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{item.label}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{item.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 pt-6 border-t border-slate-100">
            {aboutContent.stats.map((stat) => {
              const Icon = statIconMap[stat.label] || CheckCircle
              return (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center">
                    <Icon size={18} className="text-sky-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-slate-900">{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
