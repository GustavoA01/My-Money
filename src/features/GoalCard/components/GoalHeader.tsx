"use client"
import { Button } from "@/components/ui/button"
import { CardHeader } from "@/components/ui/card"
import { Dialog } from "@/components/ui/dialog"
import { Pencil } from "lucide-react"
import { useState } from "react"
import { GoalForm } from "./GoalForm"
import { GoalType } from "@/data/types"

type GoalHeaderProps = Pick<GoalType, "goalName" | "goalMaxValue"> & {
  totalSpent: number
  isLimitExceeded: boolean
}

export const GoalHeader = ({
  goalName,
  totalSpent,
  goalMaxValue,
  isLimitExceeded,
}: GoalHeaderProps) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <CardHeader>
        <div className="flex justify-between">
          <h2>{goalName}</h2>
          <Button
            onClick={() => setOpenModal(true)}
            variant="ghost"
            className="p-4"
          >
            <Pencil size={24} />
          </Button>
        </div>
        <div>
          <span
            className={`font-semibold ${
              isLimitExceeded ? "text-red-400" : "text-yellow-200"
            }`}
          >
            R$ {totalSpent?.toFixed(2).replace(".", ",")}
          </span>
          <span className="text-zinc-400">
            {" "}
            / R$ {goalMaxValue?.toFixed(2).replace(".", ",")}
          </span>
        </div>
      </CardHeader>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <GoalForm />
      </Dialog>
    </>
  )
}
