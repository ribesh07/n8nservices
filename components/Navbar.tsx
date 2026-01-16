import Link from "next/link"

export default function Navbar() {
  return (
<nav className="mt-1 mb-8">
  <div className="
    max-w-7xl mx-auto
    px-4
    h-16
    flex items-center justify-between
    rounded-2xl
    border border-indigo-200
    bg-white/80
    backdrop-blur
    shadow-sm
  ">
    {/* Brand */}
    <Link
      href="/"
      className="flex items-center gap-2 text-lg font-semibold text-gray-900
                     transition-transform duration-200 ease-out
    hover:scale-105
    active:scale-95
                 hover:text-indigo-600 "
    >
      <span className="text-xl">⚙️</span>
      <span>ServicesHub</span>
    </Link>

    {/* Action */}
    <Link
      href="/dashboard"
      className="
        inline-flex items-center gap-2
        text-sm font-medium
        px-4 py-2
        rounded-xl
        bg-indigo-600 text-white
        hover:bg-indigo-500
        active:scale-95
        transition-all
      "
    >
      Dashboard
    </Link>
  </div>
</nav>

  )
}
