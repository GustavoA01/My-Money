import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreVertical } from "lucide-react"
import { useState } from "react"
import { DeleteDialogContent } from "./DeleteDialogContent"
import { ExpenseFormModal } from "@/features/ExpenseForm/container/ExpenseFormModal"

export const MenuActions = ({ id }: { id: string }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="hover:bg-gray-800 p-1 transition duration-150 ease-in-out rounded">
          <MoreVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup className="space-y-1">
            <DropdownMenuItem onClick={() => setIsEditOpen(true)}>
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setIsDeleteOpen(true)}>
              Excluir
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <DeleteDialogContent id={id} />
      </Dialog>

      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent>
          <ExpenseFormModal id={id} />
        </DialogContent>
      </Dialog>
    </>
  )
}
