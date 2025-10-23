"use client"
import { DollarSign, House } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

export const Header = () => {
  const pathName = usePathname()

  return (
    <header className="flex items-center space-x-3 justify-center mb-11 border-2 pb-3 border-transparent border-b-primary-blue">
      <Link
        href={"/"}
        className={`border-2  p-2 ${
          pathName === "/" ? "border-blue-700" : "border-gray-200"
        } rounded-full`}
      >
        <House className="cursor-pointer" />
      </Link>
      <Link
        href={"/despesas"}
        className={`border-2 p-2 ${
          pathName === "/despesas" ? "border-blue-700" : "border-gray-200"
        } rounded-full`}
      >
        <DollarSign className="cursor-pointer" />
      </Link>
    </header>
  )
}
