import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Monitor } from "lucide-react"

export function Projects() {
  const projects = [
    {
      id: 1,
      image: "/placeholder.svg?height=400&width=400",
      title: "Project 1",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=400",
      title: "Project 2",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=400",
      title: "Project 3",
    },
  ]

  return (
    <section className="px-4 sm:px-6 pb-24 sm:pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div key={project.id} className="relative group">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 sm:mt-20 bg-gray-900 rounded-xl p-6 sm:p-12 text-center">
          <div className="inline-flex items-center gap-2 text-white mb-4 sm:mb-6">
            <Monitor className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="font-lexend text-sm sm:text-base">There&apos;s more where that came from.</span>
          </div>
          <div>
            <Button variant="secondary" className="rounded-full font-lexend text-sm sm:text-base">
              View all projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

