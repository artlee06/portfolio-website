"use client"

import { useState, useCallback, memo, useRef, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Testimonial = {
  id: number
  text: string
  author: {
    name: string
    role: string
    company: string
    image: string
  }
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "I have had the pleasure of working with Arthur for a few months at IBM iX Singapore. During this relatively short period, Arthur was able to make a mark for himself within the Design practice and across IBM Consulting. Arthur has a refreshing sense of curiosity and is able to structure himself and his work to experiment with technology and achieve compelling outcomes with very little guidance. I find his sense of commitment and discipline to be a tremendous asset for his own growth as well as team members around him. I believe Arthur will likely become an even more amazing designer, given the right opportunity and guidance. I highly recommend Arthur to any team or organization he chooses to work with.",
    author: {
      name: "Ari Widjanarko",
      role: "Design Lead",
      company: "IBM iX",
      image: "/testimonials/Ari Portfolio Image.webp",
    },
  },
  {
    id: 2,
    text: "I worked closely with Arthur on the Education UX team at Indeed. After his internship, Arthur was sort of thrown into the deep end as the lead designer for one of our product teams. Despite that, Arthur's attention to detail, quality of work, and sheer output was way above what was expected of him.",
    author: {
      name: "Todd Oquist",
      role: "Senior UX Developer",
      company: "Indeed.com",
      image: "/testimonials/Todd.webp",
    },
  },
  {
    id: 3,
    text: "I worked alongside Arthur as a senior SWE on the Education team in Indeed, collaborating very closely on various projects such as supporting skill-based courses on Indeed's courses search page, as well as improving the upskilling experience on Indeed's career explorer pages. Although Arthur was officially just an Associate UX Designer after having joined Indeed for ~10 months since his graduation, I felt that Arthur's communication, collaboration & design skills matched UX designers who were mid-level with a few years of experience. He demonstrated great ownership in shaping the design (extending beyond UX, even into product concerns) of the aforementioned projects, driving team-wide discussions to clarify design & requirements, writing well thought-out design documents centred on user problems, and producing well-specified Figma designs, all done in an agile manner that took in input & feedback from various functions. Working with Arthur on the same team has been extremely productive, and I'm confident he'll be a great UX & product design asset on any software team.",
    author: {
      name: "Yun Chuan Ngin",
      role: "Senior Software Engineer",
      company: "Indeed.com",
      image: "/testimonials/YC.webp",
    },
  },
  {
    id: 4,
    text: "I worked with Arthur at Indeed. While Arthur was an Associate UX Designer during his time at Indeed, his skills stretched way beyond that. He collaborated seamlessly with stakeholders across product, content, engineering, and UX to ensure products balanced user and business needs. If you are looking to add a UX Designer to your team, don't look past Arthur!",
    author: {
      name: "Terezia Toth",
      role: "UX Content Designer",
      company: "Indeed.com",
      image: "/testimonials/Terezia.webp",
    },
  },
  {
    id: 5,
    text: "I managed Arthur both as a UX Intern and Associate UX Designer. I very highly recommend Arthur for anyone seeking a talented Designer early in their career. During his time at Indeed Arthur showcased strong UX Design methods and intuition, being capable of tackling complex user problems that I would expect from Designers with much more experience. I also couldn't speak more highly of his engagement with his work and impactful collaboration with all team members across UX, Product, and Engineering. He will be a strong asset for any role.",
    author: {
      name: "Chris Roper",
      role: "UX Director",
      company: "Indeed.com",
      image: "/testimonials/Chris Portfolio Image.webp",
    },
  },
  {
    id: 6,
    text: "Arthur was an intern on the UX team at Indeed. We worked together on a few design and research projects.Arthur is a joy to work (and laugh) with. His drive, attitude and discipline at work made him a standout member of the team. His knowledge of and enthusiasm for UX research also sets him apart from many other designers - as a UX researcher, this made working with him a breeze. He'd be a great addition to any design or product team.",
    author: {
      name: "Sara Koay",
      role: "Senior UX researcher",
      company: "Indeed.com",
      image: "/testimonials/Sara.webp",
    },
  },
  {
    id: 7,
    text: "I had the pleasure of mentoring Arthur during his internship at Indeed. I was particularly impressed by his design intuition and ability to juggle multiple projects. Those skills often take years to develop but they seemed to come naturally to him. Arthur would be a true asset for any company, and he earns my highest recommendation.",
    author: {
      name: "Konrad Marzec",
      role: "Senior Product designer",
      company: "Indeed.com",
      image: "/testimonials/Konrad-Portfolio-Image.webp",
    },
  },
  {
    id: 8,
    text: "I managed Arthur as a UX research intern and he was a terrific addition to the team - for ANY team in fact. He joined the team with a clear focus on what he wanted out of the internship and always made sure to sound out any issues he has in mind at the right times. This made managing him a breeze and it merely felt like I was working with another competent teammate. Arthur's quick understanding of UX research concepts and methodologies, and subsequent application of them in current projects with other designers ensure that work proceeded and completed in the set timelines. Arthur's mix of productivity, hard work, focus and positive attitude supports my strong recommendation of him for future UX roles.",
    author: {
      name: "Jules Ang",
      role: "Produt Design Lead",
      company: "MoneySmart",
      image: "/testimonials/Jules-Portfolio-Image.webp",
    },
  },
  {
    id: 9,
    text: "Arthur is a competent software engineer intern. The biggest feature he worked on was Special Tags, a robust tagging feature for flexible consolidation of hourly work. He, alongside another fulltime software engineer, oversaw and executed the implementation of this project, ensuring that it shipped. He has an intuitive eye for product and is diligent with his own documentation and learning. His jovial nature makes him a joy to work with. He would bring value to any company that he works in.",
    author: {
      name: "Jeremy Hon",
      role: "CTO, cofounder",
      company: "StaffAny",
      image: "/testimonials/Jeremy-Portfolio-Image.webp",
    },
  },
  {
    id: 10,
    text: "Arthur is a fantastic software engineering intern with an eclectic combination of persistence, initiative and research skills. I had the pleasure of coaching and guiding Arthur for his internship in NodeFlair. During his short stint with us, he displayed exceptional creativity and competence in handling Reactjs. The forms logic that he was responsible for wasn't trivial, yet he managed to complete it under pressure. Arthur also displayed teamwork and cooperation by helping other interns around him. On top of it, he is naturally curious about programming and software, which often prompted healthy technical conversations where everyone learns. I am proud of Arthur's work and talent. He will certainly make a valuable addition to any technical team that values persistence and creativity.",
    author: {
      name: "Alvin Ng",
      role: "Lead Software Engineer",
      company: "BCG X",
      image: "/testimonials/Alvin Portfolio Image.webp",
    },
  },
  // Add more testimonials
]

