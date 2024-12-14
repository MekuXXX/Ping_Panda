import { Metadata } from "next"
import ForgetPasswordForm from "@/components/authentication/ForgetPassword"

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your password",
}

export default function ForgotPasswordPage() {
  return (
    <div className="container grid min-h-screen place-content-center">
      <ForgetPasswordForm />
    </div>
  )
}
