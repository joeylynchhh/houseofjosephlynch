import { Metadata } from "next"
import CollapsibleSection from "@modules/common/components/collapsible-section"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Nav from "@modules/layout/templates/nav"

export const metadata: Metadata = {
  title: "Delivery & Returns | House of Joseph Lynch",
  description: "Information about our delivery services and returns policy.",
}

export default function DeliveryReturnsPage() {
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
            <span className="text-black">Delivery and Returns</span>
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
                <p className="text-gray-600">Delivery</p>
                <p className="text-gray-600">Returns</p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
            <CollapsibleSection title="Deliver To: US | EU | CA | AU">
                <div className="flex justify-between items-start">
                  <div className="flex-1 max-w-2xl ml-auto">
                    <div className="text-sm space-y-6">
                      <p>International Priority Delivery (3-5 working days)</p>
                      <p>Express Shipping Available</p>
                    </div>
                  </div>
                </div>
              </CollapsibleSection>
              

              <CollapsibleSection title="Deliver To: DR">
                <div className="flex justify-between items-start">
                  <div className="flex-1 max-w-2xl ml-auto">
                    <div className="text-sm space-y-6">
                      <p>Same Day Priority Delivery in Santo Domingo</p>
                      <p>Express Shipping Available (1-2 working days)</p>
                      <p>Standard Delivery (3-5 working days)</p>
                    </div>
                  </div>
                </div>
              </CollapsibleSection>
              
              <CollapsibleSection title="Deliver To: UK">
                <div className="flex justify-between items-start">
                  <div className="flex-1 max-w-2xl ml-auto">
                    <div className="text-sm space-y-6">
                      <p>Standard Delivery (3-5 working days): FREE on orders over £150</p>
                      <p>Next Day Delivery: £5.99 (Order by 8pm)</p>
                    </div>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Deliver To: Monaco">
                <div className="flex justify-between items-start">
                  <div className="flex-1 max-w-2xl ml-auto">
                    <div className="text-sm space-y-6">
                      <p>International Standard Delivery (5-7 working days)</p>
                      <p>Express Delivery Available</p>
                    </div>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Deliver To: United Arab Emirates & Saudi Arabia">
                <div className="flex justify-between items-start">
                  <div className="flex-1 max-w-2xl ml-auto">
                    <div className="text-sm space-y-6">
                      <p>International Priority Delivery (3-5 working days)</p>
                    </div>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Deliver To: Switzerland">
                <div className="flex justify-between items-start">
                  <div className="flex-1 max-w-2xl ml-auto">
                    <div className="text-sm space-y-6">
                      <p>International Standard Delivery (5-7 working days)</p>
                    </div>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Deliver To: Norway">
                <div className="flex justify-between items-start">
                  <div className="flex-1 max-w-2xl ml-auto">
                    <div className="text-sm space-y-6">
                      <p>International Standard Delivery (5-7 working days)</p>
                    </div>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Deliver To: Guernsey & Jersey">
                <div className="flex justify-between items-start">
                  <div className="flex-1 max-w-2xl ml-auto">
                    <div className="text-sm space-y-6">
                      <p>Standard Delivery (3-5 working days)</p>
                    </div>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Deliver To: Rest of the World">
                <div className="flex justify-between items-start">
                  <div className="flex-1 max-w-2xl ml-auto">
                    <div className="text-sm space-y-6">
                      <p>International Standard Delivery (7-10 working days)</p>
                    </div>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Order Tracking">
                <div className="flex justify-between items-start">
                  <div className="flex-1 max-w-2xl ml-auto">
                    <div className="text-sm space-y-6">
                      <p>
                        Track your order{" "}
                        <LocalizedClientLink href="/orders" className="underline hover:text-gray-600">
                          here
                        </LocalizedClientLink>
                      </p>
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