const DEFAULT_IMAGE_URL = "/placeholder.svg?height=64&width=64"

const useCarouselAnimation = (
  direction: "left" | "right",
  scrollSpeed: number,
  isPaused: boolean
) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollPosition = useRef<number>(0);

  const initializeScrollPosition = () => {
    if (rowRef.current && direction === "right") {
      scrollPosition.current = rowRef.current.scrollWidth / 2;
      rowRef.current.scrollLeft = scrollPosition.current;
    }
  };

  const animate = () => {
    if (rowRef.current && !isPaused) {
      const { scrollWidth } = rowRef.current;

      if (direction === "left") {
        scrollPosition.current += scrollSpeed;
        if (scrollPosition.current >= scrollWidth / 2) {
          scrollPosition.current = 0;
        }
      } else {
        scrollPosition.current -= scrollSpeed;
        if (scrollPosition.current <= 0) {
          scrollPosition.current = scrollWidth / 2;
        }
      }

      rowRef.current.scrollLeft = scrollPosition.current;
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return {
    rowRef,
    initializeScrollPosition,
  };
};

export function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const scrollSpeed = 0.5; // pixels per frame

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation hooks for desktop and mobile rows
  const { rowRef: desktopRowRef, initializeScrollPosition: initDesktopRow } = 
    useCarouselAnimation("left", scrollSpeed, isPaused);
    
  const { rowRef: mobileTopRowRef, initializeScrollPosition: initMobileTopRow } = 
    useCarouselAnimation("left", scrollSpeed, isPaused);
    
  const { rowRef: mobileBottomRowRef, initializeScrollPosition: initMobileBottomRow } = 
    useCarouselAnimation("right", scrollSpeed, isPaused);

  // Initialize scroll positions
  useEffect(() => {
    if (isMobile) {
      initMobileTopRow();
      initMobileBottomRow();
    } else {
      initDesktopRow();
    }
  }, [isMobile, initDesktopRow, initMobileTopRow, initMobileBottomRow]);

  const handleOpenTestimonial = useCallback((testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial)
  }, [])

  const handleCloseTestimonial = useCallback(() => {
    setSelectedTestimonial(null)
  }, [])

  // Split testimonials into two rows for mobile view
  const topRowTestimonials = testimonials.slice(0, Math.ceil(testimonials.length / 2))
  const bottomRowTestimonials = testimonials.slice(Math.ceil(testimonials.length / 2))

  // Create duplicated testimonials for continuous scrolling
  const allDesktopTestimonials = [...testimonials, ...testimonials];
  const allMobileTopTestimonials = [...topRowTestimonials, ...topRowTestimonials];
  const allMobileBottomTestimonials = [...bottomRowTestimonials, ...bottomRowTestimonials];

  return (
    <section className="mt-16 mb-32 relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
      <h2 className="text-2xl md:text-4xl font-medium text-center mb-16">What others are saying</h2>
      
      {/* Desktop view */}
      <div className="hidden md:block overflow-hidden">
        <div 
          ref={desktopRowRef}
          className="flex"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ 
            overflowX: "hidden", 
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          <div className="inline-flex">
            {allDesktopTestimonials.map((testimonial, idx) => (
              <div key={`desktop-${testimonial.id}-${idx}`} className="inline-block px-3">
                <TestimonialCard 
                  testimonial={testimonial} 
                  onReadMore={handleOpenTestimonial} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile view */}
      <div className="md:hidden">
        {/* Top row */}
        <div className="overflow-hidden mb-6">
          <div 
            ref={mobileTopRowRef}
            style={{ 
              overflowX: "hidden", 
              scrollbarWidth: "none",
              msOverflowStyle: "none" 
            }}
          >
            <div className="inline-flex">
              {allMobileTopTestimonials.map((testimonial, idx) => (
                <div key={`mobile-top-${testimonial.id}-${idx}`} className="inline-block px-2">
                  <TestimonialCard 
                    testimonial={testimonial} 
                    onReadMore={handleOpenTestimonial}
                    isMobile={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom row */}
        <div className="overflow-hidden">
          <div 
            ref={mobileBottomRowRef}
            style={{ 
              overflowX: "hidden", 
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            <div className="inline-flex">
              {allMobileBottomTestimonials.map((testimonial, idx) => (
                <div key={`mobile-bottom-${testimonial.id}-${idx}`} className="inline-block px-2">
                  <TestimonialCard 
                    testimonial={testimonial} 
                    onReadMore={handleOpenTestimonial}
                    isMobile={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <TestimonialDialog testimonial={selectedTestimonial} onClose={handleCloseTestimonial} />
    </section>
  )
}

const TestimonialCard = memo(function TestimonialCard({
  testimonial,
  onReadMore,
  isMobile = false,
}: { 
  testimonial: Testimonial; 
  onReadMore: (testimonial: Testimonial) => void;
  isMobile?: boolean;
}) {
  return (
    <div 
      className={cn(
        "bg-gray-100 rounded-xl flex flex-col transition-all duration-300 hover:shadow-md",
        isMobile 
          ? "w-[280px] h-[280px] p-4" 
          : "w-[560px] h-[360px] p-6"
      )}
    >
      <p className={cn(
        "text-gray-700 mb-4 flex-grow overflow-hidden prose prose-gray",
        isMobile ? "text-sm line-clamp-5" : "line-clamp-4"
      )}>
        {testimonial.text}
      </p>
      
      {testimonial.text.length > (isMobile ? 180 : 480) && (
        <Button
          variant="outline"
          className="self-start mt-auto mb-4 rounded-full text-sm"
          onClick={() => onReadMore(testimonial)}
        >
          Read more
        </Button>
      )}
      
      <div className="flex items-center gap-3 mt-auto">
        <Image
          src={testimonial.author.image || DEFAULT_IMAGE_URL}
          alt={testimonial.author.name}
          width={isMobile ? 40 : 48}
          height={isMobile ? 40 : 48}
          className="rounded-full"
        />
        <div>
          <p className={cn("font-medium", isMobile ? "text-sm" : "text-base")}>
            {testimonial.author.name}
          </p>
          <p className={cn("text-gray-600", isMobile ? "text-xs" : "text-sm")}>
            {testimonial.author.company}
          </p>
        </div>
      </div>
    </div>
  )
})

const TestimonialDialog = memo(function TestimonialDialog({
  testimonial,
  onClose,
}: {
  testimonial: Testimonial | null
  onClose: () => void
}) {
  if (!testimonial) return null

  return (
    <Dialog open={!!testimonial} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white">
        <DialogHeader>
          <DialogTitle>Testimonial from {testimonial.author.name}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-gray-600">{testimonial.text}</p>
          <div className="mt-6 flex items-center gap-4">
            <Image
              src={testimonial.author.image || DEFAULT_IMAGE_URL}
              alt={testimonial.author.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">{testimonial.author.name}</p>
              <p className="text-sm text-gray-600">{testimonial.author.company}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
})
