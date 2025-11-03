import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ExpenseFormModal } from "../features/ExpenseForm/container/ExpenseFormModal"
import { SimpleCardsList } from "@/features/Card/container/SimpleCardsList"

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
      <SimpleCardsList />
    </div>
  )
}

export default Home