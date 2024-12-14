"use server"
import { AuthenticationAction, signIn, signOut } from "@/lib/auth"
import bcrypt from "bcryptjs"
import {
  RegisterSchema,
  LoginSchema,
  ResetPasswordSchema,
  resetPasswordSchema,
  registerSchema,
  ForgetPasswordSchema,
  forgetPasswordSchema,
} from "@/schemas/auth"
import { db } from "@/lib/db"
import { TokenType, sendAuthToken } from "@/lib/token"

export async function signInAction(type: AuthenticationAction) {
  await signIn(type, { redirectTo: "/" })
}

export async function loginAction(data: LoginSchema) {
  await signIn("credentials", data)
}

export async function registerAction(data: RegisterSchema) {
  try {
    const validatedData = registerSchema.safeParse(data)

    if (!validatedData.success) {
      return { error: "Data provided was not valid" }
    }

    const { name, email, password } = validatedData.data
    const isUserExist = await db.user.findUnique({ where: { email } })

    if (isUserExist) {
      return { error: "User is already exist" }
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await db.user.create({
      data: { name, email, password: hashedPassword },
    })

    await sendAuthToken(TokenType.VERIFY_EMAIL, user.id)
    return user
  } catch (error) {
    console.log(error)
    return {
      error: "Something happend in our side, please contact the support",
    }
  }
}

export async function forgetPasswordAction(data: ForgetPasswordSchema) {
  const validatedData = forgetPasswordSchema.safeParse(data)

  if (!validatedData.success) {
    return { error: "Must provide an email" }
  }

  const user = await db.user.findUnique({
    where: { email: validatedData.data.email },
  })

  if (!user) {
    return { error: "Email is not exist" }
  }

  await sendAuthToken(TokenType.FORGET_PASSWORD, user.id)

  return { success: "Reset password mail has sent successfully" }
}

export async function resetPasswordAction(
  token: string,
  data: ResetPasswordSchema
) {
  if (!token) {
    return { error: "Must provide a token" }
  }

  const validatedData = resetPasswordSchema.safeParse(data)
  if (!validatedData.success) {
    return { error: "Provided data is not accepted" }
  }

  const dbToken = await db.forgotPasswordToken.findUnique({
    where: { id: token },
  })

  if (!dbToken) {
    return { error: "Invalid token" }
  }

  if (dbToken.isUsed) {
    return { error: "Token is already used, Please provide valid one" }
  }

  const isExpired = new Date(Date.now()) > dbToken.expireAt

  if (isExpired) {
    await sendAuthToken(TokenType.FORGET_PASSWORD, dbToken.userId)
    return { error: "Reset password mail is expired we sent you another one" }
  }

  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(validatedData.data.password, salt)

  await db.user.update({
    where: { id: dbToken.userId },
    data: { password: hashedPassword },
  })

  return { success: "User password updated successfully" }
}

export async function signOutAction() {
  console.log("Hitted")
  await signOut()
}
