import { SimpleCardsList } from "@/features/Card/container/SimpleCardsList"
import { PieChartComponent } from "@/components/PieChart"
import { AddButton } from "@/components/AddButton"
import { AddGoalButton } from "@/components/AddGoalButton"
import { GoalsList } from "@/features/GoalCard/container/GoalsList"

const Home = () => {
  return (
    <div>
      <div className="flex justify-end gap-4 mb-4">
        <AddGoalButton/>
        <AddButton />
      </div>
      <div className="max-md:flex-col flex gap-4 ">
        <div className="w-full mb-4">
          <PieChartComponent />
        </div>
        <SimpleCardsList />
      </div>
      <GoalsList/>
    </div>
  )
}

export default Home
