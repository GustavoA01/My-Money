'use client'
import { SimpleCard } from "../components/SimpleCard"
import { useRecentsExpenses } from "@/hooks/useRecentExpenses"

export const SimpleCardsList = () => {
  const { recentExpenses } = useRecentsExpenses()

  return (
    <>
      {recentExpenses !== undefined && recentExpenses.length > 0 ? (
        <div className="flex flex-col gap-3 ml-auto">
          {recentExpenses.map((expense) => (
            <SimpleCard
              key={expense.id}
              description={expense.description}
              value={expense.value}
            />
          ))}
        </div>
      ) : (
        <div>Nenhuma despesa cadastrada</div>
      )}
    </>
  )
}
