import * as z from "zod"

export const commingSoonSchema = z.object({
  email: z.string().email("Invalid email address"),
})

export type CommingSoonSchema = z.infer<typeof commingSoonSchema>
