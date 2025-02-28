import { Metadata } from "next"
import CollapsibleSection from "@modules/common/components/collapsible-section"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Nav from "@modules/layout/templates/nav"

export const metadata: Metadata = {
  title: "Payments | House of Joseph Lynch",
  description: "Payment methods and information for House of Joseph Lynch.",
}

export default function PaymentsPage() {
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
            <span className="text-black">Payments</span>
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
          <div className="flex">
            {/* Left Column - Categories */}
            <div className="w-[200px] pt-8">
              <div className="space-y-4 text-sm">
                <p className="text-gray-600 hover:text-black cursor-pointer">Payments</p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <CollapsibleSection title="How Can I Pay?" defaultOpen={false}>
                <div className="flex justify-between items-start">
                  <div className="flex-1 max-w-2xl ml-auto">
                    <div className="text-sm space-y-6">
                      <div className="space-y-4">
                        <p className="font-light">We accept the following payment methods:</p>
                        <div className="space-y-2">
                          <p className="font-light">• Credit/Debit Cards (Visa, Mastercard, American Express)</p>
                          <p className="font-light">• Klarna - Pay in 30 days</p>
                          <p className="font-light">• Klarna - Pay in 3 installments</p>
                          <p className="font-light">• Apple Pay</p>
                          <p className="font-light">• Google Pay</p>
                          <p className="font-light">• PayPal</p>
                        </div>
                        <p className="text-gray-600 text-xs pt-2">
                          *All transactions are secure and encrypted. Your payment information is never stored on our servers.
                        </p>
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
                        <p className="font-light">
                          Yes, you can exchange your items within 30 days of receipt. Please note:
                        </p>
                        <div className="space-y-2">
                          <p className="font-light">• Items must be unworn and in original condition</p>
                          <p className="font-light">• All original tags must be attached</p>
                          <p className="font-light">• Original packaging must be included</p>
                          <p className="font-light">• Exchanges can be processed in-store or via post</p>
                          <p className="font-light">• For postal exchanges, standard delivery fees apply</p>
                        </div>
                        <div className="pt-4">
                          <LocalizedClientLink 
                            href="/delivery-returns" 
                            className="text-black hover:text-gray-600 underline font-light"
                          >
                            View our full returns policy
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
    </>
  )
} 