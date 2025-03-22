import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"
import NewsletterForm from "@modules/common/components/newsletter-form"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="w-full relative">
      {/* Delivery info banner */}
      <div className="w-full bg-[#3c3535] text-white z-[3] flex justify-evenly px-8 h-[75px] items-center relative">
        <LocalizedClientLink href="/delivery-returns" className="hover:underline whitespace-nowrap text-sm font-light tracking-[0.15em]">
          Free Delivery Over $150*
        </LocalizedClientLink>
        <LocalizedClientLink href="/delivery-returns" className="hover:underline whitespace-nowrap text-sm font-light tracking-[0.15em]">
          DR Next Day Delivery
        </LocalizedClientLink>
        <LocalizedClientLink href="/delivery-returns" className="hover:underline whitespace-nowrap text-sm font-light tracking-[0.15em]">
          Free In-Store Returns
        </LocalizedClientLink>
        <LocalizedClientLink href="/delivery-returns" className="hover:underline whitespace-nowrap text-sm font-light tracking-[0.15em]">
          $2.99 Fixed Fee DR Postal Returns
        </LocalizedClientLink>
      </div>
      <div className="content-container flex flex-col w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {/* Newsletter Section */}
          <div className="flex flex-col gap-y-8">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              House of Joseph Lynch
            </LocalizedClientLink>
            <div className="flex flex-col gap-y-8">
              <div className="relative">
                <label htmlFor="email-input" className="absolute -top-6 left-0 text-sm font-light tracking-[0.15em]">
                  Email
                </label>
                <input
                  id="email-input"
                  type="email"
                  className="w-full pb-1 border-b border-gray-300 focus:outline-none text-sm font-light tracking-[0.15em]"
                />
              </div>
              <div className="flex flex-col gap-y-6">
                <div className="flex gap-x-12">
                  <label className="flex items-center gap-x-3 cursor-pointer">
                    <div className="relative w-5 h-5 border border-gray-300">
                      <input 
                        type="checkbox" 
                        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                      />
                    </div>
                    <span className="text-ui-fg-subtle txt-small">Woman</span>
                  </label>
                  <label className="flex items-center gap-x-3 cursor-pointer">
                    <div className="relative w-5 h-5 border border-gray-300">
                      <input 
                        type="checkbox" 
                        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                      />
                    </div>
                    <span className="text-ui-fg-subtle txt-small">Man</span>
                  </label>
                  <label className="flex items-center gap-x-3 cursor-pointer">
                    <div className="relative w-5 h-5 border border-gray-300">
                      <input 
                        type="checkbox" 
                        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                      />
                    </div>
                    <span className="text-ui-fg-subtle txt-small">All</span>
                  </label>
                </div>
                <button 
                  type="submit"
                  className="w-full h-[40px] border border-gray-300 text-ui-fg-subtle txt-small hover:bg-black hover:text-white transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Brand Section */}
          <div className="flex flex-col items-center">
          </div>

          {/* Links Section */}
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base"> </span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <a
                    href="/contact"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/delivery-returns"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/delivery-returns"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-and-conditions"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/payments"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Payments
                  </a>
                </li>
                <li>
                  <a
                    href="/sizing-guide"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Sizing Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} House of Joseph Lynch. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
