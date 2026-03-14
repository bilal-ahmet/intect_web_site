import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Meven Teknoloji | IoT Cihaz Geliştirme ve Üretim",
  description:
    "Meven Teknoloji, IoT cihaz geliştirme, gömülü yazılım, elektronik tasarım ve ürünleştirme süreçlerini uçtan uca yöneten mühendislik şirketidir.",
  keywords:
    "Meven Teknoloji, IoT cihaz, elektronik tasarım, gömülü yazılım, ürün geliştirme, prototipleme, haberleşme modülü",
  openGraph: {
    title: "Meven Teknoloji | IoT Cihaz Geliştirme ve Üretim",
    description:
      "IoT cihazlarını fikirden üretime geliştiren, donanım ve yazılımı tek çatı altında buluşturan mühendislik yaklaşımı.",
    locale: "tr_TR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
