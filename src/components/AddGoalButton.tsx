'use client'
import { GoalForm } from "@/features/GoalCard/components/GoalForm"
import { Button } from "./ui/button"
import { Dialog } from "./ui/dialog"
import { useState } from "react";

export const AddGoalButton = () => {
  const [openModal,setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={()=> setOpenModal(true)}>
        Adicionar Meta
      </Button>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <GoalForm/>
      </Dialog>
    </>
  )
}