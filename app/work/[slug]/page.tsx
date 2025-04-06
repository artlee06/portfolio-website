import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout"
import { ContentSection } from "@/components/case-study/ContentSection"
import { HighlightCard } from "@/components/case-study/HighlightCard"
import { NextProject } from "@/components/case-study/NextProject"
import { BentoGrid, BentoGridItem } from "@/components/case-study/BentoGrid"
import { TabsSection } from "@/components/case-study/TabsSection"
import Image from "next/image"
import { HeroSection } from "@/components/case-study/HeroSection"

export default function CaseStudyPage({}: { params: { slug: string } }) {
  // This is a placeholder. In a real implementation, you'd fetch the case study data based on the slug
  const caseStudy = {
    title: "Insight",
    subtitle: "HDB BTO Unit Selection empowered by XR",
    role: "Team lead, Designer, Developer",
    duration: "5 weeks for the Build Hackathon (Feb-Mar 2025)",
    responsibilities: [
      "Led end-to-end design process",
      "Conducted user research",
      "Developed the Unity prototype alongside my engineering teammate",
    ],
  }

  return (
    <>
      <HeroSection />
      <CaseStudyLayout
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        role={caseStudy.role}
        duration={caseStudy.duration}
        responsibilities={caseStudy.responsibilities}
      >
        <ContentSection id="problem" title="The Problem">
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600">
              After successfully balloting for a BTO project, prospective homeowners face several challenges when
              selecting their ideal unit:
            </p>
            <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Difficulty visualizing space</strong>: Applicants rely on 2D floor plans, which make it hard to
                understand the actual size and layout in 3D.
              </li>
              <li>
                <strong>Generic showroom layouts</strong>: Showrooms only represent standard 3, 4, and 5-room flats,
                which don&apos;t reflect the unique layouts of different BTO projects.
              </li>
              <li>
                <strong>Fragmented information</strong>: Factors like sunlight direction and proximity to amenities must
                be gathered from multiple online sources, making it difficult to assess suitability. Not to mention
                things like sunlight direction specifically is hard to visualise.
              </li>
            </ul>
            <p className="text-lg text-gray-600 mt-6">
              Our goal was to design an immersive XR experience that empowers homeowners to make more informed decisions
              before committing to their future home.
            </p>
          </div>
        </ContentSection>

        <ContentSection id="highlights" title="Project Highlights" className="bg-gray-50">
          <BentoGrid className="mb-8">
            <BentoGridItem videoUrl="https://vimeo.com/1070643355" colSpan={4} />
          </BentoGrid>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <HighlightCard
              number="8"
              label="User Tests"
              description="4 concept tests and 4 usability tests with real BTO applicants"
            />
            <HighlightCard
              number="100+"
              label="LinkedIn Likes"
              description="Creating engagement beyond the hackathon"
            />
            <HighlightCard number="5" label="Weeks" description="To design and develop the XR prototype" />
            <HighlightCard
              number="1"
              label="Real-world Problem"
              description="Showcasing XR's potential for real estate"
            />
          </div>
        </ContentSection>

        <ContentSection id="research" title="Research & Discovery">
          <TabsSection
            tabs={[
              {
                id: "concept",
                label: "Concept Testing",
                content: (
                  <div className="space-y-6">
                    <div className="prose prose-gray max-w-none">
                      <p className="text-lg text-gray-600">
                        To validate our idea early, we built an interactive concept prototype in ShapesXR—an AR/VR
                        design tool—and tested it with <strong>4 recent BTO applicants</strong>. The session was divided
                        into two parts:
                      </p>
                      <ol className="text-lg text-gray-600 list-decimal pl-6 space-y-2 mt-4">
                        <li>
                          <strong>Exploratory user interviews</strong> to uncover key challenges in the unit selection
                          process.
                        </li>
                        <li>
                          <strong>Concept testing</strong> with the ShapesXR prototype to assess its effectiveness.
                        </li>
                      </ol>
                      <h3 className="text-xl font-medium mt-6 mb-4">Key Takeaways</h3>
                      <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2">
                        <li>
                          Participants found it <strong>difficult to understand and visualize</strong> unit layouts
                          using 2D plans, particularly in terms of{" "}
                          <strong>overall spatial arrangement and actual size</strong>.
                        </li>
                        <li>
                          Selecting an ideal unit involved <strong>multiple considerations</strong> such as unit
                          position, nearby amenities, floor level, and sunlight exposure.
                        </li>
                        <li>
                          The concept prototype was <strong>well-received</strong>, with users appreciating features
                          like{" "}
                          <strong>
                            project specific unit layouts, sunlight simulation, and real-world views from windows
                          </strong>
                          .
                        </li>
                        <li>
                          Areas for improvement included <strong>more realistic textures</strong>, an option to{" "}
                          <strong>view spaces without furniture</strong>, and other refinements to enhance clarity and
                          usability.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-center mt-8">
                      <div className="relative aspect-[16/9] w-full max-w-3xl rounded-lg overflow-hidden">
                        <Image
                          src="/case-studies/insight/Conducting-concept-test.jpg"
                          alt="Concept testing with ShapesXR prototype"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1200px"
                          className="object-cover"
                        />
                      </div>
                      <p className="text-sm text-gray-600 mt-2 text-center">
                        Early concept testing with ShapesXR prototype
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                id: "usability",
                label: "Usability Testing",
                content: (
                  <div className="space-y-6">
                    <div className="prose prose-gray max-w-none">
                      <p className="text-lg text-gray-600">
                        Based on our initial research findings, we prioritized the <strong>core features</strong>{" "}
                        essential for a meaningful usability test with our Unity prototype. These included{" "}
                        <strong>sunlight simulation</strong>,{" "}
                        <strong>seamless transitions between tabletop and life-size views</strong>, enhanced{" "}
                        <strong>3D models and textures</strong>, and <strong>basic navigation</strong>.
                      </p>
                      <h3 className="text-xl font-medium mt-6 mb-4">Key Insights & Improvements</h3>
                      <div className="space-y-6">
                        <div>
                          <p className="font-medium">Insight: Orientation Challenges</p>
                          <p className="text-gray-600">
                            Participants <strong>had difficulty orienting themselves</strong> inside the life-size
                            units, making it challenging to identify rooms such as the living room or bedroom.
                          </p>
                          <p className="text-gray-600 mt-2">
                            <strong>Mitigation:</strong> We introduced a <strong>minimap</strong> and added an option to{" "}
                            <strong>toggle furniture visibility</strong>, helping users recognize different spaces more
                            easily.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">Insight: Movement Learning Curve</p>
                          <p className="text-gray-600">
                            The <strong>teleportation-based movement</strong> inside the life-size unit had a learning
                            curve. Initial tutorials to address this were often <strong>overlooked or skipped</strong>.
                          </p>
                          <p className="text-gray-600 mt-2">
                            <strong>Mitigation:</strong> We redesigned the tutorial to be{" "}
                            <strong>more prominent and intuitive</strong>, ensuring better onboarding—especially for
                            first-time XR users.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium">Insight: Environmental Realism</p>
                          <p className="text-gray-600">
                            Participants noted that the <strong>environment&apos;s realism</strong> needed improvement in
                            materials, lighting, and scale perception.
                          </p>
                          <p className="text-gray-600 mt-2">
                            <strong>Mitigation:</strong> We gathered specific feedback and refined textures, lighting,
                            and spatial proportions to enhance the overall immersive experience.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="flex flex-col">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                          <Image
                            src="/case-studies/insight/tutorial-tooltip-alt.jpeg"
                            alt="Tutorial tooltip"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 400px, 600px"
                            className="object-cover"
                          />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center">
                          Tutorial tooltips immediately visible to users
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                          <Image
                            src="/case-studies/insight/Newly-added-minimap.jpeg"
                            alt="Improved Unity prototype with minimap and control panel for better navigation"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 400px, 600px"
                            className="object-cover"
                          />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-center">
                          Improved prototype with minimap for better navigation
                        </p>
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
            defaultValue="concept"
          />
        </ContentSection>

        <ContentSection id="evolution" title="Taking a moment" className="bg-gray-50">
          <div className="mb-12">
            <p className="text-lg text-gray-600 mb-6">
              Before diving into our final solution, let&apos;s take a moment to appreciate how the prototype evolved. What
              began as a rough concept in ShapesXR transformed into a fully functional XR experience through multiple
              iterations and user feedback cycles.
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1072810171?h=a9c2a9a5e0"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="Insight - Prototype Evolution"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </ContentSection>

        <ContentSection id="solution" title="The Final Solution">
          <div className="prose prose-gray max-w-none mb-8">
            <p className="text-lg text-gray-600">Our XR prototype enables prospective homeowners to:</p>
            <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Explore the estate from a bird&apos;s-eye view</strong>
              </li>
              <li>
                <strong>See unit availability</strong> and step inside <strong>life-size 3D models</strong>
              </li>
              <li>
                <strong>Visualize sunlight changes</strong> throughout the day and year
              </li>
              <li>
                <strong>Experience surrounding amenities</strong> within an immersive environment
              </li>
            </ul>
          </div>
          <BentoGrid variant="solution">
            {/* First row: 2 16:9 placeholders side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BentoGridItem
                imageUrl="/case-studies/insight/Birdseyeview.jpeg"
                alt="Bird's-eye view of the estate with block selection UI"
                aspectRatio="16:9"
              />
              <BentoGridItem
                imageUrl="/case-studies/insight/Sunlight-view.jpeg"
                alt="Sunlight simulation showing direct and indirect sunlight on buildings"
                aspectRatio="16:9"
              />
            </div>

            {/* Second row: 1 square placeholder that fills the full width */}
            <BentoGridItem
              imageUrl="/case-studies/insight/Lifesize-view.jpeg"
              alt="Life-size view inside a unit showing sunlight through windows"
              aspectRatio="square"
            />

            {/* Third row: 1 16:9 placeholder that fills the full width */}
            <BentoGridItem
              imageUrl="/case-studies/insight/Amenities-view.jpeg"
              alt="Nearby amenities information showing future school locations"
              aspectRatio="16:9"
            />
          </BentoGrid>
        </ContentSection>

        <ContentSection id="impact" title="Potential Impact" className="bg-gray-50">
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600">
              By integrating XR into the BTO unit selection process, this solution has the potential to:
            </p>
            <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Reduce uncertainty</strong> for homebuyers by providing a realistic preview of their future home
              </li>
              <li>
                <strong>Streamline decision-making</strong>, minimizing the need for site visits
              </li>
              <li>
                <strong>Enhance transparency</strong> in the selection process by consolidating relevant information in
                one immersive experience
              </li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="retro" title="Retrospective & Learnings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-medium mb-4">Setting the Right Expectations</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Initially, our goal was to showcase XR&apos;s potential as a platform, but midway through, we shifted
                  toward a competitive mindset, leading to disappointment when we didn&apos;t win.
                </p>
                <p>
                  If winning was the goal, we would have needed to optimize for real-world adoption by prioritizing a{" "}
                  <strong>mobile/desktop-first approach with XR as an optional enhancement</strong>.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-medium mb-4">User Testing for Headset-Based XR</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>In-person testing was crucial</strong>: Since headset-based XR experiences are inherently
                  physical, remote testing was feasible for concept validation but less effective for usability testing.
                </p>
                <p>
                  <strong>Guided onboarding matters</strong>: Many participants were new to AR/VR, so onboarding needed
                  to teach both <strong>app-specific interactions</strong> and{" "}
                  <strong>basic headset functionality</strong> to ensure a smooth experience.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-lg text-gray-600">
            <p>
              This project was an exciting challenge that demonstrated how XR can transform decision-making in real
              estate. It also reinforced the importance of iterative design, usability testing, and balancing
              technological ambition with user needs.
            </p>
          </div>
        </ContentSection>

        <NextProject
          title="Project Two"
          description="An overview of the second project, highlighting its unique aspects."
          href="/work/project-two"
        />
      </CaseStudyLayout>
    </>
  )
}

