"use client"

import { useState } from "react"
import { CaseStudyCard } from "@/components/CaseStudyCard"
import { Heading2 } from "@/components/case-study/Typography"
import { Footer } from "@/components/Footer"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// Sample case study data - in a real implementation, this would come from a data source
const caseStudies = [
  {
    id: "project-1",
    title: "Insight",
    description: "HDB BTO Unit Selection empowered by XR",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Thumbnail-kb41xkIr89cyWG9KSwcr4WxuN8GFfn.jpeg",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero_square-RpWuD5v9oRCWYpy8U8gaQ79peuUuDQ.mp4",
    slug: "insight",
  },
  {
    id: "project-2",
    title: "Project Two",
    description: "A brief description of the project",
    comingSoon: true,
    slug: "coming-soon",
  },
  {
    id: "project-3",
    title: "Project Three",
    description: "A brief description of the project",
    comingSoon: true,
    slug: "coming-soon",
  },
  {
    id: "project-4",
    title: "ResumeBoost",
    description: "Helping Jobseekers Improve Their Resumes with AI",
    imageUrl: "/images/Thumbnail.jpg",
    videoUrl: "/images/rb-case-study_thumbnail_hover.mp4",
    slug: "resumeboost",
  },
]

// Sample experiment data - these would be placeholders for social media updates
const experiments = [
  { id: 1, title: "Coming soon" },
  { id: 2, title: "Coming soon" },
  { id: 3, title: "Coming soon" },
  { id: 4, title: "Coming soon" },
  { id: 5, title: "Coming soon" },
]

export default function WorkPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-white text-[#2e2e2e] font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-32 pb-16">
        {/* Case Studies Section */}
        <section className="mb-24">
          <Heading2 className="mb-12 text-center">Case Studies</Heading2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                caseStudy={study}
                isSquare={true}
                isHovered={study.id === hoveredId}
                isAnyHovered={hoveredId !== null}
                onHover={() => setHoveredId(study.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
          </div>
        </section>

        {/* Experiments Section */}
        <section className="mb-24">
          <Heading2 className="mb-12 text-center">Experiments</Heading2>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="pl-4">
              {experiments.map((experiment) => (
                <CarouselItem key={experiment.id} className="md:basis-1/2 lg:basis-1/3">
                  <ExperimentCard title={experiment.title} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </div>
      <Footer />
    </main>
  )
}

// Experiment Card Component
function ExperimentCard({ title }: { title: string }) {
  return (
    <div className="border border-gray-200 aspect-square flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors p-6">
      <p className="text-xl font-medium text-center">{title}</p>
    </div>
  )
}
