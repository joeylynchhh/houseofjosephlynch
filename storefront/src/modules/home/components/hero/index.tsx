import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      {/* Background images container */}
      <div className="absolute inset-0 w-full h-full flex">
        <div 
          className="w-1/2 h-full bg-cover bg-center transition-transform duration-300 hover:scale-105"
          style={{
            backgroundImage: "url('/ZIPPER4504_fd50cec1-1eb8-4150-b158-1a6a3c4dd625.png.webp')",
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-20 flex items-end p-8">
            <span className="text-white text-3xl font-light">Woman</span>
          </div>
        </div>
        <div 
          className="w-1/2 h-full bg-cover bg-center transition-transform duration-300 hover:scale-105"
          style={{
            backgroundImage: "url('/1000GSMHOODIE1.png.webp')",
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-20 flex items-end p-8">
            <span className="text-white text-3xl font-light">Man</span>
          </div>
        </div>
      </div>

      {/* Existing content overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Welcome to the House of Joseph Lynch
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            The finest streetwear in the Dominican Republic.
          </Heading>
        </span>
        <a
          href="https://houseofjosephlynch.com/dk/store"
          target="_blank"
          rel="noreferrer"
        >
          <h1 style={{ textDecoration: "underline" }}>
            Enter the shop
          </h1>
        </a>
      </div>
    </div>
  )
}

export default Hero
