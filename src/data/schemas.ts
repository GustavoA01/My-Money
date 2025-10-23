import z from "zod"

export const receiptSchema = z.object({
  description: z.string().min(1, { message: "A descrição é obrigatória" }),
  value: z.string().min(1, {message: "O valor é obrigatório"}),
  category: z.string(),
  date: z.string().optional(),
})

export type FormReceiptType = z.infer<typeof receiptSchema>