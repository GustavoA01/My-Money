"use client"
import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
} from "@/components/ui/chart"
import { chartConfig } from "@/data/constants"
import { useExpenseProvider } from "@/contexts/ExpenseProvider"

export const description = "A pie chart with a legend"

export function PieChartComponent() {
  const {expensesList} = useExpenseProvider()

  // const totalAlimentacao = expensesList?.reduce((acc, expense)=> {
  //   if(expense.category === 1){
  //     return acc + expense.value
  //   }
  // }, 0)
  
  const chartData = [
    { category: "alimentacao", expense: 450, fill: "var(--color-alimentacao)" },
    { category: "transporte", expense: 200, fill: "var(--color-transporte)" },
    { category: "lazer", expense: 300, fill: "var(--color-lazer)" },
    { category: "contas", expense: 250, fill: "var(--color-contas)" },
    { category: "saude", expense: 180, fill: "var(--color-saude)" },
    { category: "compras", expense: 220, fill: "var(--color-compras)" },
    { category: "outro", expense: 150, fill: "var(--color-outro)" },
  ]

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gastos no mês</CardTitle>
        <CardDescription>1 de Janeiro - 31 de Janeiro</CardDescription>
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
