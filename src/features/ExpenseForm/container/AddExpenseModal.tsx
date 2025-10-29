"use client"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FormExpenseType, ExpenseSchema } from "@/data/schemas"
import { InputsForm } from "../components/InputsForm"
import { ControllerCategory } from "../components/ControllerCategory"
import { FormFooter } from "../components/FormFooter"
import { useState } from "react"
import { ExpenseDate } from "../components/ExpenseDate"
import { useExpenseProvider } from "@/contexts/ExpenseProvider"

export const AddExpenseModal = () => {
  const {addNewExpense} = useExpenseProvider()
  const [date, setDate] = useState<Date | undefined>(undefined)

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormExpenseType>({
    resolver: zodResolver(ExpenseSchema),
    defaultValues: {
      category: "6",
      description: "",
      value: undefined,
    },
  })

  const handleData = (data: Omit<FormExpenseType, "date">) => {
    addNewExpense({data,date})
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Adicionar Despesa</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleData)} className="space-y-4">
        <InputsForm register={register} errors={errors} />
        <ExpenseDate date={date} setDate={setDate} />
        <ControllerCategory control={control} />
        <FormFooter />
      </form>
    </>
  )
}
