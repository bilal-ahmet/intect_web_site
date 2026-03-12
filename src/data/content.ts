import type { Solution, Value, TeamSection, Stat, ContactInfo, TechStack, Approach } from "@/types"

export const siteConfig = {
  name: "Meven Teknoloji",
  tagline: "Geleceğin Enerji Takibini Bugünden Tasarlıyoruz",
  description:
    "Meven Teknoloji olarak, doğalgaz sektöründe IoT tabanlı cihazlar, sensör sistemleri, gateway çözümleri, yapay zekâ destekli yazılımlar ve mobil/web platformları ile dijital dönüşümü destekliyoruz.",
  logoUrl: "/images/logo.png",
  heroImage1: "/images/hero-1.webp",
  heroImage2: "/images/hero-2.webp",
}

export const navLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Çözümlerimiz", href: "#solutions" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Neden Meven", href: "#why-us" },
  { label: "Ekibimiz", href: "#team" },
  { label: "İletişim", href: "#contact" },
]

export const heroStats = [
  { value: "10+", label: "Yıllık Deneyim" },
  { value: "99.9%", label: "Sistem Güvenilirliği" },
  { value: "24/7", label: "Teknik Destek" },
]

export const solutions: Solution[] = [
  {
    id: "gas-sensor",
    title: "Gaz Takip Sensörü",
    description:
      "Yüksek hassasiyetli, düşük enerji tüketimli sensörlerle olası sızıntıları anında tespit edin. Mevcut gaz sayaçlarını bir dakikadan kısa sürede akıllı hale getirir.",
    features: [
      "Dakikalar içinde kurulum",
      "10 yıla kadar pil ömrü",
      "Altyapınıza tam uyum",
      "Zorlu ortamlara dayanıklı",
      "Maliyet tasarrufu sağlar",
    ],
    icon: "Gauge",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: "gateway",
    title: "Gateway Cihazı",
    description:
      "IoT sisteminizin merkezinde yer alarak, sahadan gelen verileri bulut sistemlere güvenli şekilde aktarır. Tüm cihazlarla uyumlu çalışır.",
    features: [
      "Gerçek zamanlı veri aktarımı",
      "NB-IoT, LTE-M, LoRaWAN, Wi-Fi desteği",
      "Akıllı ağ yönetimi",
      "Veri kaybına karşı dayanıklı",
      "Uzaktan güncelleme imkânı",
    ],
    icon: "Router",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    id: "communication",
    title: "Haberleşme Modülü",
    description:
      "NB-IoT, LoRaWAN, LTE-M gibi protokolleri destekleyen haberleşme modülleri ile kesintisiz veri iletimi sağlar.",
    features: [
      "NB-IoT protokol desteği",
      "LoRaWAN entegrasyonu",
      "LTE-M bağlantısı",
      "Düşük güç tüketimi",
      "Geniş kapsama alanı",
    ],
    icon: "Radio",
    color: "from-orange-500 to-orange-700",
  },
  {
    id: "software",
    title: "Doğalgaz Tüketim Takibi Yazılımı",
    description:
      "Web ve mobil tabanlı platformlarımız sayesinde tüketimi analiz edin, geçmiş verileri izleyin, anomali ve kaçakları tespit edin.",
    features: [
      "Web ve mobil platform",
      "Gerçek zamanlı izleme",
      "Anomali ve kaçak tespiti",
      "Geçmiş veri analizi",
      "Yapay zekâ destekli raporlama",
    ],
    icon: "BarChart3",
    color: "from-purple-500 to-purple-700",
  },
]

export const aboutContent = {
  badge: "Hakkımızda",
  title: "Dijitalleşmenin Öncüsü",
  subtitle: "Doğalgaz Sektöründe",
  description:
    "Doğalgaz sektöründe dijitalleşmenin öncüsü olan Meven, IoT destekli sayaç sistemleri, gaz algılama sensörleri, uzaktan veri iletim çözümleri ve yapay zekâ yazılımlarıyla sektöre değer katmaktadır.",
  vision:
    "Meven Teknoloji olarak, doğalgaz sektöründe dijitalleşmeyi hızlandırmak ve enerji yönetiminde yeni bir standart oluşturmak için çalışıyoruz. Geliştirdiğimiz IoT tabanlı sayaç sistemleri, gaz algılama sensörleri, haberleşme modülleri ve yapay zekâ destekli yazılımlar sayesinde; doğalgaz tüketiminin uzaktan, anlık ve güvenilir şekilde izlenmesini mümkün kılıyoruz.",
  highlights: [
    { label: "Verimlilik", description: "Enerji verimliliğini artırıyoruz" },
    { label: "Güvenlik", description: "Altyapı güvenliğini güçlendiriyoruz" },
  ],
  stats: [
    { value: "10+", label: "Yıllık Deneyim" },
    { value: "99.9%", label: "Sistem Güvenilirliği" },
    { value: "24/7", label: "Teknik Destek" },
  ],
}

