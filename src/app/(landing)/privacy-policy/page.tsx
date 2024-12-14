import { Card, CardBody, CardHeader } from "@nextui-org/card"
import { Divider } from "@nextui-org/divider"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="flex flex-col items-start px-6 pt-6 pb-0">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-default-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </CardHeader>
        <CardBody className="px-6 py-4">
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as when
              you create an account, use our services, or communicate with us.
              This may include your name, email address, and any other
              information you choose to provide.
            </p>
          </section>

          <Divider className="my-4" />

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide, maintain, and
              improve our services, to communicate with you, and to comply with
              legal obligations. We may also use your information to personalize
              your experience and to send you promotional communications.
            </p>
          </section>

          <Divider className="my-4" />

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              3. Information Sharing and Disclosure
            </h2>
            <p>
              We do not share your personal information with third parties
              except as described in this policy. We may share your information
              with service providers who perform services on our behalf, or when
              required by law.
            </p>
          </section>

          <Divider className="my-4" />

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
            <p>
              We take reasonable measures to help protect your personal
              information from loss, theft, misuse, unauthorized access,
              disclosure, alteration, and destruction. However, no internet or
              electronic storage system is 100% secure.
            </p>
          </section>

          <Divider className="my-4" />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              5. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new privacy policy on
              this page. You are advised to review this privacy policy
              periodically for any changes.
            </p>
          </section>
        </CardBody>
      </Card>
    </div>
  )
}
