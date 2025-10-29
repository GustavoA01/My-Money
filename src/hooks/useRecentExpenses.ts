import { getExpenses } from "@/services/firestore"
import { useQuery } from "@tanstack/react-query"

export const useRecentsExpenses = () => {
  const {data: recentExpenses} = useQuery({
    queryKey: ['recentExpenses'],
    queryFn: () => getExpenses(undefined)
  })

  return {
    recentExpenses
  }
}