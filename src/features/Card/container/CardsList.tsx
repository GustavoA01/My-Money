'use client'
import { useExpenseProvider } from "@/contexts/ExpenseProvider"
import { ExpenseCard } from "../components/ExpenseCard"
import { format } from "date-fns"
import { categories } from "@/data/types"

export const CardsList = () => {
  const { expensesList } = useExpenseProvider()

  return (
    <>
      {expensesList !== undefined && expensesList.length > 0 ? (
        <>
          {expensesList.map(expense => {
            let date: string | undefined = ""
            if(expense.date) date = format(expense.date.toDate(), "dd/MM/yyyy")
            const category = categories[expense.category]

            return (
              <ExpenseCard
                key={expense.id}
                id={expense.id}
                description={expense.description}
                value={expense.value}
                category={category}
                date={date}
              />
            )
          })}
        </>
      ) : (
        <div>Nenhuma despesa cadastrada</div>
      )}
    </>
  )
}