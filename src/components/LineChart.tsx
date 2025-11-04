"use client"
import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { categoriesLabel, chartConfig } from "@/data/constants"
import { useExpenseProvider } from "@/contexts/ExpenseProvider"

export function LineChart() {
  const [timeRange, setTimeRange] = React.useState("90d")
  const { expensesList } = useExpenseProvider()
  const processedChartData = React.useMemo(() => {
    // Primeiro, filtre pela data (sua lógica original)
    const filteredExpenses =
      expensesList?.filter((item) => {
        const date = item.date?.toDate()
        if (!date) return false // Ignora itens sem data

        let daysToSubtract = 90
        if (timeRange === "30d") {
          daysToSubtract = 30
        } else if (timeRange === "7d") {
          daysToSubtract = 7
        }

        const startDate = new Date()
        startDate.setDate(startDate.getDate() - daysToSubtract)
        startDate.setHours(0, 0, 0, 0) // Zera a hora para uma comparação justa

        return date >= startDate
      }) || [] // Garante que é um array

    // 3. Agregue os dados por dia e categoria
    const aggregatedData = filteredExpenses.reduce((acc, expense) => {
      // Use YYYY-MM-DD como chave para facilitar a ordenação
      const dateKey = expense?.date?.toDate().toISOString().split("T")[0]

      // Use seu map de categorias para obter o nome
      const categoryName = categoriesLabel[expense.category]

      // Se a data ainda não existe no acumulador, crie-a
      if (!acc[dateKey]) {
        acc[dateKey] = {
          date: dateKey, // O 'XAxis' usa isso
        }
      }

      // Se a categoria ainda não existe para esta data, inicie-a
      if (!acc[dateKey][categoryName]) {
        acc[dateKey][categoryName] = 0
      }

      // Some o valor
      acc[dateKey][categoryName] += expense.value

      return acc
    }, {}) // O acumulador é um objeto

    // 4. Converta o objeto agregado em um array e ordene por data
    const chartData = Object.values(aggregatedData).sort((a, b) =>
      a.date.localeCompare(b.date)
    )

    return chartData
  }, [expensesList, timeRange])

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Gráfico de linha</CardTitle>
          <CardDescription>
            Todos os seus gastos nos últimos 3 meses
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-40 rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder=" Últimos 3 meses" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Últimos 3 meses
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Últimos 30 dias
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Últimos 7 dias
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={processedChartData}>
            <defs>
              <linearGradient id="fillAlimentacao" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-alimentacao)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-alimentacao)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillTransporte" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-transporte)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-transporte)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillLazer" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-lazer)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-lazer)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillContas" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-contas)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-contas)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillSaude" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-saude)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-saude)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillCompras" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-compras)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-compras)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillOutro" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-outro)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-outro)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="Alimentação"
              type="natural"
              fill="url(#fillalimentacao)"
              stroke="var(--color-alimentacao)"
              stackId="alimentacao"
            />
            <Area
              dataKey="Transporte"
              type="natural"
              fill="url(#filltransporte)"
              stroke="var(--color-transporte)"
              stackId="transporte"
            />
            <Area
              dataKey="Lazer"
              type="natural"
              fill="url(#filllazer)"
              stroke="var(--color-lazer)"
              stackId="lazer"
            />
            <Area
              dataKey="Contas"
              type="natural"
              fill="url(#fillcontas)"
              stroke="var(--color-contas)"
              stackId="contas"
            />
            <Area
              dataKey="Saúde"
              type="natural"
              fill="url(#fillsaude)"
              stroke="var(--color-saude)"
              stackId="saude"
            />
            <Area
              dataKey="Compras"
              type="natural"
              fill="url(#fillcompras)"
              stroke="var(--color-compras)"
              stackId="compras"
            />
            <Area
              dataKey="Outros"
              type="natural"
              fill="url(#filloutro)"
              stroke="var(--color-outro)"
              stackId="outro"
            />
            <ChartLegend
              content={<ChartLegendContent payload={chartConfig} />}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
