"use client"
import { DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormGoalType, GoalSchema } from "@/data/schemas"
import { ControllerCategory } from "@/features/ExpenseForm/components/ControllerCategory"
import { ErrorMessage } from "@/features/ExpenseForm/components/ErrorMessage"
import { ExpenseDate } from "@/features/ExpenseForm/components/ExpenseDate"
import { FormFooter } from "@/features/ExpenseForm/components/FormFooter"
import { useGoals } from "@/hooks/useGoals"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"

export const GoalForm = () => {
  const [date, setDate] = useState<Date | null>(null)
  const [dateErrorMessage, setDateErrorMessage] = useState<string | undefined>(
    undefined
  )
  const {formatGoals} = useGoals()
  const methods = useForm<FormGoalType>({
    resolver: zodResolver(GoalSchema),
    defaultValues: {
      category: "6",
    },
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods

  const handleAddGoal = (data: FormGoalType) => {
    if (!date) {
      setDateErrorMessage("A data limite é obrigatória")
      return
    }
    const newGoal = formatGoals(data, date)
  }

  return (
    <>
      <DialogContent>
        <DialogTitle>Criar Meta</DialogTitle>
        <form onSubmit={handleSubmit(handleAddGoal)} className="space-y-4">
          <FormProvider {...methods}>
            <div>
              <Label>Nome</Label>
              <Input
                placeholder="Ex: Viagem, Carro..."
                className="mb-4 mt-2"
                {...register("goalName")}
              />
              <ErrorMessage message={errors?.goalName?.message} />
            </div>

            <div>
              <Label>Valor máximo</Label>
              <Input
                type="number"
                placeholder="Ex: 500"
                className="mb-4 mt-2"
                {...register("goalMaxValue", {
                  setValueAs: (value: string) =>
                    value === "" ? 0 : parseFloat(value),
                })}
              />
              <ErrorMessage message={errors?.goalMaxValue?.message} />
            </div>

            <ExpenseDate date={date} setDate={setDate} label="Data limite" />
            <ErrorMessage
              message={dateErrorMessage}
            />

            <ControllerCategory<FormGoalType> />
            <FormFooter />
          </FormProvider>
        </form>
      </DialogContent>
    </>
  )
}
