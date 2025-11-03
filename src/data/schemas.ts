import z from "zod"

export const ExpenseSchema = z.object({
  description: z.string().min(0.1, { message: "A descrição é obrigatória" }),
  value: z.coerce.number().min(1,{message: "O valor é obrigatório"}),
  category: z.string(),
})

export type FormExpenseType = z.infer<typeof ExpenseSchema>