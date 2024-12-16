import ActiveAvatar from "@/components/global/ActiveAvatar"
import { Icons } from "@/components/global/Icons"
import { cn } from "@/lib/utils"
import { Divider } from "@nextui-org/divider"
import {
  Cog,
  Gift,
  Headphones,
  HelpCircle,
  InboxIcon,
  Menu,
  Mic,
  Phone,
  Pin,
  PlusCircle,
  Search,
  Smile,
  Sticker,
  UserCircle,
  Video,
} from "lucide-react"
import React, { PropsWithChildren } from "react"

type Props = {} & PropsWithChildren

export default function DiscordView({ children }: Props) {
  const dmList = [
    {
      Icon: UserCircle,
      text: "Friends",
      tip: "2",
    },
    {
      Icon: InboxIcon,
      text: "Inbox",
      tip: "3",
    },
  ]

  const friendsList = [
    {
      src: "/brand-asset-profile-picture.png",
      text: "PingPanda",
      tip: "3",
      hovered: true,
      active: true,
    },
    {
      active: true,
    },
    {
      tip: "5",
    },
    {
      active: true,
    },
    {},
  ]

  return (
    <div className="flex min-h-[800px] w-full max-w-[1200px] bg-discord-background text-white rounded-lg overflow-clip shadow-xl">
      <div className="hidden sm:flex w-[4.5rem] bg-[#202225] py-3 flex-col items-center">
        <div className="size-12 bg-discord-brand rounded-2xl flex items-center justify-center mb-2 hover:rounded-xl transition-all duration-200">
          <Icons.Discord className="size-3/5" />
        </div>
        <Divider className="bg-discord-background h-[2px] w-8 my-2 rounded-full" />
        {Array(5)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className="size-12 bg-discord-background rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl tranistion-all duration-200 hover:bg-discord-brand cursor-not-allowed"
            >
              <span className="text-lg font-semibold text-gray-400">
                {String.fromCharCode(65 + i)}
              </span>
            </div>
          ))}

        <div className="group size-12 bg-discord-background rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl tranistion-all duration-200 hover:bg-[#3ba55c] cursor-not-allowed mt-auto">
          <PlusCircle className="text-[#3ba55c] group-hover:text-white" />
        </div>
      </div>

      <div className="hidden md:flex w-60 bg-[#2f3136] flex-col">
        <div className="px-4 w-full h-16 border-b border-[#202225] flex items-center shadow-sm">
          <div className="w-full bg-[#202225] text-sm rounded px-2 h-8 flex items-center justify-center text-gray-500 cursor-not-allowed">
            Find or start a conversation
          </div>
        </div>

        <div className="flex-1 overflow-y-clip pt-4">
          <div className="px-2 mb-4">
            {dmList.map((item) => (
              <div className="relative flex items-center tex-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcddde] cursor-not-allowed">
                <item.Icon className="mr-4 size-8 text-[#b9bbbe]" />
                <span className="font-medium text-sm">{item.text}</span>
                {item.tip && (
                  <span className="absolute bg-discord-brand size-4 animate-pulse text-xs grid place-content-center rounded-full top-1 left-1">
                    {item.tip}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="px-2 mb-4">
            <h3 className="text-xs font-semibold text-[#8e9297] px-2 mb-2 uppercase">
              Direct Messages
            </h3>
            <div className="grid gap-2">
              {friendsList.map((item, ind) => (
                <div
                  className={cn(
                    "relative flex gap-2 items-center px-2 py-1.5 roundedtext-white cursor-pointer",
                    {
                      "bg-[#393c43]": item.hovered,
                      "cursor-not-allowed": !item.text,
                    }
                  )}
                >
                  <ActiveAvatar
                    size="sm"
                    src={item.src}
                    alt={item.text ? item.text : `User ${ind}` + " Avatar"}
                    isActive={item.active}
                  />

                  <span>{item.text ? item.text : `User ${ind + 1}`}</span>
                  {item.tip && (
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-discord-brand text-xs size-4 grid place-content-center rounded-full">
                      {item.tip}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-2 bg-[#292b2f] flex items-center">
          <div className="size-8 rounded-full bg-brand-700 mr-2" />
          <div className="flex-1">
            <p className="text-sm font-medium text-white">You</p>
            <p className="text-xs text-[#b9bbbe]">@your_account</p>
          </div>

          <div className="flex items-center gap-2">
            {[Mic, Headphones, Cog].map((Icon) => (
              <Icon className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer" />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="h-16 bg-[#36393f] flex items-center px-4 shadow-sm border-b border-[#202225]">
          <div className="md:hidden mr-4">
            <Menu className="size-6 text-[#b9bbbe] hover:text-white cursor-pointer" />
          </div>

          <div className="flex items-center">
            <ActiveAvatar
              src="/brand-asset-profile-picture.png"
              alt="PingPanda Avata"
              className="mr-3"
              isActive
            />
            <p className="font-semibold text-white">PingPanda</p>
          </div>

          <div className="ml-auto flex items-center space-x-4 text-[#b9bbbe]">
            {[Phone, Video, Pin, UserCircle, Search, InboxIcon, HelpCircle].map(
              (Icon) => (
                <Icon className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
              )
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-discord-background flex flex-col-reverse">
          {children}
        </div>

        <div className="p-4">
          <div className="flex items-center bg-[#40444b] rounded-lg p-1">
            <PlusCircle className="mx-3 text-[#b9bbbe] hover:text-white cursor-not-allowed" />
            <input
              readOnly
              type="text"
              placeholder="Message @PingPanda"
              className="flex-1 bg-transparent py-2.5 px-1 text-white cursor-not-allowed"
            />

            <div className="flex items-center space-x-3 mx-3 text-[#b9bbbe]">
              {[Gift, Sticker, Smile].map((Icon) => (
                <Icon className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
