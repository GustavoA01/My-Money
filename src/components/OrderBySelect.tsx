"use client"
import { useExpenseProvider } from "@/contexts/ExpenseProvider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

export const OrderBySelect = () => {
  const { orderByFilter, setOrderByFilter } = useExpenseProvider()

  return (
    <Select value={orderByFilter} onValueChange={setOrderByFilter}>
      <SelectTrigger>
        <SelectValue placeholder="Ordenar por" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="recent">Mais recentes</SelectItem>
        <SelectItem value="old">Mais antigos</SelectItem>
        <SelectItem value="high">Maior valor</SelectItem>
        <SelectItem value="low">Menor valor</SelectItem>
      </SelectContent>
    </Select>
  )
}
