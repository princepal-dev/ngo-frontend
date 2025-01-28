import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 sm:p-8 bg-white shadow-lg">
          <div className="prose prose-emerald max-w-none">
            <h1 className="text-3xl font-bold text-emerald-800 mb-6">
              Terms and Conditions
            </h1>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600 mb-4">
                  By accessing and using the HungerToHope NGO website, you
                  accept and agree to be bound by the terms and provision of
                  this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                  2. Volunteer Programs
                </h2>
                <p className="text-gray-600 mb-4">
                  Participation in our volunteer programs is subject to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Completion of required registration forms</li>
                  <li>Meeting minimum age requirements</li>
                  <li>Compliance with our code of conduct</li>
                  <li>Adherence to project-specific guidelines</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                  3. Donations
                </h2>
                <p className="text-gray-600 mb-4">
                  All donations are subject to the following conditions:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Donations are non-refundable</li>
                  <li>Tax receipts will be issued for eligible donations</li>
                  <li>
                    Donor information will be handled according to our privacy
                    policy
                  </li>
                  <li>Recurring donations can be canceled at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                  4. Intellectual Property
                </h2>
                <p className="text-gray-600 mb-4">
                  All content on this website, including text, graphics, logos,
                  and images, is the property of HungerToHope NGO and is
                  protected by copyright laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                  5. Limitation of Liability
                </h2>
                <p className="text-gray-600 mb-4">
                  HungerToHope NGO shall not be liable for any direct, indirect,
                  incidental, consequential, or punitive damages arising from
                  your use of our website or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                  6. Changes to Terms
                </h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right to modify these terms at any time.
                  Changes will be effective immediately upon posting on the
                  website.
                </p>
              </section>
            </div>

            <div className="mt-8 flex gap-4">
              <Button asChild variant="outline">
                <Link href="/">Return Home</Link>
              </Button>
              <Button asChild className="bg-green-500 hover:bg-green-600">
                <Link href="/privacy-policy">View Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
