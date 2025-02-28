import { Metadata } from "next"
import Nav from "@modules/layout/templates/nav"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

type Params = {
  searchParams: {
    sortBy?: SortOptions
    page?: string
  }
  params: {
    countryCode: string
  }
}

export default async function StorePage({ searchParams, params }: Params) {
  const { sortBy, page } = searchParams

  return (
    <>
      <Nav />
      <div className="pt-24">
        <StoreTemplate
          sortBy={sortBy}
          page={page}
          countryCode={params.countryCode}
        />
      </div>
    </>
  )
}
