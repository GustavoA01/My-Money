'use client'
import { useGoals } from "@/hooks/useGoals"
import { GoalCard } from "./GoalCard"

export const GoalsList = () => {
  const { goals } = useGoals()

  return (
    <>
      {goals?.map((goal) => (
        <GoalCard
          key={goal.id}
          dateLimit={goal.dateLimit}
          category={goal.category}
          goalName={goal.goalName}
          goalMaxValue={goal.goalMaxValue}
        />
      ))}
    </>
  )
}
