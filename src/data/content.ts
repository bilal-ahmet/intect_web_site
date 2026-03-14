import type {
  Solution,
  Value,
  TeamSection,
  Stat,
  ContactInfo,
  TechStack,
  Approach,
  ProcessStep,
} from "@/types"

export const siteConfig = {
  name: "Meven Teknoloji",
  tagline: "IoT Cihazlarını Fikirden Üretime Geliştiriyoruz",
  description:
    "Meven Teknoloji olarak, farklı sektörlere yönelik IoT cihazları, gömülü yazılım, haberleşme altyapıları ve bulut entegrasyonları geliştiriyor; fikirden sahaya kadar uçtan uca ürünleştirme süreçleri yürütüyoruz.",
  logoUrl: "/images/logo.png",
  heroImage1:
    "https://www.vaventeknoloji.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.ab1c34c0.webp&w=1200&q=75",
  heroImage2:
    "https://www.vaventeknoloji.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.5a2e663a.webp&w=750&q=75",
}

export const navLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Çözümlerimiz", href: "#solutions" },
  { label: "Neden Meven", href: "#why-us" },
  { label: "Ekibimiz", href: "#team" },
  // { label: "İletişim", href: "#contact" },
]

export const heroStats = [
  { value: "5+", label: "Yıllık Deneyim" },
  { value: "99.9%", label: "Sistem Güvenilirliği" },
  { value: "24/7", label: "Teknik Destek" },
]

export const solutions: Solution[] = [
  {
    id: "device-design",
    title: "Elektronik Donanım Tasarımı",
    description:
      "Saha koşullarına ve kullanım senaryolarına uygun IoT cihazlarını kart seviyesinden başlayarak tasarlıyor, ürün gereksinimlerini üretilebilir mimariye dönüştürüyoruz.",
    features: [
      "Kart ve bileşen seçimi",
      "Sensör ve çevre birimi entegrasyonu",
      "Düşük güç tüketimi kurgusu",
      "Saha dayanımı odaklı tasarım",
      "Üretime uygun mühendislik çıktıları",
    ],
    icon: "Gauge",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: "embedded-software",
    title: "Gömülü Yazılım Geliştirme",
    description:
      "Cihazların güvenilir, güncellenebilir ve uzun ömürlü çalışması için gömülü yazılım katmanını donanımla tam uyumlu biçimde geliştiriyoruz.",
    features: [
      "Firmware mimarisi ve sürümleme",
      "Gerçek zamanlı kontrol senaryoları",
      "Uzaktan güncelleme altyapısı",
      "Hata toleranslı çalışma kurgusu",
      "Donanım-yazılım birlikte doğrulama",
    ],
    icon: "BarChart3",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    id: "connectivity",
    title: "Bağlantı ve Haberleşme",
    description:
      "Cihazların veri aktarımını güvenli ve kesintisiz sürdürebilmesi için kullanım senaryosuna uygun haberleşme altyapıları kurguluyoruz.",
    features: [
      "Wi-Fi, BLE ve hücresel iletişim",
      "Yerel ağ ve bulut entegrasyonu",
      "Veri güvenliği ve paketleme",
      "Uzaktan izleme için servis katmanı",
      "İhtiyaca göre protokol seçimi",
    ],
    icon: "Router",
    color: "from-orange-500 to-orange-700",
  },
  {
    id: "prototype-production",
    title: "Prototipten Seri Üretime",
    description:
      "Prototip doğrulamasından fonksiyonel testlere ve üretim hazırlığına kadar ürünleşme sürecini aynı mühendislik çizgisinde ilerletiyoruz.",
    features: [
      "Hızlı prototipleme",
      "Fonksiyonel test planları",
      "Pilot üretim desteği",
      "Mekanik uyumluluk kontrolleri",
      "Seri üretim devreye alma",
    ],
    icon: "Radio",
    color: "from-purple-500 to-purple-700",
  },
]

