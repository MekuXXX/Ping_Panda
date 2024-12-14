import { cn } from "@/lib/utils"
import React, { HTMLAttributes } from "react"

type Props = {} & HTMLAttributes<HTMLDivElement>

export default function MaxWidthWrapper({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        "h-full w-full mx-auto max-w-screen-xl px-2.5 md:px-20",
        className
      )}
      {...props}
    />
  )
}
