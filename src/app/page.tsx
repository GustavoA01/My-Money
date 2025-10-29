import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { AddExpenseModal } from "../features/ExpenseForm/container/AddExpenseModal"
import { SimpleCardsList } from "@/features/Card/container/SimpleCardsList"

export default function Home() {
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
            <AddExpenseModal />
          </DialogContent>
        </Dialog>
      </div>
      <SimpleCardsList />
    </div>
  )
}
