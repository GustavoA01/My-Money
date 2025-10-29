import { ChartConfig } from "@/components/ui/chart";

export const chartConfig = {
  expense: {
    label: "Gasto",
  },
  alimentacao: {
    label: "Alimentação",
    color: "#89CFF0",
  },
  transporte: {
    label: "Transporte",
    color: "#6495ED",
  },
  lazer: {
    label: "Lazer",
    color: "#4169E1",
  },
  contas: {
    label: "Contas",
    color: "#1F45FC",
  },
  saude: {
    label: "Saúde",
    color: "green",
  },
  compras: {
    label: "Compras",
    color: "#26be91",
  },
  outro: {
    label: "Outro",
    color: "gray",
  },
} satisfies ChartConfig