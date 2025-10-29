import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { MoreVertical } from "lucide-react"

export const MenuActions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:bg-gray-800 p-1 transition duration-150 ease-in-out rounded">
        <MoreVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup className="space-y-1">
          <DropdownMenuItem>Editar</DropdownMenuItem>
          <Separator />
          <DropdownMenuItem>Excluir</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
