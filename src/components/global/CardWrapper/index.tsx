import { cn } from "@/lib/utils"
import { Card, CardProps } from "@nextui-org/card"
import React from "react"

type Props = {} & CardProps

export default function CardWrapper({ className, ...props }: Props) {
  return <Card className={cn("w-[25rem] p-2 mx-auto", className)} {...props} />
}
