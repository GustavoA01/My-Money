export type ReceiptType = {
  id: string
  description: string
  value: number
  date: string
  category: number
}

export const categories: Record<number, string> = {
  0: "Alimentação",
  1: "Transporte",
  2: "Lazer",
  3: "Conta",
  4: "Saúde",
  5: "Compras",
  6: "Outro",
}


