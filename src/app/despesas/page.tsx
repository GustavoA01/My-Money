import { CardsList } from "@/features/Card/container/CardsList"
import { FilterByCategory } from "@/components/FilterByCategory"
import { AddButton } from "@/components/AddButton"
import { SearchInput } from "@/components/SearchInput"
import { ChartBar } from "@/components/ChartBar"
import { OrderBySelect } from "@/components/OrderBySelect"

const Page = () => {
  return (
    <div>
      <ChartBar/>
      <div className="my-4 w-full flex justify-end gap-4">
        <SearchInput />
        <OrderBySelect />
        <FilterByCategory />
        <AddButton />
      </div>
      <div className="space-y-2 space-x-2 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CardsList />
      </div>
    </div>
  )
}

export default Page
