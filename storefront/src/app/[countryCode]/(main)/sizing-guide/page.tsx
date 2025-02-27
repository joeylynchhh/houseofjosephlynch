import { Metadata } from "next"
import CollapsibleSection from "@modules/common/components/collapsible-section"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Sizing Guide | House of Joseph Lynch",
  description: "Find your perfect fit with our detailed sizing guide for all House of Joseph Lynch garments.",
}

const HOODIES = [
  {
    title: "450 GSM HOODIE",
    image: "/450-gsm-hoodie-sizing.png",
    measurements: "/450-gsm-measurements.png"
  },
  {
    title: "600 GSM HOODIE",
    image: "/600-gsm-hoodie-sizing.png",
    measurements: "/600-gsm-measurements.png"
  },
  {
    title: "1000 GSM HOODIE",
    image: "/1000-gsm-hoodie-sizing.png",
    measurements: "/1000-gsm-measurements.png"
  }
]

export default function SizingGuidePage() {
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Top Navigation Links */}
      <div className="px-4 py-8">
        <div className="flex gap-x-4 text-sm font-light">
          <LocalizedClientLink href="/" className="text-gray-600 hover:text-black">
            Help & Info
          </LocalizedClientLink>
          <span className="text-gray-600">/</span>
          <span className="text-black">Sizing Guide</span>
        </div>
      </div>

      {/* Header Section */}
      <div className="px-4 py-8 border-t border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-light">Help & Info</h1>
          <h1 className="text-xl font-light">Sizing Guide</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4">
        <div className="flex">
          {/* Left Column - Categories */}
          <div className="w-[200px] pt-8">
            <div className="space-y-4 text-sm">
              <p className="text-gray-600 hover:text-black cursor-pointer">Sizing Guide</p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex-1">
            {HOODIES.map((hoodie) => (
              <CollapsibleSection key={hoodie.title} title={hoodie.title}>
                <div className="flex justify-between items-start">
                  <div className="flex-1 max-w-4xl ml-auto">
                    <div className="text-sm space-y-8">
                      <div className="grid grid-cols-2 gap-8">
                        {/* Hoodie Diagram */}
                        <div className="relative aspect-[3/4] w-full">
                          <Image
                            src={hoodie.image}
                            alt={`${hoodie.title} Measurement Guide`}
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>
                        {/* Measurements Table Image */}
                        <div className="relative aspect-[3/4] w-full">
                          <Image
                            src={hoodie.measurements}
                            alt={`${hoodie.title} Size Chart`}
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CollapsibleSection>
            ))}

            <CollapsibleSection title="Need Help?">
              <div className="flex justify-between items-start">
                <div className="flex-1 max-w-2xl ml-auto">
                  <div className="text-sm space-y-6">
                    <p className="font-light">
                      If you need help finding your perfect size, please{" "}
                      <LocalizedClientLink href="/contact" className="underline hover:text-gray-600">
                        contact us
                      </LocalizedClientLink>
                      . Our team will be happy to assist you.
                    </p>
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