import { Button } from "@/components/ui/button"
import { DialogClose, DialogFooter } from "@/components/ui/dialog"

export const FormFooter = () => (
  <DialogFooter className="flex justify-between">
    <DialogClose asChild>
      <Button variant="outline">Cancelar</Button>
    </DialogClose>

    <Button className="hover:bg-primary-blue hover:text-white" type="submit">
      Salvar
    </Button>
  </DialogFooter>
)
