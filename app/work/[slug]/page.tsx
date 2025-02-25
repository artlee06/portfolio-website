import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout"
import { ContentSection } from "@/components/case-study/ContentSection"
import { HighlightCard } from "@/components/case-study/HighlightCard"
import { NextProject } from "@/components/case-study/NextProject"
import Image from "next/image"

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  // This is a placeholder. In a real implementation, you'd fetch the case study data based on the slug
  const caseStudy = {
    title: "Work Wellbeing Index",
    subtitle: "Helping job seekers find companies with great work culture",
    role: "Lead Product Designer",
    duration: "8 months (2022-2023)",
    responsibilities: [
      "Led end-to-end design process",
      "Conducted user research",
      "Created high-fidelity prototypes",
      "Collaborated with engineering team",
    ],
  }

  return (
    <CaseStudyLayout
      title={caseStudy.title}
      subtitle={caseStudy.subtitle}
      role={caseStudy.role}
      duration={caseStudy.duration}
      responsibilities={caseStudy.responsibilities}
    >
      <ContentSection id="problem" title="Problem">
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600">
            Indeed's mission is to help people get jobs. While salary and benefits are crucial factors in job decisions,
            workplace culture and wellbeing significantly impact job satisfaction and retention. However, this
            information was not readily available to job seekers on Indeed.
          </p>
        </div>
      </ContentSection>

      <ContentSection id="highlights" title="Highlights" className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <HighlightCard
            number="5.5M"
            label="Work Wellbeing ratings collected"
            description="From employees across various companies"
          />
          <HighlightCard number="16M" label="Visitors per month" description="Actively comparing company cultures" />
          <HighlightCard
            number="15+"
            label="Dimensions of work culture"
            description="Providing comprehensive insights"
          />
        </div>
      </ContentSection>

      <ContentSection id="research" title="Research & Discovery">
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600">
            Through extensive user research, including interviews with job seekers and HR professionals, we identified
            key dimensions of workplace wellbeing that matter most to employees. This informed our approach to
            collecting and presenting workplace culture data.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250218-184249-pxzgoTYYORz0G6jxrUjJyXsj54WNbn.png"
              alt="Work Wellbeing Index interface showing various metrics"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="User research synthesis and key findings"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </ContentSection>

      <ContentSection id="solution" title="Solution" className="bg-gray-50">
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600">
            We developed the Work Wellbeing Index, a comprehensive scoring system that helps job seekers evaluate
            company culture across multiple dimensions. The solution includes:
          </p>
          <ul className="text-gray-600">
            <li>Interactive company profiles with culture scores</li>
            <li>Detailed breakdowns of workplace dimensions</li>
            <li>Employee testimonials and experiences</li>
            <li>Comparative analysis tools</li>
          </ul>
        </div>
      </ContentSection>

      <ContentSection id="outcomes" title="Outcomes">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-xl font-medium mb-2">Increased Engagement</h3>
            <p className="text-gray-600">
              Job seekers spent 40% more time exploring company profiles with Work Wellbeing data
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-xl font-medium mb-2">Better Matches</h3>
            <p className="text-gray-600">
              25% increase in job applications to companies with high Work Wellbeing scores
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection id="retro" title="Retrospective">
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600">
            The Work Wellbeing Index project taught us valuable lessons about the importance of workplace culture in job
            seeking. Key learnings include:
          </p>
          <ul className="text-gray-600">
            <li>The significance of qualitative data in measuring workplace culture</li>
            <li>The challenge of maintaining data freshness and relevance</li>
            <li>The importance of balanced, representative feedback</li>
          </ul>
        </div>
      </ContentSection>

      <NextProject
        title="Project Two"
        description="An overview of the second project, highlighting its unique aspects."
        href="/work/project-two"
      />
    </CaseStudyLayout>
  )
}

