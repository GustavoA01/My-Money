import { FormGoalType } from "@/data/schemas"
import { GoalType } from "@/data/types"
import { createGoal, getGoals } from "@/services/firestore/goals"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Timestamp } from "firebase/firestore"
import { toast } from "sonner"

export const useGoals = () => {
  const queryCLient = useQueryClient()

  const {data: goals} = useQuery({
    queryKey:['goals'],
    queryFn: getGoals,
  })

  const {mutateAsync: createGoalFn} = useMutation({
    mutationKey: ['goals'],
    mutationFn: createGoal,
    onSuccess: () => {
      queryCLient.invalidateQueries({queryKey: ['goals']})
    },
    onError: ()=> toast.error("Ocorreu um erro")
  })

  const formatGoals = (data: FormGoalType, date: Date) => {
    const formattedCategory = Number(data.category)

    const newGoal: Omit<GoalType, "id"> = {
      ...data,
      category: formattedCategory,
      dateLimit: Timestamp.fromDate(date),
    }

    createGoalFn(newGoal)
  }

  return {
    formatGoals,
    goals
  }
}
