"use client"

import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema, RegisterSchema } from "@/schemas/auth"
import Link from "next/link"
import { registerAction } from "@/actions/auth"
import ProvidersButtons from "@/components/authentication/ProvidersButtons"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { CardBody, CardFooter, CardHeader } from "@nextui-org/card"
import { Input } from "@nextui-org/input"
import { Divider } from "@nextui-org/divider"
import { User, Mail, Lock } from "lucide-react"
import AuthenticationButton from "@/components/authentication/AuthenticationButton"
import CardWrapper from "@/components/global/CardWrapper"

export function RegisterForm() {
  const [isLoading, startTransition] = useTransition()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  })

  async function onSubmit(data: RegisterSchema) {
    startTransition(async () => {
      const res = await registerAction(data)
      if ("error" in res) {
        toast.error("Something went wrong", {
          description: res.error,
        })
      } else {
        toast.success("Registration Successful", {
          description: "Welcome aboard! You've successfully registered.",
        })
        router.push("/login")
      }
    })
  }

  return (
    <CardWrapper>
      <CardHeader className="flex flex-col gap-1 items-center">
        <h2 className="text-2xl font-bold">Create an account</h2>
        <p className="text-sm text-default-500">
          Enter your details to get started
        </p>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            id="username"
            label="Username"
            labelPlacement="inside"
            size="sm"
            endContent={
              <User className="text-default-400 pointer-events-none flex-shrink-0 h-full" />
            }
            {...register("name")}
            isInvalid={!!errors.name}
            errorMessage={errors.name?.message}
          />
          <Input
            id="email"
            label="Email"
            labelPlacement="inside"
            size="sm"
            endContent={
              <Mail className="text-default-400 pointer-events-none flex-shrink-0 h-full" />
            }
            type="email"
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
            {...register("password")}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
          />
          <Input
            id="confirmPassword"
            label="Confirm Password"
            labelPlacement="inside"
            size="sm"
            endContent={
              <Lock className="text-default-400 pointer-events-none flex-shrink-0 h-full" />
            }
            type="password"
            {...register("confirmPassword")}
            isInvalid={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword?.message}
          />
          <AuthenticationButton isLoading={isLoading}>
            {isLoading ? "Registering" : "Register"}
          </AuthenticationButton>
        </form>

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
      <div className="mt-4 text-center text-sm">
        <span className="text-default-500">Already have an account? </span>
        <Link
          href="/login"
          className="text-primary font-medium hover:underline"
        >
          Sign in
        </Link>
      </div>
      <CardFooter>
        <p className="text-xs text-center text-default-500">
          By registering, you agree to our{" "}
          <Link
            href="/terms-of-service"
            className="text-primary hover:underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy "
            className="text-primary hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </CardFooter>
    </CardWrapper>
  )
}
