import Header from "@/components/global/Header"
import React from "react"

type Props = {
  children: React.ReactNode
}

export default function LandingLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