export const values: Value[] = [
  {
    id: "entrepreneurship",
    title: "Girişimci Ruh",
    description: "Yeni fikirleri cesaretle hayata geçiriyoruz. Sektöre yön veren teknolojileri geliştiriyoruz.",
    icon: "Rocket",
  },
  {
    id: "teamwork",
    title: "Takım Çalışması",
    description:
      "Farklı uzmanlıkları ortak hedefte buluşturuyoruz. Başarımızı güçlü ekip ruhuyla sürdürüyoruz.",
    icon: "Users",
  },
  {
    id: "sustainability",
    title: "Sürdürülebilirlik",
    description: "Enerji verimliliğini ve çevre duyarlılığını ön planda tutuyoruz.",
    icon: "Leaf",
  },
  {
    id: "performance",
    title: "Yüksek Performans",
    description: "Her projede kalite ve güvenilirliği önceliklendiriyoruz.",
    icon: "TrendingUp",
  },
  {
    id: "innovation",
    title: "Yenilik",
    description: "Ar-Ge'yi işimizin merkezine koyuyoruz. Ürünlerimizde sürekli fark yaratıyoruz.",
    icon: "Lightbulb",
  },
  {
    id: "ethics",
    title: "Örnek Davranış",
    description: "Dürüstlüğü ve toplumsal sorumluluğu benimsiyoruz. Etik değerlerle hareket ediyoruz.",
    icon: "Shield",
  },
]

export const stats: Stat[] = [
  {
    id: "experience",
    value: "10+",
    label: "Yıllık Deneyim",
    description: "Enerji sektöründe birikmiş uzmanlık",
    icon: "Award",
  },
  {
    id: "reliability",
    value: "99.9%",
    label: "Sistem Güvenilirliği",
    description: "Kesintisiz çalışan sensör ağları",
    icon: "CheckCircle",
  },
  {
    id: "support",
    value: "24/7",
    label: "Teknik Destek",
    description: "Sürekli izleme ve destek hizmeti",
    icon: "HeadphonesIcon",
  },
  {
    id: "focus",
    value: "100%",
    label: "Enerji Sektörü Odaklı",
    description: "Doğalgaz ve IoT teknolojileri uzmanlığı",
    icon: "Target",
  },
]

export const teamSections: TeamSection[] = [
  {
    id: "management",
    title: "Yönetim Ekibi",
    description:
      "Şirketin stratejik yönünü belirleyen ve operasyonel süreçleri yöneten deneyimli yönetim kadromuz, sektörde köklü bir deneyime sahiptir.",
    count: "Stratejik Liderlik",
    icon: "Briefcase",
  },
  {
    id: "engineering",
    title: "Mühendislik Ekibi",
    description:
      "Elektronik, yazılım ve yapay zekâ alanında uzman mühendislerimiz IoT teknolojileri, sistem tasarımı ve yazılım geliştirme konularında çalışmaktadır.",
    count: "2-10 Uzman",
    icon: "Code2",
  },
  {
    id: "production",
    title: "Üretim Ekibi",
    description:
      "Deneyimli teknikerlerimiz ürün kalitesini garanti altına alırken, projelerin uygulanmasını destekleyen saha ve teknik ekibimiz sahada görev yapmaktadır.",
    count: "Kalite Güvencesi",
    icon: "Settings",
  },
]

export const techStacks: TechStack[] = [
  {
    category: "Yazılım Geliştirme",
    items: ["React", "Node.js", "Python"],
  },
  {
    category: "IoT & Sensör Teknolojileri",
    items: ["LoRaWAN", "NB-IoT", "LTE-M"],
  },
  {
    category: "Üretim & Kalite",
    items: ["ISO 9001", "CE", "FCC"],
  },
]

export const approaches: Approach[] = [
  {
    step: "01",
    title: "Analiz & Planlama",
    description: "Müşteri ihtiyaçlarını detaylı analiz ederek en uygun çözümü tasarlıyoruz.",
  },
  {
    step: "02",
    title: "Tasarım & Geliştirme",
    description: "Modern teknolojilerle ölçeklenebilir ve güvenli sistemler geliştiriyoruz.",
  },
  {
    step: "03",
    title: "Test & Doğrulama",
    description: "Kapsamlı testlerle sistem güvenilirliğini ve performansını garanti ediyoruz.",
  },
  {
    step: "04",
    title: "Kurulum & Destek",
    description: "Profesyonel kurulum ve sürekli teknik destek hizmeti sağlıyoruz.",
  },
]

export const contactInfo: ContactInfo = {
  phone: "+90 262 526 40 83",
  email: "info@Meven.com.tr",
  address: "Sarımeşe Mah. Arpalık Sokak No: 9/1 Kartepe / KOCAELİ",
  workingHours: "Pazartesi - Cuma, 09:00 - 17:00",
}
