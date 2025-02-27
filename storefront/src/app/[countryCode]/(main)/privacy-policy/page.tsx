import { Metadata } from "next"
import CollapsibleSection from "@modules/common/components/collapsible-section"

export const metadata: Metadata = {
  title: "Privacy Policy | House of Joseph Lynch",
  description: "Privacy Policy for House of Joseph Lynch - Learn about how we handle and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Header Section */}
      <div className="px-4 py-12 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-light">Help & Info</h1>
          <h1 className="text-2xl font-light">Privacy Policy</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4">
        <CollapsibleSection title="Information We Collect" defaultOpen={true}>
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-4">
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Name and contact information</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information</li>
                  <li>Order history</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="How We Use Your Information">
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Process your orders and payments</li>
                  <li>Communicate with you about your orders</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our services and website</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Information Sharing">
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-4">
                <p>We may share your information with:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Service providers who assist in our operations</li>
                  <li>Payment processors</li>
                  <li>Shipping partners</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Your Rights">
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with supervisory authorities</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:privacy@houseofjosephlynch.com" className="underline hover:text-gray-600">
                    privacy@houseofjosephlynch.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Cookies and Tracking">
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-4">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Remember your preferences</li>
                  <li>Understand how you use our website</li>
                  <li>Provide personalized content and ads</li>
                  <li>Analyze website performance</li>
                </ul>
                <p className="mt-4">
                  You can manage your cookie preferences through your browser settings.
                </p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Updates to This Policy">
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-4">
                <p>
                  We may update this privacy policy from time to time. The updated version will be indicated by an updated 
                  "Last revised" date and the updated version will be effective as soon as it is accessible.
                </p>
                <p>
                  Last revised: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  )
} 


Please create me a privacy policy page design extremely well. Alter the UI for the prviacy policy page to reflect the pciture. Ignore the header. Recognize the banner at the bottom of each picture is the footer. 