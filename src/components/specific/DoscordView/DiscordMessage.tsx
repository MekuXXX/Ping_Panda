import { formatDate } from "@/lib/date"
import { cn } from "@/lib/utils"
import { Avatar } from "@nextui-org/react"
import { Clock } from "lucide-react"
import React from "react"

type BadgeColor = "#43b581" | "#faa61a"

type Props = {
  avatarSrc: string
  avatarAlt: string
  username: string
  timestamp: Date
  title: string
  tag?: string
  badgeText?: string
  badgeColor?: BadgeColor
  content: {
    [key: string]: string
  }
}

function getBadgeColor(badgeColor: BadgeColor) {
  switch (badgeColor) {
    case "#43b581":
      return "bg-green-500/10 text-green-400 ring-green-500/20"
    case "#faa61a":
      return "bg-yellow-500/10 text-yellow-400 ring-yellow-500/20"
    default:
      return "bg-gray-500/10 text-gray-400 ring-gray-500/20"
  }
}

export function DiscordMessage(props: Props) {
  const {
    avatarSrc,
    avatarAlt,
    username,
    timestamp,
    title,
    badgeColor = "#43b581",
    badgeText,
    content,
    tag,
  } = props

  return (
    <div className="w-full flex">
      <Avatar src={avatarSrc} alt={avatarAlt} className="min-w-fit" />
      <div className="w-full max-w-xl ml-2">
        <div className="flex items-center">
          <p className="font-semibold text-white">{username}</p>
          {tag && (
            <span className="ml-2 px-1.5 py-0.5 text-xs font-semibold bg-brand-600 text-white rounded">
              {tag}
            </span>
          )}
          <span className="text-gray-400 ml-1.5 text-xs font-normal">
            {formatDate(timestamp)}
          </span>
        </div>

        <div className="bg-[#2f3136] text-sm w-full rounded p-3 mb-4 mt-1.5">
          <div className="flex flex-row items-center justify-between mb-2">
            {badgeText && (
              <span
                className={cn(
                  "inlin-flex order-2 items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
                  getBadgeColor(badgeColor)
                )}
              >
                {badgeText}
              </span>
            )}
            <p className="text-white order-1 text-base/7 font-semibold">
              {title}
            </p>
          </div>

          {Object.entries(content).map(([key, value]) => (
            <p key={key} className="text-[#dcddde] text-sm/6">
              <span className="text-[#b9bbbe]">{key}:</span> {value}
            </p>
          ))}

          <p className="text-[#72767d] text-xs mt-2 flex items-center">
            <Clock className="size-3 mr-1" />
            {formatDate(timestamp)}
          </p>
        </div>
      </div>
    </div>
  )
}
