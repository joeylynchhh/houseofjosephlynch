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
        <div className="px-4 py-8">
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
            <h1 className="text-xl font-light">Help & Info</h1>
            <h1 className="text-xl font-light">Privacy Policy</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4">
          <CollapsibleSection title="Privacy Policy" defaultOpen={false}>
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <div className="text-sm space-y-6">
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Terms & Conditions" defaultOpen={false}>
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <div className="text-sm space-y-6">
                  <p></p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Cookies" defaultOpen={false}>
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <div className="text-sm space-y-6">
                  <p></p>
                  <p></p>
                  <div className="pt-4">
                    <LocalizedClientLink href="/cookie-policy" className="underline hover:text-gray-600">
                      
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
                  <p></p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <p className="pt-4">
                    <a href="mailto:privacy@houseofjosephlynch.com" className="underline hover:text-gray-600">
                      
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


