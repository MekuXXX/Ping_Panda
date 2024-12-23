import { BackgroundBeams } from "@/components/ui/background-beams"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"

export default function NotFound() {
  const words = "Oops! Looks like you've wandered into uncharted territory."

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gray-950 text-white">
      <BackgroundBeams />

      <div className="relative z-10 flex flex-col items-center justify-center p-4">
        <h1 className="text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          404
        </h1>

        <div className="max-w-2xl space-y-6 text-center mt-12">
          <TextGenerateEffect words={words} className="text-white" />

          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved to a new
            address.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              as={Link}
              href="/"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90"
            >
              Return Home
            </Button>
            <Button
              as={Link}
              href="/coming-soon"
              className="border-blue-500/20 hover:bg-blue-500/10"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
