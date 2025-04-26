import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout"
import { ContentSection } from "@/components/case-study/ContentSection"
import { HighlightCard } from "@/components/case-study/HighlightCard"
import { NextProject } from "@/components/case-study/NextProject"
import { BentoGrid, BentoGridItem } from "@/components/case-study/BentoGrid"
import { TabsSection } from "@/components/case-study/TabsSection"
import { ResumeBoostHero } from "@/components/case-study/ResumeBoostHero"
import { Subheader } from "@/components/case-study/Typography"
import { MediaContainer } from "@/components/case-study/HelperComponents"
import { IterationSection } from "@/components/case-study/IterationSection"
import Image from "next/image"

export default function ResumeBoostCaseStudyPage() {
  // Case study data
  const caseStudy = {
    title: "ResumeBoost",
    subtitle: "Helping Jobseekers Improve Their Resumes with AI",
    role: "Sole Designer",
    duration: "0 to 1 in three quarters, plus one additional quarter to launch in MyCareersFuture (MCF)",
    responsibilities: [
      "Led end-to-end design process",
      "Conducted user research",
      "Created wireframes and prototypes",
      "Collaborated with engineering team",
    ],
  }

  return (
    <>
      <ResumeBoostHero />
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
              Many jobseekers struggle to secure interviews, with this often being the primary bottleneck in their job
              search. This challenge is especially pronounced for <strong>career switchers</strong>, who may lack direct
              work experience in their target field and often struggle to present their skills effectively.
            </p>
          </div>
        </ContentSection>

        <ContentSection id="highlights" title="Project Highlights">
          <BentoGrid className="mb-8">
            <BentoGridItem colSpan={4} videoUrl="https://vimeo.com/1077014197?share=copy#t=0" />
          </BentoGrid>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <HighlightCard
              number="800+"
              label="Resumes Analyzed"
              description="Strong early traction with minimal marketing in first 2-3 months"
            />
            <HighlightCard
              number="200+"
              label="Daily Analyses"
              description="Resumes processed daily after integration with MyCareersFuture"
            />
            <HighlightCard
              number="3,500+"
              label="Total Resumes"
              description="Total resumes analyzed since launch, with continuous growth"
            />
          </div>
        </ContentSection>

        <ContentSection id="research" title="Discovery & Research" className="bg-gray-50">
          <TabsSection
            tabs={[
              {
                id: "discovery",
                label: "Discovery Research",
                content: (
                  <div>
                    <div className="prose prose-gray max-w-3xl mx-auto">
                      <p className="text-lg text-gray-600">
                        To deeply understand the problem, we conducted generative discovery research with two key user
                        groups:
                      </p>
                      <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2 mt-4">
                        <li>
                          <strong>Career switchers</strong> to uncover their pain points in resume writing and job
                          applications.
                        </li>
                        <li>
                          <strong>Hiring managers</strong> to identify what makes a resume stand out and what evidence
                          is needed to support candidate claims.
                        </li>
                      </ul>
                      <p className="text-lg text-gray-600 mt-6">
                        This initial research helped us identify the core challenges and opportunities for an AI-powered
                        resume enhancement tool.
                      </p>
                    </div>
                    <MediaContainer className="mt-12">
                      <div className="relative aspect-[16/9] w-full max-w-3xl mx-auto overflow-hidden">
                        <Image
                          src="/case-studies/resumeboost/Discovery.webp"
                          alt="Discovery research showing interviews with 9 hiring managers and 4 successful career switchers"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1200px"
                          className="object-contain"
                        />
                      </div>
                      <p className="text-sm text-gray-600 mt-2 text-center max-w-3xl mx-auto">
                        Our discovery research approach focused on both hiring managers and successful career switchers
                      </p>
                    </MediaContainer>
                  </div>
                ),
              },
              {
                id: "evaluative",
                label: "Evaluative Research",
                content: (
                  <div>
                    <div className="prose prose-gray max-w-3xl mx-auto">
                      <p className="text-lg text-gray-600">
                        After coming up with our initial concept, our evaluative research process included two major
                        rounds of user tests:
                      </p>
                      <ol className="text-lg text-gray-600 list-decimal pl-6 space-y-4 mt-4">
                        <li>
                          <strong>Proof of Concept (PoC) Testing</strong> – Initial validation of the AI-generated
                          resume enhancements.
                        </li>
                        <li>
                          <strong>Proof of Value (PoV) Testing</strong> – Assessing the effectiveness of the solution in
                          improving jobseeker outcomes.
                        </li>
                      </ol>
                      <p className="text-lg text-gray-600 mt-6">
                        Between these rounds, we conducted <strong>incremental usability tests</strong> with both
                        internal and external participants to refine the user experience.
                      </p>
                      <p className="text-lg text-gray-600 mt-4">
                        Once PoV testing was complete, we finalized key improvements and launched the standalone
                        product.
                      </p>
                    </div>
                    <div className="mt-16 w-full max-w-3xl mx-auto">
                      <div className="bg-gray-100 p-8 md:p-10">
                        <h3 className="text-xl md:text-2xl font-light font-lexend mb-8">
                          {`The "tell us about you" part is good. Changed things up a little and made my personal statement more appealing. Organised resume settings, from personal details to projects to experience. Clean interface.`}
                        </h3>
                        <div className="flex items-center gap-4">
                          <div className="bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-gray-600"
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                          </div>
                          <div>
                            <p className="font-medium">Participant</p>
                            <p className="text-gray-600 text-sm">Jobseeker giving feedback on our product</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
            defaultValue="discovery"
          />
        </ContentSection>

        <ContentSection id="iterations" title="Key Iterations" className="text-center">
          <div className="space-y-16 md:space-y-48 mb-12 text-left">
            {/* Simplified User Flow Section */}
            <IterationSection
              title="Simplified User Flow"
              videoSrc="/case-studies/resumeboost/UserFlow_Key_Iteration.mp4"
            >
              <p className="text-lg text-gray-600 mb-4">
                Originally, the process involved multiple steps, making it cumbersome for users. Based on feedback, we
                streamlined it into a simple <strong>two-step flow</strong>:
              </p>
              <ol className="text-lg text-gray-600 list-decimal pl-6 space-y-2 mb-4">
                <li>
                  <strong>Upload resume</strong>
                </li>
                <li>
                  <strong>Receive AI-powered analysis</strong>
                </li>
              </ol>
              <p className="text-lg text-gray-600">
                This reduced drop-off rates and improved the overall user experience.
              </p>
            </IterationSection>

            {/* Refining the Rewrite Flow Section */}
            <IterationSection
              title="Refining the Rewrite Flow"
              videoSrc="/case-studies/resumeboost/Rewrites Key Iteration.mp4"
              isReversed={true}
            >
              <p className="text-lg text-gray-600 mb-4">
                Helping users rewrite their resumes effectively was a key challenge. Our iterations included:
              </p>
              <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2">
                <li>
                  <strong>Initial Proof of Concept</strong>: A basic version that required users to click a button to
                  get multiple options of AI-powered rewrites. However, doing this for each bullet point was too
                  troublesome.
                </li>
                <li>
                  <strong>Google Docs-style suggestions</strong>: Allowed users to receive rewrites as a series of
                  google docs style suggestions they can accept and reject.
                </li>
                <li>
                  <strong>Highlighting Changes</strong>: Many users struggled to identify what had changed in the
                  rewritten version. To address this, we introduced a feature that clearly highlighted AI-generated
                  modifications.
                </li>
              </ul>
            </IterationSection>

            {/* Scaling to MyCareersFuture Section */}
            <IterationSection
              title="Scaling to MyCareersFuture (MCF)"
              videoSrc="/case-studies/resumeboost/MCF Integration Key Iteration.mp4"
            >
              <p className="text-lg text-gray-600 mb-4">
                After validating our approach in the standalone product, we worked with MCF to integrate these learnings
                into their platform.
              </p>
              <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2">
                <li>
                  <strong>Usability Testing for MVP</strong>: Before launch, we conducted additional tests to confirm
                  the approach and expose any usability gaps.
                </li>
                <li>
                  <strong>Experimental Ground vs. Scalable Solution</strong>: The standalone product became a{" "}
                  <strong>testing ground for new features</strong>, while MCF served as the{" "}
                  <strong>scaled implementation</strong> for a wider audience.
                </li>
              </ul>
            </IterationSection>
          </div>
        </ContentSection>

        <ContentSection id="solution" title="Final Solution" className="bg-gray-50">
          <div className="prose prose-gray max-w-3xl mx-auto mb-8">
            <p className="text-lg text-gray-600">
              The final solution we shipped in August 2024 included the following key features:
            </p>
            <ol className="text-lg text-gray-600 list-decimal pl-6 space-y-2 mt-4">
              <li>Get an overview of how the resume is doing</li>
              <li>Receive bullet point level AI rewrites</li>
              <li>Export in an ATS friendly resume format in PDF</li>
            </ol>
            <p className="text-lg text-gray-600 mt-6">
              Subsequently, we shipped features to build on top of this including:
            </p>
            <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2 mt-4">
              <li>An entirely separate flow to tailor your resume for a job description</li>
              <li>Multiple export formats</li>
              <li>
                More powerful rewrites to help users restructure their work description or even inspire them to write
                new things
              </li>
            </ul>
          </div>
          <BentoGrid variant="solution">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BentoGridItem
                imageUrl="/case-studies/resumeboost/Bento_placeholder.webp"
                alt="Resume overview showing a professional resume with education and experience sections"
                aspectRatio="16:9"
              />
              <BentoGridItem
                imageUrl="/case-studies/resumeboost/Bento_export_formats.webp"
                alt="Export formats interface showing different resume template options"
                aspectRatio="16:9"
              />
            </div>

            <BentoGridItem
              videoUrl="/case-studies/resumeboost/Bento_Tailor_Resume_Demo.mp4"
              alt="Resume tailoring interface demonstration showing how to tailor a resume to a job description"
              aspectRatio="square"
            />

            <BentoGridItem
              imageUrl="/case-studies/resumeboost/Bento_Restructure.webp"
              alt="Resume restructuring interface showing original bullet points and AI-enhanced restructured descriptions"
              aspectRatio="16:9"
            />
          </BentoGrid>
        </ContentSection>

        <ContentSection id="impact" title="Outcomes">
          <div className="prose prose-gray max-w-3xl mx-auto">
            <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>800 resumes analyzed in the first 2–3 months</strong> with minimal marketing.
              </li>
              <li>
                <strong>200+ resumes processed daily on MyCareersFuture</strong> after integration.
              </li>
              <li>
                <strong>3,500+ total resumes analyzed</strong> since launch, with continuous growth.
              </li>
              <li>Improved user engagement and feedback loops, shaping future iterations.</li>
            </ul>
          </div>

          {/* Testimonial Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-medium mb-8 max-w-3xl mx-auto">What Users Say</h3>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Testimonial 1 */}
                <div className="bg-gray-100 p-8 md:p-10">
                  <h3 className="text-xl md:text-2xl font-light font-lexend mb-8">
                   {`"The UI is very clean and fast. Suggestions for the points are very Singaporean human like. In fact
                    I accepted most of the revisions! Much better than the chatGPTs I'm using at work"`}
                  </h3>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-gray-100 p-8 md:p-10">
                  <h3 className="text-xl md:text-2xl font-light font-lexend mb-8">
                    {`"I like that the feedback is categorised by theme and everything is very clear with icons and bolded
                    keywords so its easier to work on`}"
                  </h3>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-gray-100 p-8 md:p-10">
                  <h3 className="text-xl md:text-2xl font-light font-lexend mb-8">
                    {`"Before that I only receive 1 or 2 but after this ResumeBoost I get quite frequent calls back as
                    long as they have downloaded the resume the call back percentage is about 70%"`}
                  </h3>
                </div>

                {/* Testimonial 4 */}
                <div className="bg-gray-100 p-8 md:p-10">
                  <h3 className="text-xl md:text-2xl font-light font-lexend mb-8">
                    {`"I just wanna say I love the tool and amazing job!!"`}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection id="retro" title="Retrospective &amp; Learnings" className="bg-gray-50">
          <div className="prose prose-gray max-w-3xl mx-auto">
            <div className="pb-8">
              <Subheader>1. Start Research Earlier</Subheader>
              <div className="space-y-4 text-gray-600">
                <p className="text-base">
                  Initially, we spent a lot of time havingcasual conversations with potential stakeholders and user
                  groups but it went nowhere. We then took stock of our research and had issues defining what problem to
                  solve. Only after doing that step did we decide a direction for the research. Immediately taking stock
                  of the existing research and then executing on that earlier would have helped validate key assumptions
                  sooner, reducing rework.
                </p>
              </div>
            </div>

            <div className="py-8">
              <Subheader>2. Coming up with a stronger unique selling point</Subheader>
              <div className="space-y-4 text-gray-600">
                <p className="text-base">
                  As we continued iterating on the product, we began to reflect on how we, as a government initiative,
                  could differentiate ourselves from commercial offerings. To explore this, I facilitated a visioning
                  session with the team. While we eventually aligned on a unique selling point (USP), the direction
                  faced challenges due to stakeholder concerns and operational constraints. In hindsight, raising this
                  question earlier during the conceptual stage might have allowed for more productive alignment and
                  reduced friction later on.
                </p>
              </div>
            </div>

            <div className="py-8">
              <Subheader>Final thoughts</Subheader>
              <div className="space-y-4 text-gray-600">
                <p className="text-base">
                  This project demonstrated the power of <strong>AI-driven resume enhancement</strong> and how iterative
                  design can improve jobseeker outcomes. It also reinforced the importance of{" "}
                  <strong>early research, usability testing, and strategic scaling</strong> for broader adoption.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        <NextProject title="Insight" description="HDB BTO Unit Selection empowered by XR" href="/work/insight" />
      </CaseStudyLayout>
    </>
  )
}
