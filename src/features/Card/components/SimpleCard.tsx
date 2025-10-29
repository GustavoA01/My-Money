import { Card, CardContent } from "../../../components/ui/card"

type SimpleCardProps = {
  description: string
  value: number
}

export const SimpleCard = ({ description, value }: SimpleCardProps) => {
  return (
    <Card className="w-80 bg-zinc-900">
      <CardContent className="flex justify-between">
        <h2>{description}</h2>
        <p className="text-green-300">
          R$ {value.toFixed(2).replace(".", ",")}
        </p>
      </CardContent>
    </Card>
  )
}
