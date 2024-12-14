import { signOutAction } from "@/actions/auth"
import { auth } from "@/lib/auth"
import { cn } from "@/lib/utils"
import { Button } from "@nextui-org/button"
import { Divider } from "@nextui-org/divider"
import { Link } from "@nextui-org/link"
import {
  NavbarProps,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar"
import { ArrowRight } from "lucide-react"
import React from "react"

type Props = {} & NavbarProps

export default async function Header({ className, ...props }: Props) {
  const session = await auth()
  const isLoggedIn = session && !!session.user
  console.log(isLoggedIn)

  return (
    <Navbar className={cn("backdrop-blur-", className)} {...props}>
      <NavbarBrand>
        <Link href="/" className="font-semibold">
          Ping<span className="text-brand-700">Panda</span>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} href="/pricing" size="md" variant="light">
            Pricing
          </Button>
        </NavbarItem>
        {isLoggedIn ? (
          <>
            <NavbarItem className="hidden lg:flex">
              <form action={signOutAction}>
                <Button size="md" variant="light" type="submit">
                  Sign out
                </Button>
              </form>
            </NavbarItem>
            <Divider orientation="vertical" className="h-8" />
            <NavbarItem>
              <Button
                as={Link}
                size="md"
                variant="shadow"
                href="/dashboard"
                className="group bg-brand-700 text-white"
                endContent={
                  <ArrowRight className="size-4 group-hover:translate-x-[0.125rem] transition" />
                }
              >
                Dashboard
              </Button>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Button as={Link} href="/login" size="md" variant="light">
                Sign In
              </Button>
            </NavbarItem>
            <Divider orientation="vertical" className="h-8" />
            <NavbarItem>
              <Button
                as={Link}
                size="md"
                variant="shadow"
                href="/register"
                className="group bg-brand-700 text-white"
                endContent={
                  <ArrowRight className="size-4 group-hover:translate-x-[0.125rem] transition" />
                }
              >
                Sign up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  )
}
