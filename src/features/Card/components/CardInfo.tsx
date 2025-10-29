import { CardContent } from "@/components/ui/card"

type CardInfoProps = {
  category: string
  value: number
  date: string
}

export const CardInfo = ({ category, value, date }: CardInfoProps) => (
  <CardContent className="flex flex-col gap-2">
    <div className="text-sm text-gray-500">{category}</div>
    <div className="flex justify-between">
      <div className="text-sm text-green-600">R$ {value.toFixed(2)}</div>
      <div className="text-sm text-gray-500">{date}</div>
    </div>
  </CardContent>
)
