import { Timestamp } from "firebase/firestore"
import { FormExpenseType } from "./schemas"

export interface ExpenseType {
  id: string
  description: string
  value: number
  category: number
  date: Timestamp | undefined
}

export type FormatExpenseType = {
  data: Omit<FormExpenseType, "date">
  date: Date | undefined
}

export type EditExpenseType = {
  id: string
  data: Omit<ExpenseType, "id">
}

export type ExpenseContextType = {
  expensesList: ExpenseType[] | undefined
  addExpenseFn: (data: Omit<ExpenseType, "id">) => void
  editExpenseFn: (params: EditExpenseType) => void
  deleteExpenseFn: (id: string) => void
  formatExpense: ({ data, date }: FormatExpenseType) => Omit<ExpenseType, "id">
  filter: string | undefined
  handleSetFilter: (value: string | undefined) => void
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
