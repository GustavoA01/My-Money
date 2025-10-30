import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { categories } from "@/data/types"

type SelectProps = {
  name: string
  value: string | undefined
  onValueChange: (value: string) => void
}

export const SelectCategory = ({ name, value, onValueChange }: SelectProps) => (
  <Select name={name} value={value} onValueChange={onValueChange}>
    <SelectTrigger>
      <SelectValue placeholder={value === "6" ? "Outro" : "Selecione uma categoria"} />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Categorias</SelectLabel>
        {Object.entries(categories).map(([key, category]) => (
          <SelectItem key={key} value={key}>
            {category}
          </SelectItem>
        ))}
        {value !== "6" && (
          <SelectItem key="undefined" value={"all"}>
            Todas
          </SelectItem>
        )}
      </SelectGroup>
    </SelectContent>
  </Select>
)
