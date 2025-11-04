import { useFormContext } from "react-hook-form"
import { ControllerCategory } from "../components/ControllerCategory"
import { ExpenseDate } from "../components/ExpenseDate"
import { FormFooter } from "../components/FormFooter"
import { InputsForm } from "../components/InputsForm"
import { FormExpenseType } from "@/data/schemas"

type FormProps = {
  onSubmit: (data: Omit<FormExpenseType, "date">) => void
  date: Date | null
  setDate: (date: Date | null) => void
}

export const ExpenseForm = ({ onSubmit, date, setDate }: FormProps) => {
  const { handleSubmit } = useFormContext<FormExpenseType>()
 
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputsForm />
      <ExpenseDate date={date} setDate={setDate} />
      <ControllerCategory/>
      <FormFooter />
    </form>
  )
}
