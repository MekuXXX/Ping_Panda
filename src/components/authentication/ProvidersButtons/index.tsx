import { signInAction } from "@/actions/auth"
import { AuthenticationAction } from "@/lib/auth"
import { Button } from "@nextui-org/button"
import Image from "next/image"
import React from "react"

type Props = {}

export default function ProvidersButtons({}: Props) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <form
        action={async () => await signInAction(AuthenticationAction.GITHUB)}
      >
        <Button variant="light" className="w-full" type="submit">
          <Image
            src={"/github-icon.svg"}
            alt="Google icon"
            width={24}
            height={24}
            aria-hidden
            className="mr-2"
          />
          Github
        </Button>
      </form>
      <form
        action={async () => await signInAction(AuthenticationAction.GOOGLE)}
      >
        <Button variant="light" className="w-full" type="submit">
          <Image
            src={"/google-icon.svg"}
            alt="Google icon"
            width={24}
            height={24}
            aria-hidden
            className="mr-2"
          />
          Google
        </Button>
      </form>
    </div>
  )
}
