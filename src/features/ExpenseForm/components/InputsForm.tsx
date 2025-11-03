import { Input } from "@/components/ui/input"
import { ErrorMessage } from "./ErrorMessage"
import { useFormContext } from "react-hook-form"
import { FormExpenseType } from "@/data/schemas"

export const InputsForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormExpenseType>()

  return (
    <>
      <label className="text-sm">Descrição</label>
      <Input
        className="mt-1"
        type="text"
        placeholder="Ex: Supermercado"
        {...register("description")}
      />
      <ErrorMessage message={errors?.description?.message} />

      <label className="text-sm">Valor</label>
      <Input
        className="mt-1"
        type="number"
        step="0.01"
        placeholder="Ex: 100"
        {...register("value", {
          setValueAs: (value: string) => (value === "" ? 0 : parseFloat(value)),
        })}
      />
      <ErrorMessage message={errors?.value?.message} />
    </>
  )
}
