import Link from "next/link"

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-white text-[#2e2e2e] font-sans flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Study Coming Soon</h1>
        <p className="text-xl mb-8">{"We're working hard to bring you an exciting case study. Stay tuned!"}</p>
        <Link
          href="/work"
          className="inline-block px-6 py-3 rounded-full bg-[#2e2e2e] text-white hover:bg-[#2e2e2e]/80 transition-colors"
        >
          Back to Work
        </Link>
      </div>
    </main>
  )
}
