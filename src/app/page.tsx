import { SimpleCard } from "@/components/SimpleCard"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { AddExpenseModal } from "../components/AddExpenseModal"

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
      <SimpleCard />
    </div>
  )
}
