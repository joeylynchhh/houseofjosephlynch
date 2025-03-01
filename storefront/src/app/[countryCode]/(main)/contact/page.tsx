import { Metadata } from "next"
import CollapsibleSection from "@modules/common/components/collapsible-section"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Nav from "@modules/layout/templates/nav"

export const metadata: Metadata = {
  title: "Contact | House of Joseph Lynch",
  description: "Contact House of Joseph Lynch for any inquiries or support.",
}

export default function ContactPage() {
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
            <span className="text-black">Contact Us</span>
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
          <CollapsibleSection title="Contact Us" defaultOpen={false}>
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <div className="space-y-8">
                  <div>
                    <p className="text-sm mb-2">Chat on</p>
                    <a href="https://wa.me/16109378696" className="text-sm underline hover:text-gray-600">
                      WhatsApp
                    </a>
                  </div>
                  <div>
                    <p className="text-sm mb-2">DM us via</p>
                    <div className="space-x-2">
                      <a href="https://facebook.com/houseofjosephlynch" className="text-sm underline hover:text-gray-600">Facebook</a>
                      <span className="text-sm text-gray-400">or</span>
                      <a href="https://instagram.com/houseofjosephlynch" className="text-sm underline hover:text-gray-600">Instagram</a>
                      <span className="text-sm text-gray-400">or</span>
                      <a href="https://twitter.com/houseofjosephlynch" className="text-sm underline hover:text-gray-600">Twitter</a>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm mb-2">E-mail us</p>
                    <a href="mailto:contact@houseofjosephlynch.com" className="text-sm underline hover:text-gray-600">
                      contact@houseofjosephlynch.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm mb-2">Live Chat</p>
                    <p className="text-sm text-gray-600">
                      Click the chat icon when available to connect instantly with our team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Customer Service Opening Hours">
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <div className="text-sm space-y-2">
                  <p>Monday - Friday: 08:00-20:00</p>
                  <p>Saturday - Sunday: 09:00-17:00</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Address">
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto space-y-8">
                <div className="text-sm">
                  <p className="mb-2">Warehouse: House of Joseph Lynch</p>
                  <p>Santo Domingo</p>
                  <p>Dominican Republic</p>
                </div>
                <div className="text-sm">
                  <p className="mb-2">Head Office: House of Joseph Lynch</p>
                  <p>Santo Domingo</p>
                  <p>Dominican Republic</p>
                </div>
                <p className="text-sm text-gray-600 pt-4">VAT No: GB123456789</p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Where to Send Returns">
            <div className="flex justify-between items-start">
              <div className="flex-1 max-w-2xl ml-auto">
                <p className="text-sm">
                  Please see details{" "}
                  <LocalizedClientLink href="/delivery-returns" className="underline hover:text-gray-600">
                    here
                  </LocalizedClientLink>
                </p>
              </div>
            </div>
          </CollapsibleSection>
        </div>
      </div>
    </>
  )
} 