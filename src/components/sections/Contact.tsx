﻿"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { contactInfo } from "@/data/content"

type FormState = {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
}

const Contact = () => {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  const contactItems = [
    {
      icon: Phone,
      title: "Telefon",
      value: contactInfo.phone,
      sub: "Pazartesi - Cuma, 09:00 - 17:00",
      href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      title: "E-posta",
      value: contactInfo.email,
      sub: "24 saat içinde yanıtlıyoruz",
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: MapPin,
      title: "Adres",
      value: contactInfo.address,
      sub: "Önceden randevu alınız",
      href: "https://maps.google.com/?q=Kartepe+Kocaeli",
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      value: "Pazartesi - Cuma",
      sub: "09:00 - 17:00",
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            İletişim
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Bizimle{" "}
            <span className="gradient-text">İletişime Geçin</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            Projeleriniz, sorularınız veya işbirliği teklifleriniz için bizimle
            iletişime geçmekten çekinmeyin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl hover:bg-sky-50 hover:border-sky-100 border border-transparent transition-all duration-200 group card-hover cursor-pointer">
                  <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow shadow-sky-500/20">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 mb-1">{item.title}</div>
                    <div className="text-slate-700 text-sm font-medium">{item.value}</div>
                    <div className="text-slate-400 text-xs mt-1">{item.sub}</div>
                  </div>
                </div>
              )

              return item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={item.title}
                  tabIndex={0}
                >
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              )
            })}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-40 bg-slate-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1009.0105268692839!2d30.053040819750603!3d40.726487073826895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb388570e2713d%3A0xbad9c98db8825168!2sVaven%20Kalibrasyon%20San.%20ve%20Tic.%20Ltd.%20%C5%9Eti.!5e0!3m2!1str!2str!4v1773330359679!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Meven Teknoloji Konum"
              />
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3 bg-slate-50 rounded-2xl p-8 border border-slate-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle size={32} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Mesajınız İletildi!</h3>
                <p className="text-slate-500 max-w-xs">
                  En kısa sürede size dönüş yapacağız. Teşekkür ederiz.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm) }}
                  className="px-5 py-2.5 bg-sky-500 text-white rounded-xl font-semibold hover:bg-sky-400 transition-colors mt-2"
                  aria-label="Yeni mesaj"
                >
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Mesaj Gönderin</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="name">
                        Ad Soyad *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Adınız Soyadınız"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="phone">
                        Telefon
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+90 5XX XXX XX XX"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">
                      E-Posta *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ornek@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="subject">
                      Konu *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm transition-all"
                    >
                      <option value="">Konu Seçiniz</option>
                      <option value="gaz-sensor">Gaz Takip Sensörü</option>
                      <option value="gateway">Gateway Cihazı</option>
                      <option value="haberlesme">Haberleşme Modülü</option>
                      <option value="yazilim">Takip Yazılımı</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="message">
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Projeniz veya sorunuz hakkında bilgi verin..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    aria-label="Mesaj Gönder"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-sky-500 hover:bg-sky-400 disabled:bg-sky-300 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Mesaj Gönder
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400 mt-2">
                    Bilgileriniz güvende, asla paylaşılmaz.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact