import React from "react"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Spinner } from "@nextui-org/react"

export default function Loading() {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gray-950 text-white">
      <BackgroundBeams />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="animate-pulse mb-8">
          <Spinner
            size="lg"
            color="secondary"
            classNames={{
              circle1: "border-b-purple-500",
              circle2: "border-b-blue-500",
            }}
          />
        </div>

        <div className="max-w-2xl space-y-4">
          <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Loading Amazing Content
          </h1>
          <p className="text-center text-muted-foreground">
            PingPanda is preparing your experience. Just a moment...
          </p>
        </div>
      </div>
    </div>
  )
}
