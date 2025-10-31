import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { categoriesLabel } from "@/data/constants"

type SelectProps = {
  name: string
  value: string | undefined
  onValueChange: (value: string) => void
}

export const SelectCategory = ({ name, value, onValueChange }: SelectProps) => (
  <Select name={name} value={value} onValueChange={onValueChange}>
    <SelectTrigger>
      <SelectValue
        placeholder={value === "6" ? "Outro" : "Selecione uma categoria"}
      />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Categorias</SelectLabel>
        {categoriesLabel.map((category, index) => (
          <SelectItem key={category} value={String(index)}>
            {category}
          </SelectItem>
        ))}
        {value !== "6" && <SelectItem value={"all"}>Todas</SelectItem>}
      </SelectGroup>
    </SelectContent>
  </Select>
)
