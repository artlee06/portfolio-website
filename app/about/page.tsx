import Image from "next/image"
import { ContactButton } from "../components/ContactButton"
import { Footer } from "@/components/Footer"
import { ContactCTA } from "@/components/ContactCTA"
import { AboutClientComponents } from "../components/AboutClientComponents"
import { GridBackground } from "@/components/GridBackground"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <GridBackground opacity={0.2} />
      
      <div className="max-w-7xl px-4 md:px-8 lg:px-16 mx-auto">
        {/* Top Section */}
        <div className="md:flex md:items-center md:justify-between md:space-x-8 lg:space-x-16 pt-8 md:pt-48">
          {/* Profile Image and Contact Button */}
          <div className="relative max-w-[343px] w-full mx-auto md:mx-0 md:w-1/2 lg:w-2/5">
            <div className="relative aspect-[343/400] w-full">
              <Image
                src="/profile.jpeg"
                alt="Profile picture"
                fill
                style={{
                  objectFit: "cover",
                  borderBottomLeftRadius: "9999px",
                  borderBottomRightRadius: "9999px",
                }}
                priority
              />
              <ContactButton />
            </div>
          </div>

          {/* Introduction and Rotating Cards */}
          <div className="mt-8 md:mt-0 md:w-1/2 lg:w-3/5">
            <div className="space-y-8 md:space-y-10 mb-8">
              <div className="space-y-2 md:space-y-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">Hi! I&apos;m Arthur Lee!</h1>
                <p className="text-3xl md:text-4xl lg:text-5xl font-medium">I&apos;m a product designer who codes</p>
              </div>
              <p className="text-base font-regular">
                I&apos;m currently at GovTech Singapore working on ResumeBoost, an AI resume enhancer and its related
                products. I also love tinkering and creating for extended reality (XR).
              </p>
              <a
                href="https://docs.google.com/document/d/10qsJp2QH7h2edsFe8jsu-SeaxIzKjpkWsQvCqNMaDSM/edit?usp=sharing"
                className="inline-block px-4 py-2 rounded-full bg-[#2e2e2e] text-white hover:bg-[#2e2e2e]/50 transition-colors"
              >
                View my CV
              </a>
            </div>
          </div>
        </div>

        {/* Client Components Section */}
        <AboutClientComponents />

        {/* Experience Section */}
      <section className="w-full px-4 md:px-8 lg:px-12 mb-20 md:mb-48">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium md:text-center mb-4">What I&apos;ve been up to</h2>
        <p className="text-gray-600 text-base md:text-center mb-12">
          Feel free to check out my <a href="https://www.linkedin.com/in/arthur-lee-ying-kiu/" className="underline hover:text-gray-900 transition-colors">LinkedIn</a> or <a href="https://docs.google.com/document/d/10qsJp2QH7h2edsFe8jsu-SeaxIzKjpkWsQvCqNMaDSM/edit?usp=sharing" className="underline hover:text-gray-900 transition-colors">CV</a> for the nitty gritty details.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 max-w-3xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            <ExperienceItem date="OCT 2023 - PRESENT" title="Product Designer" company="GovTech Singapore" />
            <ExperienceItem date="MAY 2023 - OCT 2023" title="Associate Product Designer" company="IBM iX" />
            <ExperienceItem date="JUN 2022 - MAR 2023" title="Associate Product Designer" company="Indeed" />
          </div>
          <div className="space-y-8 md:space-y-12">
            <ExperienceItem date="MAY 2021 - JUL 2021" title="Associate UX Designer Intern" company="Indeed" />
            <ExperienceItem date="DEC 2020 - FEB 2021" title="UX Research Intern" company="Govtech" />
            <ExperienceItem date="MAY 2020 - OCT 2020" title="Software Engineer Intern" company="StaffAny" />
          </div>
        </div>
      </section>

        {/* Contact CTA */}
        <div className="mt-24 md:mt-24 md:mb-48">
          <ContactCTA />
        </div>
      </div>


      {/* Footer */}
      <Footer />
    </main>
  )
}

function ExperienceItem({
  date,
  title,
  company,
}: {
  date: string
  title: string
  company: string
}) {
  return (
    <div className="space-y-1 border-b border-gray-200 pb-6 md:pb-0 md:border-b-0">
      <p className="text-xs text-gray-500">{date}</p>
      <p className="text-xl">{title}</p>
      <p className="text-base">{company}</p>
    </div>
  )
}
