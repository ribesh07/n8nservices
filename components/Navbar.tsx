import { Zap } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  return (
<nav className="mt-1 mb-8">
  {/* <div className="
  
    max-w-7xl mx-auto
    px-4
    h-16
    flex items-center justify-between
    rounded-2xl
    border border-indigo-200
    bg-white/80
    backdrop-blur
    shadow-sm
  "> */}
       {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <Link href="/">
                <h1 className="text-2xl font-bold text-slate-900">ServicesHub</h1>
                <p className="text-sm text-slate-600">n8n Automation Services</p>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-slate-600">Total Executions</p>
                <p className="text-xl font-bold text-slate-900">6.6k</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    {/* Brand */}
    {/* <Link
      href="/"
      className="flex items-center gap-2 text-lg font-semibold text-gray-900
                     transition-transform duration-200 ease-out
    hover:scale-105
    active:scale-95
                 hover:text-indigo-600 "
    >
      <span className="text-xl">⚙️</span>
      <span>ServicesHub</span>
    </Link> */}

    {/* Action */}
    {/* <Link
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
    </Link> */}
  {/* </div> */}
</nav>

  )
}
