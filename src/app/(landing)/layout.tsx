import { LandingHeader } from "@/components/global/LandingHeader"
import React from "react"

type Props = {
  children: React.ReactNode
}

export default function LandingLayout({ children }: Props) {
  return (
    <>
      <LandingHeader />
      {children}
    </>
  )
}
