import { Metadata } from "next"
import CollapsibleSection from "@modules/common/components/collapsible-section"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Nav from "@modules/layout/templates/nav"

export const metadata: Metadata = {
  title: "Terms & Conditions | House of Joseph Lynch",
  description: "Terms and conditions for using House of Joseph Lynch's services and website.",
}

export default function TermsOfServicePage() {
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
            <span className="text-black">Terms & Conditions</span>
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
          <CollapsibleSection title="Information About the Website and Manière De Voir Goods" defaultOpen={false}>
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <div className="text-sm space-y-6">
                  <p>
                    This website is operated by House of Joseph Lynch. Throughout the site, the terms "we", "us" and "our" refer to House of Joseph Lynch. We offer this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
                  </p>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Purchasing Goods Online" defaultOpen={false}>
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <div className="text-sm space-y-6">
                  <p>By placing an order through this site, you warrant that:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>You are legally capable of entering into binding contracts</li>
                    <li>You are at least 18 years old</li>
                    <li>The information you provide during the ordering process is accurate and complete</li>
                    <li>The payment details you provide are valid and correct</li>
                  </ul>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Use License" defaultOpen={false}>
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <div className="text-sm space-y-6">
                  <p>Permission is granted to temporarily download one copy of the materials (information or software) on House of Joseph Lynch's website for personal, non-commercial transitory viewing only.</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Disclaimer" defaultOpen={false}>
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <div className="text-sm space-y-6">
                  <p>The materials on House of Joseph Lynch's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Links" defaultOpen={false}>
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <div className="text-sm space-y-6">
                  <p>House of Joseph Lynch has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by House of Joseph Lynch of the site. Use of any such linked website is at the user's own risk.</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Site Terms" defaultOpen={false}>
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <div className="text-sm space-y-6">
                  <p>We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes.</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Governing Law" defaultOpen={false}>
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <div className="text-sm space-y-6">
                  <p>These terms and conditions are governed by and construed in accordance with the laws of the Dominican Republic and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Klarna" defaultOpen={false}>
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <div className="text-sm space-y-6">
                  <p>In cooperation with Klarna Bank AB (publ), we offer you the following payment methods. Payment will be processed by Klarna.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Pay in 30 days</li>
                    <li>Pay in 3 installments</li>
                    <li>Financing</li>
                  </ul>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="California Privacy Laws" defaultOpen={false}>
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <div className="text-sm space-y-6">
                  <p>If you are a California resident, you have specific rights regarding your personal information. For more information, please see our Privacy Policy.</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </div>
      </div>
    </>
  )
} 