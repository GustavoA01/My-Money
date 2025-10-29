'use client'
import { useExpenseProvider } from "@/contexts/ExpenseProvider"
import { SelectCategory } from "../features/ExpenseForm/components/SelectCategory"

export const FilterByCategory = () => {
  const { filter, handleSetFilter } = useExpenseProvider()
  
  return (
    <SelectCategory
      name="categoryFilter"
      defaultValue={undefined}
      onValueChange={handleSetFilter}
      value={filter}
    />
  )
}
