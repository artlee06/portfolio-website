import { CaseStudyGrid } from "@/components/CaseStudyGrid"
import { ContactCTA } from "@/components/ContactCTA"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/hero"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-[#2e2e2e] font-sans relative">
      <Hero />
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <CaseStudyGrid />
          <ContactCTA />
        </div>
        <Footer />
      </div>
    </main>
  )
}

