import Link from "next/link"

export default function ServiceCard({ service }: any) {
  return (
    <Link
      href={service.href}
      className="block border border-gray-800 rounded-xl p-5 hover:border-indigo-500 transition"
    >
      <h2 className="text-lg font-semibold mb-2">
        {service.title}
      </h2>
      <p className="text-sm text-gray-400">
        {service.description}
      </p>
    </Link>
  )
}
