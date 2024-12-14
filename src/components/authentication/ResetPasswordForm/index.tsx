"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTransition } from "react"
import { toast } from "sonner"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { CardBody, CardFooter, CardHeader } from "@nextui-org/card"

import { ResetPasswordSchema, resetPasswordSchema } from "@/schemas/auth"
import { resetPasswordAction } from "@/actions/auth"
import AuthenticationButton from "../AuthenticationButton"
import CardWrapper from "@/components/global/CardWrapper"

type Props = { token: string }

export default function ResetPasswordForm({ token }: Props) {
  const router = useRouter()
  const [isLoading, startTransition] = useTransition()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values: ResetPasswordSchema) {
    startTransition(async () => {
      const res = await resetPasswordAction(token, values)

      if (res?.error) {
        toast.error("Password reset failed", {
          description: res.error,
        })
      } else {
        toast.success("Password reset successful", {
          description:
            "Your password has been reset. You can now log in with your new password.",
        })
        router.replace("/login")
      }
    })
  }

  return (
    <CardWrapper>
      <CardHeader className="flex flex-col gap-1 items-center">
        <h2 className="text-2xl font-bold">Reset Password</h2>
        <p className="text-sm text-default-500">
          Enter your new password below to reset your account password.
        </p>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="New Password"
            labelPlacement="inside"
            endContent={
              <Button
                isIconOnly
                variant="light"
                onPress={() => setShowPassword(!showPassword)}
                className="h-full"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-default-400" />
                ) : (
                  <Eye className="h-4 w-4 text-default-400" />
                )}
              </Button>
            }
            type={showPassword ? "text" : "password"}
            {...register("password")}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message as string}
          />
          <Input
            label="Confirm New Password"
            labelPlacement="inside"
            endContent={
              <Button
                isIconOnly
                variant="light"
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                className="h-full"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4 text-default-400" />
                ) : (
                  <Eye className="h-4 w-4 text-default-400" />
                )}
              </Button>
            }
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword")}
            isInvalid={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword?.message as string}
          />
          <AuthenticationButton isLoading={isLoading}>
            {isLoading ? "Resetting..." : "Reset Password"}
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
