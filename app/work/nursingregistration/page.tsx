'use client';

import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout"
import { ContentSection } from "@/components/case-study/ContentSection"
import { HighlightCard } from "@/components/case-study/HighlightCard"
import { NextProject } from "@/components/case-study/NextProject"
import { BentoGrid, BentoGridItem } from "@/components/case-study/BentoGrid"
import { Subheader } from "@/components/case-study/Typography"
import { MediaContainer } from "@/components/case-study/HelperComponents"
import { IterationSection } from "@/components/case-study/IterationSection"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"



export default function NursingRegistrationCaseStudyPage() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "artlee06") {
      setIsUnlocked(true)
      setError("")
    } else {
      setError("Incorrect password")
    }
  }

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
              number={"15 min"}
              label="Median time"
              description="to complete the form compared to hours on equivalent paper form"
            />
            <HighlightCard 
              number="1" 
              label="Usability test" 
              description="to iron out usability issues" 
            />
          </div>
        </ContentSection>

        {!isUnlocked ? (
          <ContentSection id="password" title="Protected Content" className="bg-gray-50">
            <div className="prose prose-gray max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-4">
                This section contains sensitive information about the project. Please enter the password to continue.
              </p>
              <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4 max-w-md">
                <div className="flex gap-4">
                  <div className="relative w-full">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors whitespace-nowrap"
                  >
                    Unlock Content
                  </button>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </form>
            </div>
          </ContentSection>
        ) : (
          <>
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
                  imageSrc="/case-studies/prs/ContentBlockHighFi.webp"
                >
                  <p className="text-lg text-gray-600 mb-4">
                  To manage the form's complexity and legacy system constraints, we first used content blocks to agree on structure and flow. This set the stage for moving quickly into high-fidelity mockups, which enabled focused discussions and fast iterations with stakeholders, balancing usability with technical limitations due to dealing with a legacy system.
                  </p>
                </IterationSection>

                {/* Step by step vs hub and spoke Section */}
                <IterationSection
                  title="Step-by-Step vs. Hub-and-Spoke Navigation"              
                  imageSrc="/case-studies/prs/StepByStep.webp"
                  isReversed={true}
                >
                  <p className="text-lg text-gray-600 mb-4">
                  We debated between a sequential step-by-step flow and a flexible hub-and-spoke pattern. After researching both, we chose the step-by-step approach—it was simpler to understand and ensured users completed sections in the correct order, which was necessary due to form dependencies.
                  </p>
                </IterationSection>

                {/* Progressive disclosure Section */}
                <IterationSection
                  title="Progressive Disclosure"
                  imageSrc="/case-studies/prs/Progressive_disclosure.webp"            
                  >
                  <p className="text-lg text-gray-600 mb-4">
                  Several sections of the form required users to input repeated information, such as qualifications or gap periods. We used progressive disclosure to hide these fields until they were needed, implementing this behavior with bottom sheets. 
                  </p>
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
              <BentoGrid variant="mobileDesign">
                {/* 1. Top left (square) */}
                <BentoGridItem
                  imageUrl="/case-studies/prs/Bento_Confirm.webp"
                  alt="Confirmation page screenshot"
                  aspectRatio="square"
                  className="row-start-1 col-start-1"
                />
                {/* 2. Below top left (square) */}
                <BentoGridItem
                  imageUrl="/case-studies/prs/Bento_submission.webp"
                  alt="Submission success screenshot"
                  aspectRatio="square"
                  className="row-start-2 col-start-1"
                />
                {/* 3. Right side, spanning two rows */}
                <BentoGridItem
                  videoUrl="/case-studies/prs/Bento_video_tall.mp4"
                  alt="Snippet of form filling process"
                  aspectRatio="fit"
                  className="row-start-3 col-start-1 md:row-span-2 md:col-start-2"
                />
                {/* 4. Bottom, spanning both columns */}
                <BentoGridItem
                  imageUrl="/case-studies/prs/Bento_Bottom.webp"
                  alt="Hero image"
                  aspectRatio="16:9"
                  className="row-start-4 md:row-start-3 col-span-2"
                />
              </BentoGrid>
            </ContentSection>

            <ContentSection id="impact" title="Outcomes">
              <div className="prose prose-gray max-w-3xl mx-auto">
                <p className="text-lg text-gray-600">
                  During the initial launch to 150 foreign nurses, it resulted in a much better experience as compared to paper forms:
                </p>
                <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2 mt-4">
                  <li>6/6 feedback rating from 10 WOGGA ratings (government rating system)</li>
                  <li>15 min median time to complete the application</li>
                  <li>88 foreign nurses completed the form smoothly</li>
                </ul>
                <p className="text-lg text-gray-600 mt-4">
                  These are just the metrics from the initial launch, by now it would have much larger impact across the board.
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
          </>
        )}

        <NextProject title="ResumeBoost" description="Helping Jobseekers Improve Their Resumes with AI" href="/work/resumeboost" />
      </CaseStudyLayout>
    </>
  )
}
