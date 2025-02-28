import { Metadata } from "next"
import CollapsibleSection from "@modules/common/components/collapsible-section"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Nav from "@modules/layout/templates/nav"

export const metadata: Metadata = {
  title: "Privacy Policy | House of Joseph Lynch",
  description: "Privacy Policy for House of Joseph Lynch - Learn about how we handle and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <div className="max-w-[1440px] mx-auto">
        {/* Top Navigation Links */}
        <div className="px-4 py-8 pt-24">
          <div className="flex gap-x-4 text-sm font-light">
            <LocalizedClientLink href="/" className="text-gray-600 hover:text-black">
              Help & Info
            </LocalizedClientLink>
            <span className="text-gray-600">/</span>
            <span className="text-black">Privacy Policy</span>
          </div>
        </div>

        {/* Header Section */}
        <div className="px-4 py-8 border-t border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-light">&nbsp;</h1>
            <h1 className="text-xl font-light">&nbsp;</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4">
          <CollapsibleSection title="Privacy Policy" defaultOpen={false}>
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <div className="text-sm space-y-6">
                  <p>
                    House of Joseph Lynch is committed to protecting and respecting your privacy. This policy explains how we use any personal information that you provide to us through our website.
                  </p>
                  <p>
                    Please read this policy carefully to understand our practices regarding your personal information.
                  </p>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Terms & Conditions" defaultOpen={false}>
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <div className="text-sm space-y-6">
                  <p>
                    By accessing and using houseofjosephlynch.com, you accept and agree to be bound by these terms and conditions:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>The content of this website is for your general information and use only</li>
                    <li>All orders are subject to availability and confirmation of the order price</li>
                    <li>Delivery times may vary according to availability</li>
                    <li>Prices are subject to change without notice</li>
                  </ul>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Cookies" defaultOpen={false}>
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <div className="text-sm space-y-6">
                  <p>
                    Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
                  </p>
                  <p>
                    You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer.
                  </p>
                  <div className="pt-4">
                    <LocalizedClientLink href="/cookie-policy" className="underline hover:text-gray-600">
                      View our Cookie Policy
                    </LocalizedClientLink>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Your Rights" defaultOpen={false}>
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <div className="text-sm space-y-6">
                  <p>Under data protection laws, you have rights including:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Your right of access</li>
                    <li>Your right to rectification</li>
                    <li>Your right to erasure</li>
                    <li>Your right to restriction of processing</li>
                    <li>Your right to data portability</li>
                    <li>Your right to object</li>
                  </ul>
                  <p className="pt-4">
                    For more information about these rights, please contact us at{" "}
                    <a href="mailto:privacy@houseofjosephlynch.com" className="underline hover:text-gray-600">
                      privacy@houseofjosephlynch.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </div>
      </div>
    </>
  )
} 


