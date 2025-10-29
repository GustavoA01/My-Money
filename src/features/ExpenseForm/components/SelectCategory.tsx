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
  defaultValue: string | undefined
}

export const SelectCategory = ({ name, value, onValueChange, defaultValue }: SelectProps) => (
  <Select name={name} value={value} onValueChange={onValueChange}>
    <SelectTrigger>
      <SelectValue defaultValue={defaultValue} placeholder={defaultValue === "6" ? "Outro" : "Selecione uma categoria"} />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Categorias</SelectLabel>
        {Object.entries(categories).map(([key, category]) => (
          <SelectItem key={key} value={key}>
            {category}
          </SelectItem>
        ))}
        {defaultValue !== "6" && (
          <SelectItem key="undefined" value={"all"}>
            Todas
          </SelectItem>
        )}
      </SelectGroup>
    </SelectContent>
  </Select>
)
