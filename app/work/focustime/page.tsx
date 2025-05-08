import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout"
import { ContentSection } from "@/components/case-study/ContentSection"
import { HighlightCard } from "@/components/case-study/HighlightCard"
import { NextProject } from "@/components/case-study/NextProject"
import { BentoGrid, BentoGridItem } from "@/components/case-study/BentoGrid"
import { IterationSection } from "@/components/case-study/IterationSection"
import Image from "next/image"
import { HeroSection } from "@/components/case-study/HeroSection"
import { Subheader } from "@/components/case-study/Typography"

export default function FocusTimeCaseStudyPage() {
  // Case study data
  const caseStudy = {
    title: "FocusTime",
    subtitle: "An XR Pomodoro Timer to Encourage Mindful Focus",
    role: "Solo Designer and Developer",
    duration: "1 month for XR Design Competition",
    responsibilities: [
      "Carried out end-to-end design process",
      "Developed and iterated on the Unity prototype",
    ],
  }

  return (
    <>
      {/* <HeroSection /> */}
      <CaseStudyLayout
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        role={caseStudy.role}
        duration={caseStudy.duration}
        responsibilities={caseStudy.responsibilities}
      >
        <ContentSection id="brief" title="The Brief" className="bg-gray-50">
          <div className="prose prose-gray max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              The design competition theme was <strong>diegetic design</strong>: crafting interfaces that exist naturally within the user's environment, without relying on traditional HUDs or menus.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              I wanted to explore how XR could create a more mindful approach to time management, building on a method I often use myself—the Pomodoro technique.
            </p>
          </div>
        </ContentSection>

        <ContentSection id="highlights" title="Project Highlights">
          <BentoGrid className="mb-8">
            <BentoGridItem videoUrl="https://vimeo.com/972083852?share=copy" colSpan={4} /> 
          </BentoGrid>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HighlightCard
              number="2nd"
              label="Place"
              description="Runner-up in the XR Design Competition"
            />
            <HighlightCard
              number="1"
              label="Month"
              description="To build the fully interactive Unity prototype"
            />
            <HighlightCard 
              number="1" 
              label="Demo" 
              description="Video showcased to judges and community" 
            />
          </div>
        </ContentSection>

        <ContentSection id="ideation" title="Ideation" className="bg-gray-50">
          <div className="prose prose-gray max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              The Pomodoro technique—working in focused sprints followed by short breaks—felt like a perfect match for diegetic design.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Instead of an abstract timer, I imagined a physical hourglass that users could interact with naturally to track time.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Initially, I considered using a tomato kitchen timer, a classic symbol of the Pomodoro technique. However, implementing the twisting motion accurately in Unity proved challenging. By process of elimination, I opted for an hourglass to symbolize the passage of time.
            </p>
            <h3 className="text-xl font-medium mt-6 mb-4">The initial prototype included:</h3>
            <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2">
              <li>Flipping the hourglass to start the timer</li>
              <li>Dimming lights and playing soothing music to help users focus</li>
              <li>Flipping back to pause the session</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="iterations" title="Key Iterations" className="text-center">
          <div className="space-y-16 md:space-y-48 mb-12 text-left">
            {/* Early Design Critique Section */}
            <IterationSection
              title="Early Design Critique"
              videoSrc="/case-studies/focustime/early-design-critique.mp4"
            >
              <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2">
                <li>Received feedback during a formal critique session.</li>
                <li>Feedback highlighted that the hourglass attracted too much attention, users had to turn their heads to view the time, and the flipping motion was not ergonomic, requiring a full 180-degree rotation.</li>
                <li>Identified the importance of an always-visible pinned hourglass and timer to keep users grounded.</li>
              </ul>
            </IterationSection>

            {/* Rotation States and Design Improvements Section */}
            <IterationSection
              title="Rotation States and Design Improvements"
              videoSrc="/case-studies/focustime/rotation-states.mp4"
              isReversed={true}
            >
              <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2">
                <li>Divided the 180-degree rotation into three buckets:
                  <ul className="list-disc pl-6 mt-2">
                    <li>0 to 60 degrees: Reset the timer</li>
                    <li>60 to 120 degrees: Pause the timer</li>
                    <li>120 to 180 degrees: Start the timer</li>
                  </ul>
                </li>
                <li>Added labels to indicate the current action based on the rotation angle.</li>
                <li>Minimized and docked the hourglass at the top to show time upfront.</li>
                <li>Introduced a "distance grab" interaction, allowing users to grab and flip the hourglass without physically moving.</li>
                <li>Focused on ensuring the object behavior felt predictable and satisfying.</li>
              </ul>
            </IterationSection>

            {/* Animations and Quality of Life Features Section */}
            <IterationSection
              title="Animations and Quality of Life Features"
              videoSrc="/case-studies/focustime/animations.mp4"
            >
              <p className="text-lg text-gray-600">Post competition, I made several refinements:</p>
              <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2 mt-4">
                <li>Learned basic 3D modeling and animations using Blender to add focus and break time animations</li>
                <li>Based on feedback, redesigned the rotation indicator into a speedometer-style UI to make state changes (pause, reset, continue) more intuitive.</li>
                <li>Fixed small bugs and added polish—like system recentering, hover states, and tweened animations—that'll be useful in future XR projects.</li>
              </ul>
            </IterationSection>
          </div>
        </ContentSection>

        <ContentSection id="solution" title="Final Solution" className="bg-gray-50">
          <div className="prose prose-gray max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">FocusTime is an XR Pomodoro timer where:</p>
            <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2 mt-4">
              <li>Flipping the hourglass starts a Pomodoro session.</li>
              <li>A pinned visual timer shows progress without breaking immersion.</li>
              <li>Natural gestures and interactions are central—no floating menus or UI panels.</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="outcomes" title="Outcomes">
          <div className="prose prose-gray max-w-3xl mx-auto">
            <ul className="text-lg text-gray-600 list-disc pl-6 space-y-2">
              <li>Runner-up for the XR Design Competition.</li>
              <li>Built an interactive prototype that demonstrated a mindful, diegetic time management experience.</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="future" title="Future Ideas" className="bg-gray-50">
          <div className="prose prose-gray max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <Subheader>Setting the Time</Subheader>
                <p className="text-gray-600">
                  Currently, the prototype defaults to a 25-minute session. Future iterations could allow users to choose between different session lengths by selecting between small (25 minutes) and large (45 minutes) hourglasses. Alternatively, replacing the hourglass with a dial could enable users to set custom durations.
                </p>
              </div>

              <div>
                <Subheader>Music Controls and Customization</Subheader>
                <p className="text-gray-600">
                  Introducing controls to mute/unmute music and allowing users to customize the background music could enhance the user experience. These settings would be accessible through a dedicated settings menu.
                </p>
              </div>

              <div>
                <Subheader>Augments</Subheader>
                <p className="text-gray-600">
                  With the announcement of Augments by Meta in 2023, FocusTime could evolve into a persistent digital object placed in the user's environment. Users could position the hourglass on their desk and interact with it naturally, flipping to start or reset sessions.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection id="retro" title="Retrospective & Learnings" className="bg-gray-50">
          <div className="prose prose-gray max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <Subheader>1. Focus More on Ergonomics Early</Subheader>
                <p className="text-gray-600">
                  Initially, I naively prototyped the hourglass flipping in Unity without considering real-world ergonomics. In hindsight, grabbing and physically testing the flipping motion earlier would have revealed that a dial or twist mechanism might feel more natural.
                </p>
              </div>

              <div>
                <Subheader>2. Unity and Closing the Skill Gap</Subheader>
                <p className="text-gray-600">
                  This project helped me practice bringing my XR ideas to life using Unity, Bezi, and ShapesXR.
                </p>
                <p className="text-gray-600 mt-2">
                  Although Unity has a steep learning curve, leveraging AI tools like ChatGPT and Perplexity at the time helped me generate and debug code. Logical thinking and debugging skills were crucial when AI-generated code didn't work perfectly.
                </p>
              </div>

              <div>
                <Subheader>3. Finding an Ideal Workflow</Subheader>
                <p className="text-gray-600">
                  Through this project, I discovered a rough ideal workflow for myself:
                </p>
                <ul className="text-gray-600 list-disc pl-6 mt-2">
                  <li>Sketch ideas on paper</li>
                  <li>Create UI panels in Figma</li>
                  <li>Prototype spatial layouts in Bezi or ShapesXR</li>
                  <li>Import assets into Unity for interaction implementation</li>
                </ul>
                <p className="text-gray-600 mt-2">
                  A small but valuable learning: Bezi imports assets as prefabs into Unity, preserving previous work during updates, while ShapesXR overwrites assets—a discovery I learned the hard way!
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        <NextProject
          title="ResumeBoost"
          description="Helping Jobseekers Improve Their Resumes with AI"
          href="/work/resumeboost"
        />
      </CaseStudyLayout>
    </>
  )
}
