import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Link } from "@nextui-org/link"
import {
  Github,
  Twitter,
  DiscIcon as Discord,
  Mail,
  ArrowRight,
} from "lucide-react"
import MaxWidthWrapper from "../MaxWithWrapper"
import ComingSoonForm from "@/components/specific/ComingSoonForm/page"

export function LandingFooter() {
  return (
    <footer className="relative">
      <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-8 md:p-12 mb-12">
        <div className="flex flex-col items-center text-center space-y-4 text-white">
          <h2 className="text-2xl md:text-3xl font-bold">
            Stay Updated with PingPanda
          </h2>
          <p className="text-zinc-100 max-w-2xl">
            Get the latest updates about new features and tips to improve your
            SaaS monitoring
          </p>
          <ComingSoonForm />
        </div>
      </div>
      <MaxWidthWrapper>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center sm:text-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-12">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">PingPanda</h3>
              <p className="text-muted-foreground text-sm">
                Real-time SaaS insights delivered directly to your Discord.
                Monitor your business metrics effortlessly.
              </p>
              <div className="flex space-x-4 justify-center sm:justify-start">
                <Link
                  href="/coming-soon"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="/coming-soon"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="/coming-soon"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Discord className="h-5 w-5" />
                </Link>
                <Link
                  href="/coming-soon"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/coming-soon"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/coming-soon"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/coming-soon"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="/coming-soon"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    Careers
                  </Link>
                </li>

                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-muted-foreground hover:text-primary text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t py-6 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} PingPanda. All rights reserved.</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
