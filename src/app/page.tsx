import { SimpleCardsList } from "@/features/Card/container/SimpleCardsList"
import { PieChartComponent } from "@/components/PieChart"
import { AddButton } from "@/components/AddButton"

const Home = () => {
  return (
    <div>
      <div className="mb-4">
        <AddButton />
      </div>
      <div className="max-md:flex-col flex gap-4 ">
        <div className="w-full mb-4">
          <PieChartComponent />
        </div>
        <SimpleCardsList />
      </div>
    </div>
  )
}

export default Home
