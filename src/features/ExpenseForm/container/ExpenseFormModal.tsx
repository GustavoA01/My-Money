"use client"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { FormExpenseType, ExpenseSchema } from "@/data/schemas"
import { useEffect, useState } from "react"
import { useExpenseProvider } from "@/contexts/ExpenseProvider"
import { ExpenseForm } from "./ExpenseForm"
import { getExpenseById } from "@/services/firestore"
import { useQuery } from "@tanstack/react-query"

export const ExpenseFormModal = ({ id }: { id?: string }) => {
  const isEditing = !!id
  const { addNewExpense } = useExpenseProvider()
  const [date, setDate] = useState<Date | undefined>(undefined)

  const methods = useForm<FormExpenseType>({
    resolver: zodResolver(ExpenseSchema),
    defaultValues: {
      category: "6",
      description: "",
      value: undefined,
    },
  })
  const { reset } = methods
  const { data: expenseToEdit } = useQuery({
    queryKey: ["expenseToEdit", id],
    queryFn: () => getExpenseById(id ?? ""),
    enabled: isEditing,
  })

  useEffect(() => {
    reset({
      description: expenseToEdit?.description,
      value: expenseToEdit?.value,
      category: String(expenseToEdit?.category),
    })

    if (expenseToEdit?.date) {
      setDate(expenseToEdit.date.toDate())
    }
  }, [expenseToEdit, id, reset])

  const handleAddExpense = (data: Omit<FormExpenseType, "date">) => {
    addNewExpense({ data, date })
  }

  const handleEditExpense = (data: Omit<FormExpenseType, "date">) => {}

  return (
    <>
      <DialogHeader>
        <DialogTitle>
          {isEditing ? "Editar Despesa" : "Adicionar Despesa"}
        </DialogTitle>
      </DialogHeader>
      <FormProvider {...methods}>
        <ExpenseForm
          onSubmit={isEditing ? handleEditExpense : handleAddExpense}
          date={date}
          setDate={setDate}
        />
      </FormProvider>
    </>
  )
}
