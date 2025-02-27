import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="h-[calc(100vh-75px)] w-full relative bg-ui-bg-subtle">
      {/* Background images container */}
      <div className="absolute inset-0 w-full h-full flex z-0">
        <LocalizedClientLink 
          href="/womens"
          className="w-1/2 h-full relative group cursor-pointer z-[1]"
        >
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundImage: "url('/ZIPPER4504_fd50cec1-1eb8-4150-b158-1a6a3c4dd625.png.webp')",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-transparent to-black/50">
              <div className="absolute bottom-8 left-8">
                <span className="text-white text-3xl font-light pointer-events-none">Women</span>
              </div>
            </div>
          </div>
        </LocalizedClientLink>

        <LocalizedClientLink 
          href="/mens"
          className="w-1/2 h-full relative group cursor-pointer z-[1]"
        >
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundImage: "url('/1000GSMHOODIE1.png.webp')",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-transparent to-black/50">
              <div className="absolute bottom-8 left-8">
                <span className="text-white text-3xl font-light pointer-events-none">Men</span>
              </div>
            </div>
          </div>
        </LocalizedClientLink>
      </div>

      {/* Existing content overlay */}
      <div className="absolute inset-0 z-[2] flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-white font-normal"
          >
            Welcome to the House of Joseph Lynch!
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-white font-normal"
          >
            The finest streetwear in the Dominican Republic.
          </Heading>
        </span>
        <a
          href="https://houseofjosephlynch.com/dk/store"
          target="_blank"
          rel="noreferrer"
        >
          <h1 className="text-white" style={{ textDecoration: "underline" }}>
            Enter the shop
          </h1>
        </a>
      </div>
    </div>
  )
}

export default Hero
