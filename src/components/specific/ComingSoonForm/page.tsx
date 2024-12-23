"use client"
import React from "react"
import { useState } from "react"
import { Button, Input, Link } from "@nextui-org/react"
import { AnimatePresence, motion } from "framer-motion"
import { SparklesIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { addCommingSoonEmail } from "@/actions/comingSoon"
import { CommingSoonSchema, commingSoonSchema } from "@/schemas/comingSoon"
import { usePathname } from "next/navigation"

type Props = {
  withHomeButton?: boolean
}

export default function ComingSoonForm({ withHomeButton }: Props) {
  const pathname = usePathname()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommingSoonSchema>({
    resolver: zodResolver(commingSoonSchema),
    defaultValues: {
      email: "",
    },
  })
  const [isSubscribed, setIsSubscribed] = useState(false)

  const onSubmit = async (data: CommingSoonSchema) => {
    const res = await addCommingSoonEmail(data)
    if (res.error) {
      toast.error(res.error)
    } else {
      setIsSubscribed(true)
    }
  }

  return (
    <AnimatePresence>
      {!isSubscribed ? (
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 min-w-[30rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Input
            type="email"
            label="Email"
            size="sm"
            labelPlacement="inside"
            {...register("email")}
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message as string}
            className="max-w-xs min-h-12"
          />
          <Button
            type="submit"
            className="min-h-12 bg-white/75"
            endContent={<SparklesIcon className="size-4" />}
          >
            Notify Me
          </Button>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className="text-green-400 font-semibold">
            Thanks for subscribing! We'll keep you updated.
          </p>

          {withHomeButton && (
            <Button as={Link} href="/" className="mt-3">
              Go Home
            </Button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
