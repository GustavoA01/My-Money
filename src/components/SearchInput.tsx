"use client"
import { Input } from "./ui/input"
import { useExpenseProvider } from "@/contexts/ExpenseProvider"

export const SearchInput = () => {
  const { handleSearch } = useExpenseProvider()
  
  return (
    <Input
      onChange={(e) => handleSearch(e.target.value)}
      className="w-40"
      placeholder="Buscar"
    />
  )
}
