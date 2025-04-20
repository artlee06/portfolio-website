import { ContactCTA } from "@/components/ContactCTA"
import { Footer } from "@/components/Footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#2e2e2e] font-sans">
      <div className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <ContactCTA />
      </div>
      <Footer />
    </main>
  )
}
