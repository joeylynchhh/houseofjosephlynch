import { Metadata } from "next"
import CollapsibleSection from "@modules/common/components/collapsible-section"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Sizing Guide | House of Joseph Lynch",
  description: "Find your perfect fit with our detailed sizing guide for all House of Joseph Lynch garments.",
}

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
            <CollapsibleSection title="450 GSM HOODIE" defaultOpen={true}>
              <div className="flex justify-between items-start">
                <div className="flex-1 max-w-2xl ml-auto">
                  <div className="text-sm space-y-8">
                    {/* Hoodie Diagram */}
                    <div className="relative w-full aspect-[4/3] mb-8">
                      <Image
                        src="/hoodie-diagram.png"
                        alt="Hoodie Measurement Guide"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>

                    {/* Measurements Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="py-4 pr-8 font-light text-gray-600">CM / INCH</th>
                            <th className="py-4 px-8 font-light text-gray-600">PIECE LENGTH (A)</th>
                            <th className="py-4 px-8 font-light text-gray-600">CHEST WIDTH (B)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200">
                            <td className="py-4 pr-8 font-light">XS</td>
                            <td className="py-4 px-8 font-light">62 CM / 24.4"</td>
                            <td className="py-4 px-8 font-light">58 CM /22.8"</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-4 pr-8 font-light">S</td>
                            <td className="py-4 px-8 font-light">64 CM / 25.1"</td>
                            <td className="py-4 px-8 font-light">60 CM / 23.6"</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-4 pr-8 font-light">M</td>
                            <td className="py-4 px-8 font-light">66 CM / 25.9"</td>
                            <td className="py-4 px-8 font-light">62 CM / 24.4"</td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-4 pr-8 font-light">L</td>
                            <td className="py-4 px-8 font-light">68 CM / 26.7"</td>
                            <td className="py-4 px-8 font-light">64 CM / 25.1"</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="How to Measure">
              <div className="flex justify-between items-start">
                <div className="flex-1 max-w-2xl ml-auto">
                  <div className="text-sm space-y-4">
                    <p className="font-light">For the most accurate measurements:</p>
                    <div className="space-y-2">
                      <p className="font-light">• Piece Length (A): Measure from the highest point of the shoulder to the bottom hem</p>
                      <p className="font-light">• Chest Width (B): Measure across the chest from armpit to armpit</p>
                      <p className="font-light">• Use a flat surface and lay the garment flat</p>
                      <p className="font-light">• Ensure the garment is not stretched when measuring</p>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

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