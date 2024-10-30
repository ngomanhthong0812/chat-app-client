import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[#47484b] bg-opacity-55", className)}
      {...props}
    />
  )
}

export { Skeleton }
