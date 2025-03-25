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
      {/* Hero Section */}
      <div className="grid grid-cols-2 mt-[140px] ml-[140px]">
        <div className="relative aspect-square">
          <Image
            src="/store-interior-1.jpg"
            alt="House of Joseph Lynch Store Interior"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-xl px-16">
            <h2 className="text-xl font-extralight text-center">The Vision</h2>
            <div className="w-full h-[0.5px] bg-[#e5e5e5] my-8"></div>
            <p className="text-sm font-extralight leading-loose text-center">
              Founded in 2013 by Reece Wabara, Manière De Voir exists to bridge the gap between 
              high fashion and the high street. Artfully blending design-led details and 
              extraordinary fits, Reece's vision of high quality, attainable pieces is as relevant today 
              as it was when he started the brand.
            </p>
          </div>
        </div>
      </div>

      {/* For the Tastemakers Section */}
      <div className="py-32">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-center text-xl font-extralight">For the Tastemakers</h2>
          <div className="w-full h-[0.5px] bg-[#e5e5e5] my-8"></div>
          <p className="text-sm font-extralight leading-loose text-center">
            Our mission is to craft distinctive, timeless pieces with impeccable fits that transcend seasons. 
            For tastemakers who embody our vision, we are dedicated to blending innovation with elegance, 
            creating designs that captivate today and become enduring icons of style for years to come.
          </p>
        </div>
      </div>

      {/* In-House Design Section */}
      <div className="grid grid-cols-2 gap-32 px-4 py-32">
        <div>
          <h2 className="text-xl font-extralight">In-House Design</h2>
          <div className="w-full h-[0.5px] bg-[#e5e5e5] my-8"></div>
          <div className="space-y-12 text-sm font-extralight">
            <p className="text-center leading-loose">
              Our in-house design team meticulously craft every product, using 
              their experience and knowledge to create truly unique pieces that 
              resonate with our audience.
            </p>
            <p className="text-center leading-loose">
              We expertly source and create durable, innovative fabrics and trims, 
              whilst analysing garment construction tirelessly to ensure every piece 
              stands the test of time.
            </p>
            <p className="text-center leading-loose">
              Fit is paramount to every great product and the foundation of our 
              designs. We carefully review every measurement on a garment model, 
              ensuring each silhouette is optimised.
            </p>
          </div>
        </div>
        <div className="relative aspect-square">
          <Image
            src="/design-process.jpg"
            alt="House of Joseph Lynch Design Process"
            fill
            className="object-cover grayscale"
          />
        </div>
      </div>

      {/* Store Interior Image */}
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/store-interior-4.jpg"
          alt="House of Joseph Lynch Store Interior"
          fill
          className="object-cover grayscale"
        />
      </div>

      {/* Flagship Store Section */}
        
        <div className="max-w-4xl mx-auto text-center space-y-16 px-4">
          <div>
            <h2 className="text-xl font-extralight">Flagship Store</h2>
            <div className="w-full h-[0.5px] bg-[#e5e5e5] my-8"></div>
          </div>
          <p className="text-sm font-extralight leading-loose">
            Coinciding with our 10th anniversary, we open the doors to our London flagship store on Wednesday 13th December 2023.
          </p>
          <p className="text-sm font-extralight leading-loose">
            "A decade in the making, we are delighted to unveil our flagship store at 354 Oxford Street, London, marking our brand's 10th anniversary. I designed the store with my heart and soul, hoping to spark the transformation needed to revive the perception and allure of the high street. A sincere thank you to the team, the customers, and everyone who has supported the business & myself throughout this journey. Here's to another 10 years."
          </p>
          <div className="pt-12">
            <p className="text-sm font-extralight italic mb-2">Reece Wabara</p>
            <p className="text-sm font-extralight">Founder and CEO</p>
          </div>
        </div>
      </div>
    </div>
  )
} 