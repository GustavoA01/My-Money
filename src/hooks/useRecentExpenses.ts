import { getExpenses } from "@/services/firestore/expenses"
import { useQuery } from "@tanstack/react-query"

export const useRecentsExpenses = () => {
  const {data: recentExpenses, isLoading} = useQuery({
    queryKey: ['recentExpenses'],
    queryFn: () => getExpenses({maxLimit: 4}),
  })

  return {
    recentExpenses,
    isLoading,
  }
}