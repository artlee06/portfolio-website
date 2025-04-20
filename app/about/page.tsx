import Image from "next/image"
import { ContactButton } from "../components/ContactButton"
import { Footer } from "../components/Footer"
import { ContactCTA } from "@/components/ContactCTA"
import { AboutClientComponents } from "../components/AboutClientComponents"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <div className="max-w-7xl px-4 md:px-8 lg:px-16 mx-auto">
        {/* Top Section */}
        <div className="md:flex md:items-center md:justify-between md:space-x-8 lg:space-x-16 pt-8 md:pt-48">
          {/* Profile Image and Contact Button */}
          <div className="relative max-w-[343px] w-full mx-auto md:mx-0 md:w-1/2 lg:w-2/5">
            <div className="relative aspect-[343/400] w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20427x427-gyaw9gFIeh1W55tn38J8QpyXnzdcrA.jpeg"
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
        <div className="mt-16 md:mt-24">
          <div className="md:flex md:justify-between">
            <div className="md:w-1/3 space-y-2 mb-8 md:mb-0">
              <h2 className="text-xl md:text-2xl lg:text-3xl">What I&apos;ve been up to</h2>
              <p className="text-gray-600 text-base">Feel free to see my LinkedIn or CV for the nitty gritty.</p>
            </div>
            <div className="md:w-1/3">
              <div className="space-y-8">
                <ExperienceItem date="OCT 2023 - PRESENT" title="Product Designer" company="GovTech Singapore" />
                <ExperienceItem date="MAY 2023 - OCT 2023" title="Associate Product Designer" company="IBM iX" />
                <ExperienceItem date="JUN 2022 - MAR 2023" title="Associate Product Designer" company="Indeed.com" />
                <ExperienceItem date="JUN 2022 - MAR 2023" title="Product Designer Intern" company="Indeed.com" />
                <ExperienceItem date="JUN 2022 - MAR 2023" title="UX Research Intern" company="GovTech Singapore" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-24 md:mt-24">
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
