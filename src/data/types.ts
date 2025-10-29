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

export type addNewExpenseType = {
  data: Omit<FormExpenseType, "date">
  date: Date | undefined
}

export type ExpenseContextType = {
  addNewExpense: ({ data, date }: addNewExpenseType) => void
  expensesList: ExpenseType[] | undefined
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleSetFilter: (value: string | undefined) => void
  filter: string | undefined
}
