import React from "react"
import MaxWidthWrapper from "@/components/global/MaxWithWrapper"
import Heading from "@/components/global/Heading"
import { Check } from "lucide-react"
import { WavyBackground } from "@/components/ui/wavy-background"
import { Highlight } from "@/components/ui/hero-highlight"
import ShinyButton from "@/components/global/ShinyButton"

type Props = {}

export default function HomePage({}: Props) {
  return (
    <>
      <section className="relative py-24 sm:py-32">
        <MaxWidthWrapper className="text-center">
          <WavyBackground backgroundFill="#F8F9FD" className="w-[90%]">
            <div className="relative mx-auo text-center flex flex-col items-center gap-10">
              <div>
                <Heading>Real-Time SaaS Insights</Heading>
                <br />
                <span className="relative font-semibold bg-gradient-to-tr from-brand-600 to-brand-900 text-transparent bg-clip-text ">
                  Delivered to Your Discord
                </span>
              </div>
              <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
                PingPanda is the easiest way to monitor your SaaS. Get instant
                notifications for{" "}
                <Highlight className="font-semibold text-gray-700">
                  sales, new users, or any other event
                </Highlight>{" "}
                sent directly to your Discord
              </p>

              <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
                {[
                  "Real-time Discord alerts for critical events",
                  "Buy once, use forever",
                  "Track sales, new users, or any other event",
                ].map((item, index) => (
                  <li key={index} className="flex gap-1.5 items-center">
                    <Check className="size-5 shrink-0 text-brand-700" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="w-full max-w-80">
                <ShinyButton
                  href="/register"
                  className="capitalize relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  Start for free today
                </ShinyButton>
              </div>
            </div>
          </WavyBackground>
        </MaxWidthWrapper>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}
