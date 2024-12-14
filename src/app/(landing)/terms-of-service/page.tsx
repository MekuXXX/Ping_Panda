import { Card, CardBody, CardHeader } from "@nextui-org/card"
import { Divider } from "@nextui-org/divider"

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="flex flex-col items-start px-6 pt-6 pb-0">
          <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
          <p className="text-default-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </CardHeader>
        <CardBody className="px-6 py-4">
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using our service, you agree to be bound by these
              Terms of Service. If you disagree with any part of the terms, you
              may not access the service.
            </p>
          </section>

          <Divider className="my-4" />

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">2. Use of Service</h2>
            <p>
              You agree to use the service only for lawful purposes and in
              accordance with these Terms. You are responsible for maintaining
              the confidentiality of your account and password.
            </p>
          </section>

          <Divider className="my-4" />

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              3. Intellectual Property
            </h2>
            <p>
              The service and its original content, features, and functionality
              are owned by us and are protected by international copyright,
              trademark, patent, trade secret, and other intellectual property
              or proprietary rights laws.
            </p>
          </section>

          <Divider className="my-4" />

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">4. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the
              service immediately, without prior notice or liability, under our
              sole discretion, for any reason whatsoever and without limitation,
              including but not limited to a breach of the Terms.
            </p>
          </section>

          <Divider className="my-4" />

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time.
              It is your responsibility to review these Terms periodically for
              changes.
            </p>
          </section>
        </CardBody>
      </Card>
    </div>
  )
}
