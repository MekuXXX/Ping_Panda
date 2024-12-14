import { ArrowRight, CheckCircle, XCircle } from "lucide-react"
import { CardBody, CardFooter, CardHeader } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import Link from "next/link"
import { TokenType, sendAuthToken } from "@/lib/token"
import { db } from "@/lib/db"
import CardWrapper from "@/components/global/CardWrapper"

async function verifyEmail(token: string) {
  const dbToken = await db.activationToken.findUnique({ where: { id: token } })

  if (!dbToken) {
    return {
      success: false,
      message: "Token does not exist, please provide a valid token",
    }
  }

  if (dbToken.isUsed) {
    return {
      success: false,
      message: "Token was already used, please provide a valid token",
    }
  }

  if (new Date(Date.now()) > dbToken.expireAt) {
    await sendAuthToken(TokenType.VERIFY_EMAIL, dbToken.userId)

    return {
      success: false,
      message: "Token is expired, we will send a new email",
    }
  }

  const activatedToken = await db.activationToken.update({
    where: { id: token },
    data: { isUsed: true, user: { update: { isActive: true } } },
    include: { user: { select: { id: true } } },
  })

  db.activationToken.deleteMany({
    where: { userId: activatedToken.userId, isUsed: { not: true } },
  })

  return {
    success: true,
    message: "User is activated successfully",
  }
}

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: { token: string }
}) {
  const token = searchParams.token.trim()

  let verificationStatus: "success" | "error"
  let message = "Success"

  if (!token) {
    verificationStatus = "error"
    message = "No verification token provided."
  } else {
    const result = await verifyEmail(token)
    verificationStatus = result.success ? "success" : "error"
    message = result.message
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <CardWrapper className="w-full max-w-md group">
        <CardHeader className="flex flex-col gap-1 items-center">
          <h1 className="text-2xl font-bold">Email Verification</h1>
          <p className="text-default-500 text-small">
            We're confirming your email address
          </p>
        </CardHeader>
        <CardBody className="flex flex-col items-center justify-center py-8">
          {verificationStatus === "success" ? (
            <>
              <CheckCircle className="h-24 w-24 text-success" />
              <p className="mt-4 text-center text-default-500">{message}</p>
            </>
          ) : (
            <>
              <XCircle className="h-24 w-24 text-danger" />
              <p className="mt-4 text-center text-default-500">{message}</p>
            </>
          )}
        </CardBody>
        <CardFooter className="flex justify-center">
          <Button
            as={Link}
            href="/login"
            endContent={
              <ArrowRight className="h-4 w-4 group-hover:translate-x-[0.125rem] transition" />
            }
            className="bg-brand-700 text-white"
          >
            Go to Login
          </Button>
        </CardFooter>
      </CardWrapper>
    </div>
  )
}