export const aboutContent = {
  badge: "Hakkımızda",
  title: "Geliştirme Ortağınız",
  subtitle: "Elektronik Ürün ve IoT Sistemlerinde",
  description:
    "Meven, elektronik ürün geliştirme ve IoT sistemleri alanında donanım, gömülü yazılım ve bağlantı katmanlarını aynı çatı altında birleştirerek uçtan uca mühendislik hizmeti sunar.",
  vision:
    "Meven Teknoloji olarak hedefimiz, fikir aşamasındaki ihtiyaçları sahada çalışan, ölçeklenebilir ve üretilebilir IoT ürünlerine dönüştürmektir. Elektronik tasarım, gömülü yazılım, haberleşme ve doğrulama süreçlerini tek bir ekip yaklaşımıyla yöneterek müşterilerimize daha kısa geliştirme süresi ve daha öngörülebilir ürün kalitesi sağlıyoruz.",
  highlights: [
    { label: "Ürünleşme", description: "Fikri üretilebilir cihaza dönüştürüyoruz" },
    { label: "Güvenilirlik", description: "Sahada kararlı çalışan sistemler kuruyoruz" },
  ],
  stats: [
    { value: "5+", label: "Yıllık Deneyim" },
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
    value: "5+",
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
    label: "IoT Ürün Geliştirme",
    description: "Donanım ve yazılımı birlikte yöneten mühendislik yaklaşımı",
    icon: "Target",
  },
]

export const processFlowIntro = {
  badge: "Geliştirme Sürecimiz",
  title: "Elektronik Ürün & Yazılım Geliştirme",
  description:
    "Proje geliştirme sürecimiz, her aşamada yüksek kaliteli ve verimli çözümler sunmak için titizlikle yönetilmektedir. İlk teklifin hazırlanmasından donanım ve yazılım geliştirme aşamalarına, prototip oluşturulmasından fonksiyonel testlerin yapılmasına kadar her adım mühendislik ekibimiz tarafından dikkatle planlanır ve uygulanır. Üretim ve mekanik montaj aşamaları tamamlandıktan sonra ürünümüz güvenli bir şekilde kargoya verilerek müşteriye ulaştırılır.",
}

export const processSteps: ProcessStep[] = [
  {
    id: "quote",
    title: "Teklif",
    description: "İhtiyaç analizi, kapsam ve teknik yol haritası hazırlanır.",
    position: "top",
  },
  {
    id: "hardware",
    title: "Donanım Geliştirme",
    description: "Elektronik kart mimarisi ve bileşen seçimleri netleştirilir.",
    position: "bottom",
  },
  {
    id: "software",
    title: "Yazılım Geliştirme",
    description: "Gömülü yazılım ve sistem davranışları geliştirilir.",
    position: "top",
  },
  {
    id: "prototype",
    title: "Prototip",
    description: "İlk çalışan numuneler üretilir ve doğrulanır.",
    position: "bottom",
  },
  {
    id: "functional-tests",
    title: "Fonksiyonel Testler",
    description: "Ürünün tüm senaryolarda güvenilirliği ölçülür.",
    position: "top",
  },
  {
    id: "production",
    title: "Üretim",
    description: "Onaylı tasarım üretim hattına alınır ve kalite kontrol yapılır.",
    position: "bottom",
  },
  {
    id: "mechanical-assembly",
    title: "Mekanik Montaj",
    description: "Ürün kasalama ve son montaj işlemleri tamamlanır.",
    position: "top",
  },
  {
    id: "shipping",
    title: "Kargolama",
    description: "Final kontrol sonrası ürünler güvenli biçimde sevk edilir.",
    position: "bottom",
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
    category: "Gömülü Yazılım",
    items: ["C/C++", "RTOS", "Linux"],
  },
  {
    category: "Bağlantı Teknolojileri",
    items: ["Wi-Fi", "Bluetooth LE", "LTE Cat-M1"],
  },
  {
    category: "Üretim & Doğrulama",
    items: ["Prototipleme", "Fonksiyonel Test", "Kalite Kontrol"],
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
  phone: "+90 535 972 96 15",
  email: "info@meven.com.tr",
  address: "Muallimköy Mah. Deniz Cad. No: 143/8 1.1.C1 Blok Zemin Kat, Bilişim Vadisi Gebze/Kocaeli",
  workingHours: "Pazartesi - Cuma, 08:00 - 17:00",
}
