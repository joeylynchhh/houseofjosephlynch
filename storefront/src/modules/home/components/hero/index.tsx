import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="h-screen w-full relative bg-ui-bg-subtle">
      {/* Background images container - lower z-index */}
      <div className="absolute inset-0 w-full h-full flex z-0">
        <a 
          href="/collections/womens"
          className="w-1/2 h-full relative group cursor-pointer block z-[1]"
        >
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundImage: "url('/femalemodel1.png.webp')",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-transparent to-black/50">
            </div>
          </div>
        </a>

        <a 
          href="/collections/mens"
          className="w-1/2 h-full relative group cursor-pointer block z-[1]"
        >
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundImage: "url('/malemodel1.png.webp')",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-transparent to-black/50">
            </div>
          </div>
        </a>
      </div>

      {/* Content overlay - keep higher z-index */}
      <div className="pointer-events-none absolute inset-0 z-[2] flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-transparent font-normal"
          >
            Welcome to the House of Joseph Lynch.
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-transparent font-normal"
          >
            The finest streetwear in the Dominican Republic.
          </Heading>
        </span>
        <a
          href="/store"
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto"
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
