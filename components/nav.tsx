import Link from "next/link"

export function Nav() {
  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md top-4 sm:top-8 md:top-12 bottom-4 sm:bottom-auto">
      <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg">
        <ul className="flex items-center justify-around gap-3">
          <li>
            <Link
              href="/"
              className="text-gray-800 hover:text-black transition-colors font-lexend font-medium text-sm sm:text-base"
            >
              AL
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-600 hover:text-black transition-colors font-lexend text-sm sm:text-base"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              className="text-gray-600 hover:text-black transition-colors font-lexend text-sm sm:text-base"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-black transition-colors font-lexend text-sm sm:text-base"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

