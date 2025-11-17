import { Skeleton } from "@/components/ui/Skeleton"
import { useRecentsExpenses } from "@/hooks/useRecentExpenses"

export const SimpleCardsSkeleton = () => {
  const { isLoading } = useRecentsExpenses()

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col gap-3">
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} className="h-24 w-80 rounded-md" />
          ))}
        </div>
      ) : null}
    </>
  )
}
