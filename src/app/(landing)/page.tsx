import React from "react"
import MaxWidthWrapper from "@/components/global/MaxWithWrapper"
import Heading from "@/components/global/Heading"
import { Check, Star } from "lucide-react"
import { WavyBackground } from "@/components/ui/wavy-background"
import { Highlight } from "@/components/ui/hero-highlight"
import ShinyButton from "@/components/global/ShinyButton"
import { Avatar, AvatarGroup } from "@nextui-org/react"
import DiscordView from "@/components/specific/DoscordView"

type Props = {}

export default function HomePage({}: Props) {
  return (
    <>
      <WavyBackground backgroundFill="#F8F9FD" className="w-[90%]">
        <section className="relative py-24 sm:py-32">
          <MaxWidthWrapper className="text-center">
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
              <div className="flex gap-3">
                <AvatarGroup isBordered max={5} total={10}>
                  <Avatar src="/users/user-1.png" />
                  <Avatar src="/users/user-2.png" />
                  <Avatar src="/users/user-3.png" />
                  <Avatar src="/users/user-4.png" />
                  <Avatar src="/users/user-5.png" />
                </AvatarGroup>

                <div>
                  <div className="flex">
                    {Array(5)
                      .fill("")
                      .map(() => (
                        <Star className="fill-brand-600 text-brand-500 w-4 h-4 border-none" />
                      ))}
                  </div>
                  <p className="text-start">
                    <span className="font-bold text-brand-900">1,250</span>{" "}
                    happy customers
                  </p>
                </div>
              </div>
              <div className="w-full max-w-80">
                <ShinyButton
                  href="/register"
                  className="capitalize relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
                >
                  Start for free today
                </ShinyButton>
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
      </WavyBackground>
      <section className="bg-brand-25 relative pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700" />
        <div className="relative mx-auto">
          <MaxWidthWrapper className="relative">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:p-4 lg:rounded-2xl">
              <DiscordView />
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
      <section></section>
      <section></section>
    </>
  )
}
