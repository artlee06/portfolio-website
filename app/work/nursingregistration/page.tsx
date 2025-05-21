import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout"
import { ContentSection } from "@/components/case-study/ContentSection"
import { HighlightCard } from "@/components/case-study/HighlightCard"
import { NextProject } from "@/components/case-study/NextProject"
import { BentoGrid, BentoGridItem } from "@/components/case-study/BentoGrid"
import { TabsSection } from "@/components/case-study/TabsSection"
import { Subheader } from "@/components/case-study/Typography"
import { MediaContainer } from "@/components/case-study/HelperComponents"
import { IterationSection } from "@/components/case-study/IterationSection"
import Image from "next/image"

export default function NursingRegistrationCaseStudyPage() {
  // Case study data
  const caseStudy = {
    title: "Nursing Registration",
    subtitle: "Designing user-friendly and efficient registration for foreign nurses in Singapore",
    role: "Sole Designer",
    duration: "1 quarter",
    responsibilities: [
      "Led form redesign process",
      "Conducted usability testing",
      "Created wireframes and high-fidelity mockups",
      "Collaborated with legacy system engineers",
    ],
  }

  return (
    <>
      <CaseStudyLayout
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        role={caseStudy.role}
        duration={caseStudy.duration}
        responsibilities={caseStudy.responsibilities}
      >
        <ContentSection id="problem" title="The Problem" className="bg-gray-50">
          <div className="prose prose-gray max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              Foreign nurses coming to work locally were required to fill up <strong>complicated paper forms</strong>, leading to confusion, errors, and inefficiencies in the registration process. We set out to simplify and digitize this experience.
            </p>
          </div>
        </ContentSection>

        <ContentSection id="highlights" title="Project Highlights">
        <BentoGrid className="mb-8">
            <BentoGridItem aspectRatio="16:9" imageUrl="/case-studies/prs/HighlightsImage.webp" colSpan={4} /> 
          </BentoGrid>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HighlightCard
              number="6/6"
              label="Feedback rating"
              description="from WOGGA (feedback widget for government products)"
            />
            <HighlightCard
              number="30%"
              label="Reduction"
              description="in time completion compared to a paper form"
            />
            <HighlightCard 
              number="1" 
              label="Usability test" 
              description="to iron out usability issues" 
            />
          </div>
        </ContentSection>

        <ContentSection id="research" title="Research" className="bg-gray-50">
          <div className="prose prose-gray max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              When I came into the project, the discovery research was already done and this problem has already been carved out to be done. After internal iterations and alignment, we conducted one major round of usability testing to validate our proposed registration form experience. Testing focused on:
            </p>
            <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2 mt-4">
              <li>
                Comprehension of the new digital form
              </li>
              <li>
                Ease of navigation through the registration process
              </li>
              <li>
                Clarity of instructions and required fields
              </li>
            </ul>
            <p className="text-lg text-gray-600 mt-6">
              Feedback confirmed that the new experience was significantly easier to understand compared to the previous paper process. The main feedback was that an edge case where they reset their password from an email was confusing.
            </p>
          </div>
          <MediaContainer className="mt-12">
            <div className="relative aspect-[16/9] w-full max-w-3xl mx-auto overflow-hidden">
              <Image
                src="/case-studies/prs/Evaluative Research.webp"
                alt="Email form redesign informed by usability test"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1200px"
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center max-w-3xl mx-auto">
              Email form redesign informed by usability test
            </p>
          </MediaContainer>
        </ContentSection>

        <ContentSection id="iterations" title="Key Iterations" className="text-center">
          <div className="space-y-16 md:space-y-32 mb-12 text-left">
            {/* Content Blocks Section */}
            <IterationSection
              title="Early Alignment with Content Blocks"
              videoSrc="/case-studies/nursingregistration/content-blocks.mp4"
            >
              <p className="text-lg text-gray-600 mb-4">
                Given the form's complexity and dependencies on legacy systems, we initially aligned internally using <strong>content blocks</strong> to organize and prioritize information. This helped the team agree on structure before investing in detailed designs.
              </p>
            </IterationSection>

            {/* High-Fidelity Section */}
            <IterationSection
              title="Transition to High-Fidelity Design"
              videoSrc="/case-studies/nursingregistration/high-fidelity.mp4"
              isReversed={true}
            >
              <p className="text-lg text-gray-600 mb-4">
                Once content was agreed upon:
              </p>
              <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2">
                <li>
                  Created <strong>high-fidelity mockups</strong> early to facilitate clearer discussions both within the design team and with cross-functional partners.
                </li>
                <li>
                  Iterated quickly based on feedback from engineering, product, and operations teams.
                </li>
              </ul>
            </IterationSection>

            {/* Legacy System Section */}
            <IterationSection
              title="Supporting an Old System"
              videoSrc="/case-studies/nursingregistration/legacy-system.mp4"
            >
              <p className="text-lg text-gray-600 mb-4">
                We had to design within the constraints of an <strong>older backend system</strong>, which limited some modern UX patterns. Careful negotiation and creative compromises were needed to preserve usability while meeting technical requirements.
              </p>
            </IterationSection>

            {/* Collaboration Section */}
            <IterationSection
              title="Collaboration and Handover"
              videoSrc="/case-studies/nursingregistration/collaboration.mp4"
              isReversed={true}
            >
              <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2">
                <li>
                  <strong>Clear documentation</strong> and <strong>responsive support</strong> during handover ensured a smooth transition into development.
                </li>
                <li>
                  Proactively answered questions and updated designs as development surfaced edge cases.
                </li>
              </ul>
            </IterationSection>
          </div>
        </ContentSection>

        <ContentSection id="solution" title="Final Solution" className="bg-gray-50">
          <div className="prose prose-gray max-w-3xl mx-auto mb-8">
            <p className="text-lg text-gray-600">
              The final digital registration form included:
            </p>
            <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2 mt-4">
              <li>Step-by-step progressive disclosure of information</li>
              <li>Save and resume functionality to accommodate long-form filling</li>
              <li>Clear guidance and examples for foreign nurses unfamiliar with local terminology</li>
            </ul>
            <p className="text-lg text-gray-600 mt-6">
              This resulted in a form that was significantly easier to complete, reducing friction in the nurse registration process.
            </p>
          </div>
          <BentoGrid variant="solution">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BentoGridItem
                imageUrl="/case-studies/nursingregistration/solution1.webp"
                alt="Step-by-step form with progressive disclosure"
                aspectRatio="16:9"
              />
              <BentoGridItem
                imageUrl="/case-studies/nursingregistration/solution2.webp"
                alt="Save and resume functionality interface"
                aspectRatio="16:9"
              />
            </div>

            <BentoGridItem
              videoUrl="/case-studies/nursingregistration/solution-demo.mp4"
              alt="Demonstration of the complete form filling process"
              aspectRatio="16:9"
            />

            <BentoGridItem
              imageUrl="/case-studies/nursingregistration/solution3.webp"
              alt="Clear guidance and examples for foreign terminology"
              aspectRatio="16:9"
            />
          </BentoGrid>
        </ContentSection>

        <ContentSection id="impact" title="Outcomes">
          <div className="prose prose-gray max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 italic">
              Metrics to be confirmed after checking with project leads.
            </p>
          </div>
        </ContentSection>

        <ContentSection id="retro" title="Retrospective &amp; Learnings" className="bg-gray-50">
          <div className="prose prose-gray max-w-3xl mx-auto">
            <div className="pb-8">
              <Subheader>1. Align on Interaction Flow Earlier</Subheader>
              <div className="space-y-4 text-gray-600">
                <p className="text-base">
                  There was late-stage debate around "save behavior" (hub-and-spoke vs. step-by-step navigation). Starting discussions about core interaction behavior earlier would have saved time and rework.
                </p>
              </div>
            </div>

            <div className="py-8">
              <Subheader>2. Prototype Instead of Sticky Notes</Subheader>
              <div className="space-y-4 text-gray-600">
                <p className="text-base">
                  Using <strong>wireframes earlier</strong> instead of organizing content blocks as sticky notes could have made it easier for stakeholders to visualize flow and spot issues sooner.
                </p>
              </div>
            </div>

            <div className="py-8">
              <Subheader>3. Organize Research Materials More Proactively</Subheader>
              <div className="space-y-4 text-gray-600">
                <p className="text-base">
                  During usability testing, I was asked to show the old paper form but struggled to locate it quickly. Keeping important context materials easily accessible during research sessions would have made the process smoother.
                </p>
              </div>
            </div>

            <div className="py-8">
              <Subheader>Final thoughts</Subheader>
              <div className="space-y-4 text-gray-600">
                <p className="text-base">
                  This project reinforced the importance of <strong>early alignment, clarity in communication, and designing flexibly within technical constraints</strong> to create a user-centered solution even in complex legacy environments.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        <NextProject title="ResumeBoost" description="Helping Jobseekers Improve Their Resumes with AI" href="/work/resumeboost" />
      </CaseStudyLayout>
    </>
  )
}
