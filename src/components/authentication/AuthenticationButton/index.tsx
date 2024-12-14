import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@nextui-org/button"
import { Send } from "lucide-react"
import React from "react"

type Props = {
  isLoading: boolean
} & ButtonProps

export default function AuthenticationButton({
  isLoading,
  className,
  ...props
}: Props) {
  return (
    <Button
      type="submit"
      isLoading={isLoading}
      size="md"
      startContent={!isLoading && <Send className="h-4 w-4" />}
      className={cn("w-full bg-brand-700 text-white", className)}
      {...props}
    />
  )
}
