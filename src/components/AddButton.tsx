"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useExpenseProvider } from "@/contexts/ExpenseProvider"
import { ExpenseFormModal } from "@/features/ExpenseForm/container/ExpenseFormModal"
import { Plus } from "lucide-react"

export const AddButton = () => {
  const { isOpen, setIsOpen } = useExpenseProvider()

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button asChild>
          <div>
            <Plus className="md:hidden" />
            <span className="hidden md:block">Adicionar</span>
          </div>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <ExpenseFormModal />
      </DialogContent>
    </Dialog>
  )
}
