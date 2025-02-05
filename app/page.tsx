import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D1E]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(128,90,213,0.12),transparent_25%),radial-gradient(circle_at_30%_70%,rgba(64,192,187,0.12),transparent_25%)]" />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}