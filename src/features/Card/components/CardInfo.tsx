import { CardContent } from "@/components/ui/card"

type CardInfoProps = {
  category: string
  value: number
  date: string
}

export const CardInfo = ({ category, value, date }: CardInfoProps) => {
  const formattedValue = value.toFixed(2).replace(".", ",")
  return (
    <CardContent className="flex flex-col gap-2">
      <div className="text-sm text-gray-500">{category}</div>
      <div className="flex justify-between">
        <div className="text-sm text-green-600">R$ {formattedValue}</div>
        <div className="text-sm text-gray-500">{date}</div>
      </div>
    </CardContent>
  )
}
