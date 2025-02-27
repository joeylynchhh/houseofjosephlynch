import { Metadata } from "next"
import CollapsibleSection from "@modules/common/components/collapsible-section"

export const metadata: Metadata = {
  title: "Contact | House of Joseph Lynch",
  description: "Contact House of Joseph Lynch for any inquiries or support.",
}

export default function ContactPage() {
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Header Section */}
      <div className="px-4 py-12 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-light">Help & Info</h1>
          <h1 className="text-2xl font-light">Contact Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4">
        <CollapsibleSection title="Contact Us" defaultOpen={true}>
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
                  <div className="space-x-4">
                    <a href="https://facebook.com/houseofjosephlynch" className="text-sm underline hover:text-gray-600">Facebook</a>
                    <a href="https://instagram.com/houseofjosephlynch" className="text-sm underline hover:text-gray-600">Instagram</a>
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
                    Click the chat icon when available to connect instantly with our team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Customer Service Opening Hours">
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-1">
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
                <p className="mb-1">Warehouse: House of Joseph Lynch</p>
                <p>Santo Domingo</p>
                <p>Dominican Republic</p>
              </div>
              <div className="text-sm">
                <p className="mb-1">Head Office: House of Joseph Lynch</p>
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
                <a href="/delivery-returns" className="underline hover:text-gray-600">
                  here
                </a>
              </p>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  )
} 