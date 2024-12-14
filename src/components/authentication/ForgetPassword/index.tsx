"use client"

import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Mail } from "lucide-react"
import Link from "next/link"

import { Input } from "@nextui-org/input"
import { CardBody, CardFooter, CardHeader } from "@nextui-org/card"

import { ForgetPasswordSchema, forgetPasswordSchema } from "@/schemas/auth"
import { forgetPasswordAction } from "@/actions/auth"
import AuthenticationButton from "@/components/authentication/AuthenticationButton"
import CardWrapper from "@/components/global/CardWrapper"

export default function ForgetPasswordForm() {
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ForgetPasswordSchema>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: ForgetPasswordSchema) {
    startTransition(async () => {
      const res = await forgetPasswordAction(values)
      if (res?.error) {
        toast.error("Something went wrong", {
          description: res.error,
        })
      } else {
        toast.success("Check your mailbox", {
          description: res.success,
        })
        reset()
      }
    })
  }

  return (
    <CardWrapper>
      <CardHeader className="flex flex-col gap-1 items-center">
        <h2 className="text-2xl font-bold">Forgot Password</h2>
        <p className="text-sm text-default-500">
          Enter your email to reset your password
        </p>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Email"
            labelPlacement="inside"
            size="sm"
            endContent={
              <Mail className="text-default-400 pointer-events-none flex-shrink-0 h-full" />
            }
            {...register("email")}
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message as string}
          />
          <AuthenticationButton isLoading={isPending}>
            {isPending ? "Sending email..." : "Send reset link"}
          </AuthenticationButton>
        </form>
      </CardBody>
      <CardFooter className="flex justify-center text-sm">
        <p className="text-center text-default-500">
          Remembered your password?{" "}
          <Link
            href="/login"
            className="text-primary font-medium hover:underline"
          >
            Back to login
          </Link>
        </p>
      </CardFooter>
    </CardWrapper>
  )
}
