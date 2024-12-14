import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import { ArrowRight } from "lucide-react"
import React from "react"

type Props = {} & ButtonProps

export default function ShinyButton({ className, children, ...props }: Props) {
  return (
    <Button
      as={Link}
      className={cn(
        "group relative  flex transform items-center justify-center whitespace-nowrap rounded-md border border-white bg-brand-700 px-8  text-base/7 font-medium text-white transition-all duration-300 hover:ring-2 hover:ring-brand-700 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 gap-2 overflow-clip",
        className
      )}
      endContent={
        <>
          <ArrowRight className="size-4 shrink-0 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-[0.125rem]" />
        </>
      }
      {...props}
    >
      {children}
      <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[5rem] -top-[3rem] -z-10 h-[10rem] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]"></div>
    </Button>
  )
}
