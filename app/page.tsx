import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Footer } from "@/app/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Projects />
      <Footer />
    </main>
  )
}

