import { Controller, Path, useFormContext } from "react-hook-form"
import { SelectCategory } from "./SelectCategory"

type minimumType = {
  category: string
}

export const ControllerCategory = <T extends minimumType>() => {
  const { control } = useFormContext<T>()
  
  return (
    <Controller
      name={"category" as Path<T> }
      control={control}
      render={({ field: { name, onChange, value } }) => (
        <SelectCategory
          name={name}
          onValueChange={onChange}
          value={value}
          defaultValue="6"
        />
      )}
    />
  )
}
