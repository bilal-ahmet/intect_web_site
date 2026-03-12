import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Meven Teknoloji | IoT Tabanlı Enerji Takibi",
  description:
    "Meven Teknoloji, doğalgaz sektöründe IoT tabanlı cihazlar, sensör sistemleri, gateway çözümleri ve yapay zekâ destekli yazılımlarla dijital dönüşümü destekliyor.",
  keywords:
    "Meven Teknoloji, IoT, doğalgaz sensörü, gaz takip, gateway, haberleşme modülü, enerji takibi, NB-IoT, LoRaWAN",
  openGraph: {
    title: "Meven Teknoloji | IoT Tabanlı Enerji Takibi",
    description:
      "Geleceğin enerji takibini bugünden tasarlıyoruz. IoT tabanlı doğalgaz izleme çözümleri.",
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
  );
}
