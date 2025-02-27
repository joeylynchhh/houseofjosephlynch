import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | House of Joseph Lynch",
  description: "Contact House of Joseph Lynch for any inquiries or support.",
}

export default function ContactPage() {
  return (
    <div className="content-container flex flex-col items-center py-16">
      <h1 className="text-2xl-semi mb-8">Contact Us</h1>
      <div className="max-w-2xl w-full">
        <div className="flex flex-col gap-y-8">
          <div>
            <h2 className="text-xl-semi mb-4">Get in Touch</h2>
            <p className="text-base-regular">
              For any inquiries, please email us at:{" "}
              <a 
                href="mailto:info@houseofjosephlynch.com" 
                className="underline"
              >
                info@houseofjosephlynch.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl-semi mb-4">Business Hours</h2>
            <p className="text-base-regular">
              Monday - Friday: 9:00 AM - 5:00 PM (GMT)
            </p>
          </div>

          <div>
            <h2 className="text-xl-semi mb-4">Location</h2>
            <p className="text-base-regular">
              Dominican Republic
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 