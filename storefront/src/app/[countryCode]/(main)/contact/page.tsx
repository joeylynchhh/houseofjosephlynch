import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | House of Joseph Lynch",
  description: "Contact House of Joseph Lynch for any inquiries or support.",
}

export default function ContactPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-16">
      {/* Main Content */}
      <div className="mb-16">
        <h1 className="text-3xl font-light mb-12 uppercase">Contact Us</h1>
      </div>

      {/* Contact Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Contact Methods Section */}
        <div>
          <h2 className="text-xl font-light mb-8">Contact Us</h2>
          <div className="space-y-6 text-sm">
            <div>
              <p className="mb-2">Chat on</p>
              <a href="https://wa.me/yourwhatsappnumber" className="underline hover:text-gray-600">
                WhatsApp
              </a>
            </div>
            <div>
              <p className="mb-2">DM us via</p>
              <div className="space-x-4">
                <a href="https://facebook.com/houseofjosephlynch" className="underline hover:text-gray-600">
                  Facebook
                </a>
                <a href="https://instagram.com/houseofjosephlynch" className="underline hover:text-gray-600">
                  Instagram
                </a>
                <a href="https://twitter.com/houseofjosephlynch" className="underline hover:text-gray-600">
                  Twitter
                </a>
              </div>
            </div>
            <div>
              <p className="mb-2">E-mail us</p>
              <a href="mailto:contact@houseofjosephlynch.com" className="underline hover:text-gray-600">
                contact@houseofjosephlynch.com
              </a>
            </div>
            <div>
              <p className="mb-2">Live Chat</p>
              <p className="text-gray-600">
                Click the chat icon when available to connect instantly with our team
              </p>
            </div>
          </div>
        </div>

        {/* Business Hours & Address Section */}
        <div>
          <h2 className="text-xl font-light mb-8">Customer Service Opening Hours</h2>
          <div className="space-y-6 text-sm">
            <div>
              <p>Monday - Friday: 08:00-20:00</p>
              <p>Saturday - Sunday: 09:00-17:00</p>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-light mb-8">Address</h2>
              <div className="space-y-4">
                <p>
                  Warehouse: House of Joseph Lynch<br />
                  Santo Domingo<br />
                  Dominican Republic
                </p>
                <p>
                  Head Office: House of Joseph Lynch<br />
                  Santo Domingo<br />
                  Dominican Republic
                </p>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-gray-600">VAT No: GB123456789</p>
            </div>
          </div>
        </div>
      </div>

      {/* Returns Section */}
      <div className="border-t border-gray-200 pt-12">
        <h2 className="text-xl font-light mb-8">Where to Send Returns</h2>
        <div className="text-sm">
          <p className="mb-4">Please see details <a href="/delivery-returns" className="underline hover:text-gray-600">here</a></p>
        </div>
      </div>
    </div>
  )
} 