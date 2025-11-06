import { categoriesLabel } from "@/data/constants"
import { Card, CardContent } from "../../../components/ui/card"

type SimpleCardProps = {
  description: string
  value: number
  category: number
}

export const SimpleCard = ({
  description,
  value,
  category,
}: SimpleCardProps) => {
  return (
    <Card className="w-full md:w-80 bg-zinc-900">
      <CardContent className="flex justify-between">
        <div>
          <h2>{description}</h2>
          <p className="text-zinc-400 text-sm">{categoriesLabel[category]}</p>
        </div>
        <p className="text-green-300 flex items-center">
          R$ {value.toFixed(2).replace(".", ",")}
        </p>
      </CardContent>
    </Card>
  )
}
