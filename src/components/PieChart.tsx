"use client"
import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer, ChartLegend } from "@/components/ui/chart"
import { chartConfig } from "@/data/constants"
import { useExpenseProvider } from "@/contexts/ExpenseProvider"
import { endOfMonth, format } from "date-fns"

export const description = "A pie chart with a legend"

export function PieChartComponent() {
  const { expensesList } = useExpenseProvider()
  const totalValues = []
  const currentMonth = new Date().getMonth()
  const longMonth = new Date().toLocaleString("pt-BR", { month: "long" })

  for (let i = 0; i < 7; i++) {
    const total = expensesList?.reduce((acc, expense) => {
      const expenseMonth = expense.date?.toDate().getMonth()
      if (expense.category === i && expenseMonth === currentMonth) {
        return acc + expense.value
      }
      return acc
    }, 0)
    totalValues.push(total)
  }

  const chartData = [
    {
      category: "alimentacao",
      expense: totalValues[0],
      fill: "var(--color-alimentacao)",
    },
    {
      category: "transporte",
      expense: totalValues[1],
      fill: "var(--color-transporte)",
    },
    { category: "lazer", expense: totalValues[2], fill: "var(--color-lazer)" },
    {
      category: "contas",
      expense: totalValues[3],
      fill: "var(--color-contas)",
    },
    { category: "saude", expense: totalValues[4], fill: "var(--color-saude)" },
    {
      category: "compras",
      expense: totalValues[5],
      fill: "var(--color-compras)",
    },
    { category: "outro", expense: totalValues[6], fill: "var(--color-outro)" },
  ]

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gastos no mês</CardTitle>
        <CardDescription>
          1 de {longMonth} - {format(endOfMonth(new Date()), "d")} de{" "}
          {longMonth}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="expense" nameKey="category" />
            <ChartLegend className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
