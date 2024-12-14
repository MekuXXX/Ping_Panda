import { cn } from "@/lib/utils"
import React, { HTMLAttributes } from "react"

type Props = {} & HTMLAttributes<HTMLHeadingElement>

export default function Heading({ className, ...props }: Props) {
  return (
    <h1
      className={cn(
        "text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tight text-zinc-800",
        className
      )}
      {...props}
    />
  )
}
