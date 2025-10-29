import { PieChartComponent } from "@/components/PieChart"
import { DialogForm } from "@/features/ExpenseForm/container/DialogForm"
import { CardsList } from "@/features/Card/container/CardsList"
import { FilterByCategory } from "@/components/FilterByCategory"

export default async function Page() {
  return (
    <div>
      <h1 className="text-3xl mb-4 font-montserrat">Minhas Despesas</h1>
      <PieChartComponent />
      <div className="my-4 w-full flex justify-end gap-4">
        <FilterByCategory />
        <DialogForm />
      </div>
      <div className="flex gap-2 space-y-4 ">
        <CardsList />
      </div>
    </div>
  )
}
