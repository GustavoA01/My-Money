import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ExpenseFormModal } from "../features/ExpenseForm/container/ExpenseFormModal"
import { SimpleCardsList } from "@/features/Card/container/SimpleCardsList"
import { PieChartComponent } from "@/components/PieChart"

const Home = () => {
  return (
    <div>
      <div className="mb-4">
        <Dialog>
          <DialogTrigger>
            <Button asChild>
              <span>Adicionar</span>
            </Button>
          </DialogTrigger>

          <DialogContent>
            <ExpenseFormModal />
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex gap-4">
        <div className="w-full">
          <PieChartComponent />
        </div>
        <SimpleCardsList />
      </div>
    </div>
  )
}

export default Home
