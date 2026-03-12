import { Briefcase, Code2, Settings, Users } from "lucide-react"
import { teamSections, techStacks } from "@/data/content"

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Code2,
  Settings,
}

const Team = () => (
  <section id="team" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-sm font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
          Ekibimiz
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          Geleceği{" "}
          <span className="gradient-text">Birlikte Tasarlıyoruz</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Deneyimli mühendislerimiz, yenilikçi yöneticilerimiz ve uzman üretim ekibimizle
          enerji sektöründe dijital dönüşümün öncülüğünü yapıyoruz.
        </p>
      </div>

      {/* Team sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {teamSections.map((section) => {
          const Icon = iconMap[section.icon] || Users
          return (
            <div
              key={section.id}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 hover:border-sky-100 card-hover text-center"
            >
              <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 items-center justify-center mb-6 shadow-lg shadow-sky-500/25 group-hover:scale-110 transition-transform">
                <Icon size={26} className="text-white" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 text-sky-600 text-xs font-semibold rounded-full mb-3">
                <Users size={12} />
                {section.count}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                {section.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed">
                {section.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Tech Stacks */}
      <div className="bg-slate-900 rounded-2xl p-8 sm:p-12">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white mb-2">
            İnovasyon & Teknoloji
          </h3>
          <p className="text-slate-400 text-sm">
            Ekibimizin kullandığı teknolojiler ve geliştirdiği yenilikçi çözümler.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {techStacks.map((stack) => (
            <div
              key={stack.category}
              className="bg-slate-800/60 rounded-xl p-6 hover:bg-slate-700/60 transition-colors"
            >
              <h4 className="text-sky-400 font-semibold text-sm mb-4">{stack.category}</h4>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-8 pt-8 border-t border-slate-700/50 text-center">
          <p className="text-slate-400 italic">
            "Ekibimiz, IoT teknolojileri, yapay zeka ve makine öğrenmesi alanlarında sürekli
            araştırma geliştirme çalışmaları yürütmektedir."
          </p>
          <p className="text-sky-400 text-sm font-semibold mt-2">— Meven Teknoloji Ar-Ge Ekibi</p>
        </div>
      </div>
    </div>
  </section>
)

export default Team
