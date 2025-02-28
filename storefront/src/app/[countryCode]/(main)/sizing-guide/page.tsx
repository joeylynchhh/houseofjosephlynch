import { Metadata } from "next"
import CollapsibleSection from "@modules/common/components/collapsible-section"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Nav from "@modules/layout/templates/nav"

export const metadata: Metadata = {
  title: "Sizing Guide | House of Joseph Lynch",
  description: "Size guide and measurement information for House of Joseph Lynch products.",
}

export default function SizingGuidePage() {
  return (
    <>
      <Nav />
      <div className="max-w-[1440px] mx-auto">
        {/* Top Navigation Links */}
        <div className="px-4 py-8 pt-18">
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
                <p className="text-gray-600">Sizing</p>
                <p className="text-gray-600">Measurements</p>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <CollapsibleSection title="Men's Sizing" defaultOpen={false}>
                <div className="flex justify-between items-start">
                  <div className="flex-1 max-w-2xl ml-auto">
                    <div className="text-sm space-y-6">
                      <p className="font-light">Our men's clothing is designed to fit true to size. For the best fit:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Measure your chest, waist, and hips</li>
                        <li>Compare your measurements to our size chart</li>
                        <li>If between sizes, we recommend sizing up</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="How to Measure" defaultOpen={false}>
                <div className="flex justify-between items-start">
                  <div className="flex-1 max-w-2xl ml-auto">
                    <div className="text-sm space-y-6">
                      <p className="font-light">For accurate measurements:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Use a flexible tape measure</li>
                        <li>Measure directly against your body</li>
                        <li>Stand straight and relaxed</li>
                        <li>Keep the tape measure level</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Size Conversion Chart" defaultOpen={false}>
                <div className="flex justify-between items-start">
                  <div className="flex-1 max-w-2xl ml-auto">
                    <div className="text-sm space-y-6">
                      <p className="font-light">
                        For international size conversions and detailed measurements, please refer to our size charts below.
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