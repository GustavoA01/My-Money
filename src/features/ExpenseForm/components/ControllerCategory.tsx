import { FormExpenseType } from "@/data/schemas"
import { Control, Controller } from "react-hook-form"
import { SelectCategory } from "./SelectCategory"

export const ControllerCategory = ({
  control,
}: {
  control: Control<FormExpenseType>
}) => {
  return (
    <Controller
      name="category"
      control={control}
      render={({ field: { name, onChange, value } }) => (
        <SelectCategory
          defaultValue="6"
          name={name}
          onValueChange={onChange}
          value={value}
        />
      )}
    />
  )
}
