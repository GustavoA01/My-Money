import {
  EditExpenseType,
  ExpenseContextType,
  ExpenseType,
  FormatExpenseType,
} from "@/data/types"
import {
  addExpense,
  deleteExpense,
  editExpense,
  getExpenses,
} from "@/services/firestore"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Timestamp } from "firebase/firestore"
import { createContext, useContext, useState } from "react"
import { toast } from "sonner"

const ExpenseContext = createContext({} as ExpenseContextType)

export const ExpenseProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const queryClient = useQueryClient()
  const [filter, setFilter] = useState<string | undefined>(undefined)
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined)
  const [isOpen, setIsOpen] = useState(false)

  const { data: expensesList } = useQuery({
    queryKey: ["expensesList", filter, searchQuery],
    queryFn: () =>
      getExpenses({
        categoryFilter: filter ? Number(filter) : undefined,
        searchQuery
      }),
  })

  const { mutateAsync: addExpenseFn } = useMutation({
    mutationKey: ["expensesList"],
    mutationFn: addExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expensesList"] })
      queryClient.invalidateQueries({ queryKey: ["recentExpenses"] })
      setIsOpen(false)
      toast.success("Despesa criada com sucesso!")
    },
    onError: () => toast.error("Ocorreu um erro ao adicionar essa despesa"),
  })

  const { mutateAsync: deleteExpenseFn } = useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expensesList"] })
      queryClient.invalidateQueries({ queryKey: ["recentExpenses"] })
      toast.success("Despesa deletada com sucesso.")
    },
    onError: () => toast.error("Ocorreu um erro ao deletar essa despesa"),
  })

  const { mutateAsync: editExpenseFn } = useMutation({
    mutationFn: (params: EditExpenseType) =>
      editExpense(params.id, params.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expensesList"] })
      queryClient.invalidateQueries({ queryKey: ["recentExpenses"] })
      toast.success("Despesa editada com sucesso.")
    },
    onError: () => toast.error("Ocorreu um erro ao editar essa despesa"),
  })

  const handleSearch = (value: string) => {
    const query = value !== "" ? value : undefined
    setSearchQuery(query)
  }

  const handleSetFilter = (value: string | undefined) => {
    const filterQuery = value !== "all" ? value : undefined
    setFilter(filterQuery)
  }

  const formatExpense = ({
    data,
    date,
  }: FormatExpenseType): Omit<ExpenseType, "id"> => {
    const formatedCategory = data.category ? Number(data.category) : 6
    let formatedDate: Timestamp | undefined = undefined

    console.log(date)
    if (date) {
      formatedDate = Timestamp.fromDate(date)
    }
console.log(formatedDate)
    const newExpense: Omit<ExpenseType, "id"> = {
      description: data.description,
      value: data.value,
      date: formatedDate,
      category: formatedCategory,
    }

    return newExpense
  }

  const value = {
    expensesList,
    addExpenseFn,
    editExpenseFn,
    deleteExpenseFn,
    formatExpense,
    handleSearch,
    setSearchQuery,
    handleSetFilter,
    filter,
    isOpen,
    setIsOpen,
  }

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  )
}

export const useExpenseProvider = () => {
  const context = useContext(ExpenseContext)
  return { ...context }
}
