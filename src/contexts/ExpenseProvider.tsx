import { addNewExpenseType, ExpenseContextType, ExpenseType } from "@/data/types"
import { addExpense, getExpenses } from "@/services/firestore"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Timestamp } from "firebase/firestore"
import { createContext, useContext, useState } from "react"
import { toast } from "sonner"

const ExpenseContext = createContext({} as ExpenseContextType)

export const ExpenseProvider = ({children}:{children: React.ReactNode}) => {
  const queryClient = useQueryClient()
  const [filter, setFilter] = useState<string | undefined>(undefined)
  const [isOpen, setIsOpen] = useState(false)

  const { data: expensesList } = useQuery({
    queryKey: ["expensesList", filter],
    queryFn: () => getExpenses(filter !== undefined ? Number(filter): undefined),
  })

  const { mutateAsync: addExpenseFn } = useMutation({
    mutationKey: ["expensesList"],
    mutationFn: addExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expensesList", "recentExpenses"] })
      setIsOpen(false)
      toast.success("Despesa criada com sucesso!")
    },
    onError: () => toast.error("Ocorreu um erro ao adicionar essa despesa"),
  })

  const handleSetFilter = (value: string | undefined) => {
    if(value === "all"){
      setFilter(undefined)
    }else{
      setFilter(value)
    }
  }

  const addNewExpense = ({ data, date }: addNewExpenseType) => {
    const formatedCategory = Number(data.category)
    let formatedDate: Timestamp | undefined = undefined

    if (date) {
      formatedDate = Timestamp.fromDate(date)
    }

    const newExpense: Omit<ExpenseType, "id"> = {
      description: data.description,
      value: data.value,
      date: formatedDate,
      category: formatedCategory,
    }

    addExpenseFn(newExpense)
  }

  const value = {
    addNewExpense,
    expensesList,
    isOpen,
    setIsOpen,
    handleSetFilter,
    filter,
  }

  return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
}


export const useExpenseProvider = () => {
  const context = useContext(ExpenseContext)
  return {...context} 
}