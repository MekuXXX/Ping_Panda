import React from "react"
import MaxWidthWrapper from "@/components/global/MaxWithWrapper"
import Heading from "@/components/global/Heading"
import { Check, Star } from "lucide-react"
import { WavyBackground } from "@/components/ui/wavy-background"
import { Highlight } from "@/components/ui/hero-highlight"
import ShinyButton from "@/components/global/ShinyButton"
import { Avatar, AvatarGroup, Image } from "@nextui-org/react"
import DiscordView from "@/components/specific/DoscordView"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list"
import dayjs from "dayjs"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { cn } from "@/lib/utils"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

type Props = {}

const codeSnippet = `await fetch("http://localhost:3000/api/v1/events", {
  method: "POST",
  body: JSON.stringify({
    category: "sale",
    fields: {
      plan: "PRO",
      email: "zoe.martinez2001@email.com",
      amount: 49.00
    }
  }),
  headers: {
    Authorization: "Bearer <YOUR_API_KEY>"
  }
})`

const items = [
  {
    title: "Real-time notifications",
    description:
      "Get notified about critical events the moment they happen,no matter if you're at home or on the go.",
    header: (
      <Image
        src="/phone-screen.png"
        alt="Phone image of PingPanda Notification"
      />
    ),
    className: "row-span-2 rounded-r-none overflow-clip pb-0",
  },
  {
    title: "Track Any Event",
    description:
      "From new user signups to successful payments, PingPanda notifies you for all critical events in your SaaS.",
    header: (
      <Image
        src="/bento-any-event.png"
        alt="Phone image of PingPanda Notification"
      />
    ),
  },
  {
    title: "Easy Integration",
    description:
      "Connect PingPanda with your existing workflows in minutes and call our intuitive logging API from any language.",
    header: (
      <div className="relative min-h-[30rem] w-full grow">
        <div className="absolute inset-0 rounded-tl-xl bg-gray-900 shadow-2xl overflow-clip">
          <div className="flex bg-gray-800/40 ring-1 ring-white/5">
            <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
              <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                pingpanda.js
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="max-h-[30rem]">
              <SyntaxHighlighter
                language="typescript"
                style={{
                  ...oneDark,
                  'pre[class*="language-"]': {
                    ...oneDark['pre[class*="language-"]'],
                    background: "transparent",
                    overflow: "hidden",
                  },
                  'code[class*="language-"]': {
                    ...oneDark['code[class*="language-"]'],
                    background: "transparent",
                  },
                }}
              >
                {codeSnippet}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    ),
    className: "row-span-2 rounded-l-none pr-0 pb-0",
  },
  {
    title: "Track Any Properties",
    description:
      "Add any custom data you like to an event, such as a user email, a purchase amount or an exceeded quota.",
    header: (
      <Image
        src="/bento-custom-data.png"
        alt="Phone image of PingPanda Notification"
      />
    ),
  },
]

const testimonials = [
  {
    quote:
      "PingPanda has redefined how we stay informed. Instant notifications for critical metrics have made our SaaS monitoring effortless.",
    name: "Anna Lopez",
    designation: "CEO at SaaSPro Ventures",
    src: "/users/user-6.jpeg",
  },
  {
    quote:
      "The seamless integration with Discord is genius. It’s like having a dedicated operations assistant in our team.",
    name: "David Parker",
    designation: "Head of Growth at NexaEdge",
    src: "/users/user-7.jpeg",
  },
  {
    quote:
      "Real-time insights delivered directly to our team’s workspace has improved decision-making and response times tenfold.",
    name: "Priya Mehta",
    designation: "Data Analyst at InsightsInc",
    src: "/users/user-8.jpeg",
  },
  {
    quote:
      "With PingPanda, we’ve cut down our response times drastically. It’s a must-have tool for any SaaS business.",
    name: "Liam Turner",
    designation: "Customer Success Manager at AgileBoost",
    src: "/users/user-9.jpeg",
  },
  {
    quote:
      "PingPanda’s simplicity and efficiency have completely transformed the way we monitor key metrics. Highly recommended!",
    name: "Sophia Martinez",
    designation: "Operations Manager at CloudOrbit",
    src: "/users/user-10.jpeg",
  },
]

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
              <DiscordView>
                <AnimatedList>
                  <AnimatedListItem>
                    <DiscordView.Message
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="PingPanda Avatar"
                      username="PingPanda"
                      timestamp={dayjs()
                        .subtract(3, "hours")
                        .subtract(5, "minutes")
                        .toDate()}
                      badgeText="SignUp"
                      badgeColor="#43b581"
                      tag="App"
                      title="🗣 New user is signed up"
                      content={{
                        Name: "Mateo Ortiz",
                        Email: "example@example.com",
                      }}
                    />
                  </AnimatedListItem>

                  <AnimatedListItem>
                    <DiscordView.Message
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="PingPanda Avatar"
                      username="PingPanda"
                      timestamp={dayjs().subtract(2, "hours").toDate()}
                      badgeText="Revenue"
                      badgeColor="#faa61a"
                      tag="App"
                      title="💰 Payment Received"
                      content={{
                        Amount: "$49.00",
                        Email: "example2@example.com",
                        Plan: "PRO",
                      }}
                    />
                  </AnimatedListItem>

                  <AnimatedListItem>
                    <DiscordView.Message
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="PingPanda Avatar"
                      username="PingPanda"
                      timestamp={dayjs().subtract(1, "hours").toDate()}
                      badgeText="Milestone"
                      tag="App"
                      title="🚀 Revenue Milestone Achieved"
                      content={{
                        "Recurring Revenue": "$5000.00",
                        Growth: "%12",
                      }}
                    />
                  </AnimatedListItem>
                </AnimatedList>
              </DiscordView>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
              Intuitive Monitoring
            </h2>
            <Heading>Stay ahead with real-time insights</Heading>
          </div>
          <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={cn("overflow-clip border-black/5", item.className)}
              />
            ))}
          </BentoGrid>
        </MaxWidthWrapper>
      </section>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="flex flex-col items-center gap-8   sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
              Real-World Experience
            </h2>
            <Heading>What our customers say</Heading>
          </div>

          <AnimatedTestimonials testimonials={testimonials} />

          <ShinyButton
            href="/register"
            className="capitalize relative max-w-[25rem] z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            Start for free today
          </ShinyButton>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
