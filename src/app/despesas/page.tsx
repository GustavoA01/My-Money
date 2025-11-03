import { PieChartComponent } from "@/components/PieChart"
import { CardsList } from "@/features/Card/container/CardsList"
import { FilterByCategory } from "@/components/FilterByCategory"
import { AddButton } from "@/components/AddButton"
import { SearchInput } from "@/components/SearchInput"

const Page = () => {
  return (
    <div>
      <h1 className="text-3xl mb-4 font-montserrat">Minhas Despesas</h1>
      <PieChartComponent />
      <div className="my-4 w-full flex justify-end gap-4">
        <SearchInput />
        <FilterByCategory />
        <AddButton />
      </div>
      <div className="flex gap-2 flex-wrap">
        <CardsList />
      </div>
    </div>
  )
}

export default Page
