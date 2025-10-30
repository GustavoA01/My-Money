import React from "react"
import { Card, CardHeader, CardTitle } from "../../../components/ui/card"
import { MenuActions } from "./MenuActions"
import { CardInfo } from "./CardInfo"

type ExpenseCardProps = {
  id: string
  description: string
  value: number
  category: string
  date: string
}

export const ExpenseCard = ({
  id,
  description,
  value,
  category,
  date,
}: ExpenseCardProps) => {
  return (
    <Card className="min-w-70 max-h-37">
      <CardHeader className="flex justify-between">
        <CardTitle>{description}</CardTitle>
        <MenuActions id={id}/>
      </CardHeader>

      <CardInfo category={category} value={value} date={date} />
    </Card>
  )
}
