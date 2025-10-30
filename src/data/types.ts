import { Timestamp } from "firebase/firestore"
import { FormExpenseType } from "./schemas"

export interface ExpenseType {
  id: string
  description: string
  value: number
  category: number
  date: Timestamp | undefined
}

export const categories: Record<number, string> = {
  0: "Alimentação",
  1: "Transporte",
  2: "Lazer",
  3: "Conta",
  4: "Saúde",
  5: "Compras",
  6: "Outro",
}

export type FormatExpenseType = {
  data: Omit<FormExpenseType, "date">
  date: Date | undefined
}

export type ExpenseContextType = {
  expensesList: ExpenseType[] | undefined
  addExpenseFn: (data: ExpenseType) => void
  editExpenseFn: (id: string, data: ExpenseType) => void
  deleteExpenseFn: (id: string) => void
  formatExpense: ({ data, date }: FormatExpenseType) => ExpenseType
  filter: string | undefined
  handleSetFilter: (value: string | undefined) => void
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
