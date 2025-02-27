import { Metadata } from "next"

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
        {/* Contact Us Section */}
        <div className="py-12 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-light">Contact Us</h2>
            <div className="flex-1 max-w-2xl">
              <div className="space-y-8">
                <div>
                  <p className="text-sm mb-2">Chat on</p>
                  <a href="https://wa.me/yourwhatsappnumber" className="text-sm underline hover:text-gray-600">
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
        </div>

        {/* Customer Service Hours Section */}
        <div className="py-12 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-light">Customer Service Opening Hours</h2>
            <div className="flex-1 max-w-2xl">
              <div className="text-sm space-y-1">
                <p>Monday - Friday: 08:00-20:00</p>
                <p>Saturday - Sunday: 09:00-17:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="py-12 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-light">Address</h2>
            <div className="flex-1 max-w-2xl space-y-8">
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
        </div>

        {/* Returns Section */}
        <div className="py-12 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-light">Where to Send Returns</h2>
            <div className="flex-1 max-w-2xl">
              <p className="text-sm">
                Please see details{" "}
                <a href="/delivery-returns" className="underline hover:text-gray-600">
                  here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 