import { FormExpenseType } from "@/data/schemas"
import { Controller, useFormContext } from "react-hook-form"
import { SelectCategory } from "./SelectCategory"

export const ControllerCategory = () => {
  const { control } = useFormContext<FormExpenseType>()
  
  return (
    <Controller
      name="category"
      control={control}
      render={({ field: { name, onChange, value } }) => (
        <SelectCategory
          name={name}
          onValueChange={onChange}
          value={value}
        />
      )}
    />
  )
}
