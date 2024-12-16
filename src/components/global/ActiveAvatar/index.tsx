import { cn } from "@/lib/utils"
import { Avatar, AvatarProps } from "@nextui-org/react"
import React from "react"

type Props = {
  src?: string
  isActive?: boolean
} & AvatarProps

export default function ActiveAvatar({
  src,
  isActive,
  className,
  ...props
}: Props) {
  return (
    <div className={cn("relative", className)}>
      <Avatar src={src} {...props} />
      {isActive && (
        <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-[#36393f]" />
      )}
    </div>
  )
}
