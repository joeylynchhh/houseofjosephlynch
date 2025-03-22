import { Metadata } from "next"
import Hero from "@modules/home/components/hero"

export const metadata: Metadata = {
  title: "House of Joseph Lynch",
  description:
    "A performant ecommerce application built with Next.js 14 and Medusa.",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  return (
    <>
      <Hero />
    </>
  )
}
