"use server"

import { db } from "@/lib/db"
import { CommingSoonSchema, commingSoonSchema } from "@/schemas/comingSoon"

export async function addCommingSoonEmail(data: CommingSoonSchema) {
  const validatedData = commingSoonSchema.safeParse(data)
  if (!validatedData.success) {
    return { error: "Invalid email address" }
  }

  try {
    const isEmailExists = await db.commingSoonEmail.findUnique({
      where: { email: data.email },
    })

    if (isEmailExists) {
      return { error: "Email is already exist" }
    }

    await db.commingSoonEmail.create({ data: { email: data.email } })
    return { success: "Email added successfully" }
  } catch {
    return { error: "An unexpected error occurred" }
  }
}
