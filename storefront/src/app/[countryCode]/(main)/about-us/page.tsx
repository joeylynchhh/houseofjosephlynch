import { Metadata } from "next"
import CollapsibleSection from "@modules/common/components/collapsible-section"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | House of Joseph Lynch",
  description: "Learn about House of Joseph Lynch, our story, values, and commitment to quality streetwear.",
}

export default function AboutUsPage() {
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Top Navigation Links */}
      <div className="px-4 py-8 pt-24">
        <div className="flex gap-x-4 text-sm font-light">
          <LocalizedClientLink href="/" className="text-gray-600 hover:text-black">
            Help & Info
          </LocalizedClientLink>
          <span className="text-gray-600">/</span>
          <span className="text-black">About Us</span>
        </div>
      </div>

      {/* Header Section */}
      <div className="px-4 py-8 border-t border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-light">Help & Info</h1>
          <h1 className="text-xl font-light">About Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4">
        {/* Store Image Grid */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          <div className="relative aspect-square w-full">
            <Image
              src="/store-interior-1.jpg"
              alt="House of Joseph Lynch Store Interior"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>
          <div className="relative aspect-square w-full">
            <Image
              src="/store-interior-2.jpg"
              alt="House of Joseph Lynch Store Display"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>
        </div>

        <CollapsibleSection title="The Vision" defaultOpen={true}>
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-6">
                <p className="text-center leading-relaxed">
                  Founded in 2013 by Reece Wabara, House of Joseph Lynch exists to bridge the gap between high fashion and the high street. Artfully blending design-led details and extraordinary fits, Reece's vision of high quality, attainable pieces is as relevant today as it was when he started the brand.
                </p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Our Story">
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-6">
                <div className="relative aspect-[16/9] w-full mb-6">
                  <Image
                    src="/store-interior-3.jpg"
                    alt="House of Joseph Lynch Store Interior"
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <p className="text-center leading-relaxed">
                  What began as a small collection in Santo Domingo has grown into a global fashion movement. Our journey is marked by an unwavering commitment to quality, innovation, and accessibility. Each piece in our collection tells a story of meticulous craftsmanship and contemporary design.
                </p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Design Philosophy">
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-6">
                <p className="text-center leading-relaxed">
                  Our design philosophy centers on creating pieces that seamlessly blend luxury with accessibility. We believe in timeless aesthetics with contemporary touches, exceptional quality at attainable price points, and innovative design details that set us apart.
                </p>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Visit Us">
          <div className="flex justify-between items-start">
            <div className="flex-1 max-w-2xl ml-auto">
              <div className="text-sm space-y-6">
                <div className="relative aspect-[16/9] w-full mb-6">
                  <Image
                    src="/store-exterior.jpg"
                    alt="House of Joseph Lynch Store Exterior"
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div className="text-center">
                  <p className="mb-4">Experience House of Joseph Lynch in person at our flagship store:</p>
                  <p className="font-light">Santo Domingo</p>
                  <p className="font-light">Dominican Republic</p>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  )
} 