import { Timestamp } from "firebase/firestore"
import { FormExpenseType } from "./schemas"

export interface ExpenseType {
  id: string
  description: string
  value: number
  category: number
  date: Timestamp | null
}

export interface GoalType {
  id: string
  goalName: string
  goalMaxValue: number
  category: number
  dateLimit: Timestamp 
}

export type FormatExpenseType = {
  data: Omit<FormExpenseType, "date">
  date: Date | null
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
  handleSearch: (searchQuery: string) => void
  orderByFilter: string | undefined
  setOrderByFilter: React.Dispatch<React.SetStateAction<string | undefined>>
  filter: string | undefined
  handleSetFilter: (value: string | undefined) => void
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
