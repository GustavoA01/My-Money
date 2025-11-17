import { ExpenseType, GoalType } from "@/data/types"
import { Card } from "../../../components/ui/card"
import { Progress } from "../../../components/ui/progress"
import { GoalFooter } from "../components/GoalFooter"
import { GoalHeader } from "../components/GoalHeader"
import { useExpenseProvider } from "@/contexts/ExpenseProvider"
import { useMemo } from "react"

export const GoalCard = ({
  goalName,
  goalMaxValue,
  category,
  dateLimit,
}: Omit<GoalType, "id">) => {
  const { expensesList } = useExpenseProvider()
  const totalSpent = useMemo(() => {
    if (!expensesList) return 0

    return expensesList.reduce((acc, ex: ExpenseType) => {
      if (
        ex.category === category &&
        ex.date &&
        ex.date?.toDate() <= dateLimit.toDate()
      ) {
        return acc + ex.value
      }
      return acc
    }, 0)
  }, [expensesList, category, dateLimit])

  const progress = totalSpent !== 0 ? (totalSpent / goalMaxValue) * 100 : 0

  const isLimitExceeded = progress >= 100

  return (
    <Card className="w-100 bg-zinc-800">
      <GoalHeader
        isLimitExceeded={isLimitExceeded}
        goalName={goalName}
        totalSpent={totalSpent}
        goalMaxValue={goalMaxValue}
      />
      <div className="px-4">
        <Progress
          barColor={isLimitExceeded ? "bg-red-400" : "bg-yellow-200"}
          value={progress}
        />
      </div>
      <GoalFooter category={category} dateLimit={dateLimit} />
    </Card>
  )
}
