"use client"
import { Button } from "@/components/ui/button"
import {
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { categories } from "../data/types"
import { toast } from "sonner"
import { FormReceiptType, receiptSchema } from "@/data/schemas"

export const AddExpenseModal = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormReceiptType>({
    resolver: zodResolver(receiptSchema),
    defaultValues: {
      category: "6",
      description: "",
      value: undefined,
      date: undefined,
    },
  })

  const handleData = (data: FormReceiptType) => {
    try {
      const formattedValue = Number(data.value)
      const formatedCategory = Number(data.category)

      const newReceipt = {
        description: data.description,
        value: formattedValue,
        date: data.date,
        category: formatedCategory,
      }

      toast.success("Despesa criada com sucesso!")
    } catch (error) {
      console.log(error)
      toast.error("Erro ao criar despesa")
    }
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Adicionar Despesa</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleData)} className="space-y-4">
        <label className="text-sm">Descrição</label>
        <Input
          className="mt-1"
          type="text"
          placeholder="Ex: Supermercado"
          {...register("description")}
        />

        {errors.description && (
          <p className="text-red-500 text-sm mt-[-3px]">
            {errors.description.message}
          </p>
        )}

        <label className="text-sm">Valor</label>
        <Input
          className="mt-1"
          type="number"
          placeholder="Ex: 100"
          {...register("value")}
        />

        {errors.value && (
          <p className="text-red-500 text-sm mt-[-3px]">
            {errors.value.message}
          </p>
        )}

        <label className="text-sm">Data</label>
        <Input className="mt-1" type="date" {...register("date")} />

        <Controller
          name="category"
          control={control}
          render={({ field: { name, onChange, value } }) => (
            <Select name={name} value={String(value)} onValueChange={onChange}>
              <SelectTrigger>
                <SelectValue defaultValue={"6"} placeholder="Outro" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categorias</SelectLabel>
                  {Object.entries(categories).map(([key, category]) => (
                    <SelectItem key={key} value={key}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />

        <DialogFooter className="flex justify-between">
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>

          <Button
            className="hover:bg-primary-blue hover:text-white"
            type="submit"
          >
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </>
  )
}
