import Navbar from "@/components/sections/Navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Solutions from "@/components/sections/Solutions"
import WhyUs from "@/components/sections/WhyUs"
import Stats from "@/components/sections/Stats"
import Team from "@/components/sections/Team"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Solutions />
        <WhyUs />
        <Stats />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
