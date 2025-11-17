import z from "zod"

export const ExpenseSchema = z.object({
  description: z.string().min(0.1, { message: "A descrição é obrigatória" }),
  value: z.coerce.number().min(1,{message: "O valor é obrigatório"}),
  category: z.string(),
})

export type FormExpenseType = z.infer<typeof ExpenseSchema>

export const GoalSchema = z.object({
  goalName: z.string().min(0.1, { message: "O nome da descrição é obrigatório" }),
  goalMaxValue: z.number({error: "O valor deve ser um número"})
                  .min(50, { message: "O valor máximo deve ser maior que cinquenta" }),
  category: z.string(),
})

export type FormGoalType = z.infer<typeof GoalSchema>