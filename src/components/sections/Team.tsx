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
          elektronik ürün geliştirme süreçlerini disiplinli ve ölçeklenebilir biçimde yönetiyoruz.
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
    </div>
  </section>
)

export default Team
