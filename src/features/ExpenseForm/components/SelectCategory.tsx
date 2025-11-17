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

type SelectCAProps = {
  name: string
  value: string | undefined
  onValueChange: (value: string) => void
  defaultValue?: string
}

export const SelectCategory = ({ name, value, onValueChange, defaultValue }: SelectCAProps) => (
  <Select name={name} value={value} onValueChange={onValueChange} >
    <SelectTrigger>
      <SelectValue
        placeholder={defaultValue === "6" ? "Outro" : "Selecione uma categoria"}
      />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Categorias</SelectLabel>
        {defaultValue !== "6" && <SelectItem value={"all"}>Todas</SelectItem>}
        {categoriesLabel.map((category, index) => (
          <SelectItem key={category} value={String(index)}>
            {category}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
)
