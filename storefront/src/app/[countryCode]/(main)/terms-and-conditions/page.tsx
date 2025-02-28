import { Metadata } from "next"
import CollapsibleSection from "@modules/common/components/collapsible-section"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Terms & Conditions | House of Joseph Lynch",
  description: "Terms and conditions for using House of Joseph Lynch's services and website.",
}

export default function TermsOfServicePage() {
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Top Navigation Links */}
      <div className="px-4 py-8">
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
          <h1 className="text-xl font-light">Help & Info</h1>
          <h1 className="text-xl font-light">Terms & Conditions</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4">
        <CollapsibleSection title="Information About the Website and Manière De Voir Goods" defaultOpen={false}>
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-6">
                <p></p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Purchasing Goods Online" defaultOpen={false}>
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

        <CollapsibleSection title="Use License" defaultOpen={false}>
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-6">
                <p></p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Disclaimer" defaultOpen={false}>
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-6">
                <p></p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Links" defaultOpen={false}>
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-6">
                <p></p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Site Terms" defaultOpen={false}>
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-6">
                <p></p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Governing Law" defaultOpen={false}>
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-6">
                <p></p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Klarna" defaultOpen={false}>
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-6">
                <p></p>
                <ul className="list-disc pl-5 space-y-2">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="California Privacy Laws" defaultOpen={false}>
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-6">
                <p></p>
              </div>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  )
} 