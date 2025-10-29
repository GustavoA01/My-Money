import React from "react"
import { Card, CardHeader, CardTitle } from "../../../components/ui/card"
import { MenuActions } from "./MenuActions"
import { CardInfo } from "./CardInfo"

type ExpenseCardProps = {
  description: string
  value: number
  category: string
  date: string
}

export const ExpenseCard = ({
  description,
  value,
  category,
  date,
}: ExpenseCardProps) => {
  return (
    <Card className="w-70 max-h-37">
      <CardHeader className="flex justify-between">
        <CardTitle>{description}</CardTitle>
        <MenuActions />
      </CardHeader>

      <CardInfo category={category} value={value} date={date} />
    </Card>
  )
}
