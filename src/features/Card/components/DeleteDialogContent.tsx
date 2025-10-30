import { Button } from "@/components/ui/button"
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog"
import { useExpenseProvider } from "@/contexts/ExpenseProvider"

export const DeleteDialogContent = ({id}:{id:string}) => {
  const { deleteExpenseFn } = useExpenseProvider()
  return (
    <DialogContent>
      <DialogTitle>Excluir despesa</DialogTitle>
      <DialogDescription>
        Tem certeza que deseja excluir esta despesa?
      </DialogDescription>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancelar</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant="destructive" onClick={() => deleteExpenseFn(id)}>Excluir</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  )
}
