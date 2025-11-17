"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useExpenseProvider } from "@/contexts/ExpenseProvider"
import { ExpenseFormModal } from "@/features/ExpenseForm/container/ExpenseFormModal"
import { Plus } from "lucide-react"

export const AddButton = () => {
  const { isOpen, setIsOpen } = useExpenseProvider()

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button onClick={() => setIsOpen(true)}>
        <div>
          <Plus className="md:hidden" />
          <span className="hidden md:block">Adicionar Despesa</span>
        </div>
      </Button>

      <DialogContent>
        <ExpenseFormModal />
      </DialogContent>
    </Dialog>
  )
}
