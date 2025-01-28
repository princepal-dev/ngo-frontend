import Link from "next/link";
import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy and Policy",
  description:
    "Understand how we collect, use, and protect your personal information, and review your privacy rights.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 sm:p-8 bg-white shadow-lg">
          <div className="prose prose-emerald max-w-none">
            <h1 className="text-3xl font-bold text-emerald-800 mb-6">
              Privacy Policy
            </h1>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-gray-600 mb-4">
                  We collect information that you provide directly to us,
                  including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>
                    Personal identification information (Name, email address,
                    phone number)
                  </li>
                  <li>Volunteer registration information</li>
                  <li>Donation details</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-600 mb-4">
                  We use the collected information for:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Processing donations and issuing tax receipts</li>
                  <li>Coordinating volunteer activities</li>
                  <li>Sending newsletters and updates (with your consent)</li>
                  <li>Improving our services and programs</li>
                  <li>Legal and regulatory compliance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                  3. Information Sharing
                </h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information with:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Service providers who assist in our operations</li>
                  <li>Partner organizations (with your explicit consent)</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                  4. Data Security
                </h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate security measures to protect your
                  personal information, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments</li>
                  <li>Limited access to personal information</li>
                  <li>Secure data storage systems</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                  5. Your Rights
                </h2>
                <p className="text-gray-600 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of communications</li>
                  <li>Withdraw consent for specific processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                  6. Cookies and Tracking
                </h2>
                <p className="text-gray-600 mb-4">
                  Our website uses cookies and similar tracking technologies to
                  improve user experience and analyze website traffic.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
                  7. Contact Us
                </h2>
                <p className="text-gray-600 mb-4">
                  If you have questions about our privacy policy or practices,
                  please contact us at:
                </p>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-emerald-800">
                    Email: contact@hungertohope.org
                  </p>
                  <p className="text-emerald-800">Phone: </p>
                  <p className="text-emerald-800">Address: </p>
                </div>
              </section>
            </div>

            <div className="mt-8 flex gap-4">
              <Button asChild variant="outline">
                <Link href="/">Return Home</Link>
              </Button>
              <Button asChild className="bg-green-500 hover:bg-green-600">
                <Link href="/terms">View Terms and Conditions</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
