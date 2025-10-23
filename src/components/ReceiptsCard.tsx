import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import { MoreVertical } from "lucide-react"
import { Separator } from "@/components/ui/separator"

interface ReceiptCardProps {
  title: string
  value: number
  category: string
  date: string
}

export const ReceiptCard = ({
  title,
  value,
  category,
  date,
}: ReceiptCardProps) => {
  return (
    <Card className="w-70 max-h-37">
      <CardHeader className="flex justify-between">
        <CardTitle>{title}</CardTitle>
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
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <div className="text-sm text-gray-500">{category}</div>
        <div className="flex justify-between">
          <div className="text-sm text-green-600">R$ {value.toFixed(2)}</div>
          <div className="text-sm text-gray-500">{date}</div>
        </div>
      </CardContent>
    </Card>
  )
}
