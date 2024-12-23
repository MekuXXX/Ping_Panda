"use client"
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
type Props = {
  targetDate: Date
}

export function Countdown({ targetDate }: Props) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setCountdown({ days, hours, minutes, seconds })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex justify-center space-x-4 mb-12">
      {Object.entries(countdown).map(([unit, value]) => (
        <motion.div
          key={unit}
          className="flex flex-col items-center border-brand-400 py-4 px-2 border justify-center rounded-xl hover:border-brand-50 transition"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-3xl md:text-5xl font-bold mb-2">{value}</div>
          <div className="text-sm uppercase text-gray-400">{unit}</div>
        </motion.div>
      ))}
    </div>
  )
}
