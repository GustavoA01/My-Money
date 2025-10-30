'use client'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ExpenseFormModal } from "./ExpenseFormModal"
import { useExpenseProvider } from "@/contexts/ExpenseProvider"

export const AddButton = () => {
  const { isOpen, setIsOpen } = useExpenseProvider()
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button asChild>
          <span>Adicionar</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <ExpenseFormModal />
      </DialogContent>
    </Dialog>
  )
}
