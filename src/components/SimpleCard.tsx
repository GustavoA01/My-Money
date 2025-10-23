import { Card, CardContent } from "./ui/card"

export const SimpleCard = () => {
  return (
    <Card className="w-80 bg-zinc-900">
      <CardContent className="flex justify-between">
        <h2>Supermercado</h2>
        <p className="text-green-300">R$ 150,00</p>
      </CardContent>
    </Card>
  )
}
