import { PieChartComponent } from "@/components/PieChart"
import { AddButton } from "@/features/ExpenseForm/container/AddButton"
import { CardsList } from "@/features/Card/container/CardsList"
import { FilterByCategory } from "@/components/FilterByCategory"

export default async function Page() {
  return (
    <div>
      <h1 className="text-3xl mb-4 font-montserrat">Minhas Despesas</h1>
      <PieChartComponent />
      <div className="my-4 w-full flex justify-end gap-4">
        <FilterByCategory />
        <AddButton />
      </div>
      <div className="flex gap-2 flex-wrap">
        <CardsList />
      </div>
    </div>
  )
}
