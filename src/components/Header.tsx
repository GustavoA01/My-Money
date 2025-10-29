"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export const Header = () => {
  const pathName = usePathname()

  return (
    <header className="flex items-center space-x-3 justify-center mb-11 border pb-3 border-transparent border-b-primary-blue">
      <Link
        href={"/"}
        className={`border-b-2  p-2 ${
          pathName === "/" ? "border-blue-500" : "border-b-transparent"
        }`}
      >
        <p>Início</p>
      </Link>
      <Link
        href={"/despesas"}
        className={`border-b-2 p-2 ${
          pathName === "/despesas" ? "border-blue-500" : "border-b-transparent"
        }`}
      >
        <p>Despesas</p>
      </Link>
    </header>
  )
}
