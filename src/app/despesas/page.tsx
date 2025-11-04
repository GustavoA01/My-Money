import { CardsList } from "@/features/Card/container/CardsList"
import { FilterByCategory } from "@/components/FilterByCategory"
import { AddButton } from "@/components/AddButton"
import { SearchInput } from "@/components/SearchInput"
import { LineChart } from "@/components/LineChart"
import { OrderBySelect } from "@/components/OrderBySelect"

const Page = () => {
  return (
    <div>
      <LineChart/>
      <div className="my-4 w-full flex justify-end gap-4">
        <SearchInput />
        <OrderBySelect />
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
