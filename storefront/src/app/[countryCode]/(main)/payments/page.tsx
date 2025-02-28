import { Metadata } from "next"
import CollapsibleSection from "@modules/common/components/collapsible-section"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Payments | House of Joseph Lynch",
  description: "Payment methods and information for House of Joseph Lynch.",
}

export default function PaymentsPage() {
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Top Navigation Links */}
      <div className="px-4 py-8">
        <div className="flex gap-x-4 text-sm font-light">
          <LocalizedClientLink href="/" className="text-gray-600 hover:text-black">
            Help & Info
          </LocalizedClientLink>
          <span className="text-gray-600">/</span>
          <span className="text-black">Payments</span>
        </div>
      </div>

      {/* Header Section */}
      <div className="px-4 py-8 border-t border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-light">Help & Info</h1>
          <h1 className="text-xl font-light">Payments</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4">
        <div className="flex">
          {/* Left Column - Categories */}
          <div className="w-[200px] pt-8">
            <div className="space-y-4 text-sm">
              <p className="text-gray-600 hover:text-black cursor-pointer"></p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex-1">
            <CollapsibleSection title="How Can I Pay?" defaultOpen={false}>
              <div className="flex justify-between items-start">
                <div className="flex-1 max-w-2xl ml-auto">
                  <div className="text-sm space-y-6">
                    <div className="space-y-4">
                      <p className="font-light"></p>
                      <div className="space-y-2">
                        <p className="font-light"></p>
                        <p className="font-light"></p>
                        <p className="font-light"></p>
                        <p className="font-light"></p>
                        <p className="font-light"></p>
                        <p className="font-light"></p>
                      </div>
                      <p className="text-gray-600 text-xs pt-2"></p>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Can I Exchange Instead of Refund?" defaultOpen={false}>
              <div className="flex justify-between items-start">
                <div className="flex-1 max-w-2xl ml-auto">
                  <div className="text-sm space-y-6">
                    <div className="space-y-4">
                      <p className="font-light"></p>
                      <div className="space-y-2">
                        <p className="font-light"></p>
                        <p className="font-light"></p>
                        <p className="font-light"></p>
                        <p className="font-light"></p>
                        <p className="font-light"></p>
                      </div>
                      <div className="pt-4">
                        <LocalizedClientLink 
                          href="/delivery-returns" 
                          className="text-black hover:text-gray-600 underline font-light"
                        >
                        </LocalizedClientLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleSection>
          </div>
        </div>
      </div>
    </div>
  )
} 