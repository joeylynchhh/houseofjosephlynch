import type { Metadata } from "next"
import Image from "next/image"
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
        <div className="px-4 py-8 pt-24">
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
            {/* Right Column - Content */}
            <div className="flex-1">
              <CollapsibleSection title="Shirts" defaultOpen={false}>
                <div className="flex flex-col space-y-6">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src="/180shirt.png.webp"
                        alt="Shirt sizing guide 1"
                        width={450}
                        height={600}
                        priority
                      />
                    </div>
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src="/300shirt.png.webp"
                        alt="Shirt sizing guide 2"
                        width={450}
                        height={600}
                        priority
                      />
                    </div>
                  </div>
                  <div className="text-sm space-y-4">
                    <p className="font-light">Our shirts are designed for a comfortable, tailored fit.</p>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Crew Necks" defaultOpen={false}>
                <div className="flex flex-col space-y-6">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src="/450crew.png.webp"
                        alt="Crew neck sizing guide 1"
                        width={450}
                        height={600}
                        priority
                      />
                    </div>
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src="/600crew.png.webp"
                        alt="Crew neck sizing guide 2"
                        width={450}
                        height={600}
                        priority
                      />
                    </div>
                  </div>
                  <div className="text-sm space-y-4">
                    <p className="font-light">Our crew necks provide a classic, relaxed fit.</p>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Sweatshirts" defaultOpen={false}>
                <div className="flex flex-col space-y-6">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src="/450Hoodie.png.webp"
                        alt="Sweatshirt sizing guide 1"
                        width={450}
                        height={600}
                        priority
                      />
                    </div>
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src="/600Hoodie.png.webp"
                        alt="Sweatshirt sizing guide 2"
                        width={450}
                        height={600}
                        priority
                      />
                    </div>
                  </div>
                  <div className="text-sm space-y-4">
                    <p className="font-light">Our sweatshirts are designed for optimal comfort and style.</p>
                  </div>
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Sweatpants" defaultOpen={false}>
                <div className="flex flex-col space-y-6">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src="/450Sweatpants.jpg.webp"
                        alt="Sweatpants sizing guide 1"
                        width={450}
                        height={600}
                        priority
                      />
                    </div>
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src="/600Sweatpants.png.webp"
                        alt="Sweatpants sizing guide 2"
                        width={450}
                        height={600}
                        priority
                      />
                    </div>
                  </div>
                  <div className="text-sm space-y-4">
                    <p className="font-light">Our sweatpants feature a comfortable, modern fit.</p>
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