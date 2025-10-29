'use client'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { AddExpenseModal } from "./AddExpenseModal"
import { useExpenseProvider } from "@/contexts/ExpenseProvider"


export const DialogForm = () => {
  const { isOpen, setIsOpen } = useExpenseProvider()
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button asChild>
          <span>Adicionar</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <AddExpenseModal />
      </DialogContent>
    </Dialog>
  )
}
