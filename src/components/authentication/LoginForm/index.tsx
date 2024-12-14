"use client"

import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { loginSchema, LoginSchema } from "@/schemas/auth"
import { CardBody, CardFooter, CardHeader } from "@nextui-org/card"
import { loginAction } from "@/actions/auth"
import { useRouter } from "next/navigation"
import ProvidersButtons from "@/components/authentication/ProvidersButtons"
import { toast } from "sonner"
import { Input } from "@nextui-org/input"
import { Divider } from "@nextui-org/divider"
import { Mail, Lock } from "lucide-react"
import AuthenticationButton from "@/components/authentication/AuthenticationButton"
import CardWrapper from "@/components/global/CardWrapper"

export function LoginForm() {
  const [isLoading, startTransition] = useTransition()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  async function onSubmit(data: LoginSchema) {
    startTransition(async () => {
      try {
        await loginAction(data)
        toast.success("Logged in successfully", {
          description: "Welcome back! You've successfully logged in.",
        })
        router.replace("/")
      } catch (error) {
        toast.error("Something went wrong", {
          description: "Email or password is incorrect or activate the account",
        })
      }
    })
  }

  return (
    <CardWrapper>
      <CardHeader className="flex flex-col gap-1 items-center">
        <h2 className="text-2xl font-bold">Login</h2>
        <p className="text-sm text-default-500">
          Enter your details to access your account
        </p>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            id="email"
            label="Email"
            labelPlacement="inside"
            size="sm"
            endContent={
              <Mail className="text-default-400 pointer-events-none flex-shrink-0 h-full" />
            }
            type="email"
            autoComplete="email"
            {...register("email")}
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
          />
          <Input
            id="password"
            label="Password"
            labelPlacement="inside"
            size="sm"
            endContent={
              <Lock className="text-default-400 pointer-events-none flex-shrink-0 h-full" />
            }
            type="password"
            autoComplete="current-password"
            {...register("password")}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
          />
          <AuthenticationButton isLoading={isLoading}>
            {isLoading ? "Signing In" : "Sign In"}
          </AuthenticationButton>
        </form>
        <div className="flex justify-end my-2"></div>
        <div className="relative my-4">
          <Divider className="my-4 absolute -translate-y-2" />
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <ProvidersButtons />
      </CardBody>
      <CardFooter className="flex justify-between text-sm">
        <div>
          <span className="text-default-500">Don't have an account?&nbsp;</span>
          <Link
            href="/register"
            className="text-primary font-medium hover:underline"
          >
            Sign up
          </Link>
        </div>

        <Link
          href="/forget-password"
          className="text-sm text-primary hover:underline"
        >
          Forgot your password?
        </Link>
      </CardFooter>
    </CardWrapper>
  )
}
