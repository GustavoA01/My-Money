import { CardFooter } from "@/components/ui/card"
import { categoriesLabel } from "@/data/constants"
import { GoalType } from "@/data/types"
import { format } from "date-fns"
import { Calendar } from "lucide-react"

export const GoalFooter = ({category, dateLimit}:Pick<GoalType, "category" | "dateLimit">) => {
  return (
    <CardFooter className="flex justify-between">
      <p>{categoriesLabel[category]}</p>
      <div className="flex gap-2">
        <Calendar size={18} />
        <p>{format(dateLimit.toDate(),"dd/MM/yyyy")}</p>
      </div>
    </CardFooter>
  )
}
