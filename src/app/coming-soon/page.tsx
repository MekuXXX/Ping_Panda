import { LandingHeader } from "@/components/global/LandingHeader"
import ComingSoonForm from "@/components/specific/ComingSoonForm/page"
import { Countdown } from "@/components/specific/Countdown/page"
import { BackgroundBeams } from "@/components/ui/background-beams"
import dayjs from "dayjs"
type Props = {}

const targetDate = dayjs("2026-12-19").toDate()

export default async function ComingSoonPage({}: Props) {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return (
    <>
      <LandingHeader />
      <div className="relative min-h-[calc(100vh-64px)]  flex flex-col items-center justify-center overflow-hidden bg-gray-950 text-white">
        <BackgroundBeams />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Exciting Updates Coming Soon!
          </h1>
          <p className="text-lg mb-8 text-gray-300">
            We're working on something awesome. Stay tuned!
          </p>

          <Countdown targetDate={targetDate} />

          <ComingSoonForm withHomeButton />
        </div>
      </div>
    </>
  )
}
