"use client"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"
import { HttpTypes } from "@medusajs/types"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Product Information",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Shipping & Returns",
      component: <ShippingInfoTab />,
    },
    {
      label: "Sizing Guide",
      component: <SizingGuideTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Material</span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Country of origin</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Type</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Weight</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Dimensions</span>
            <p>
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Fast delivery</span>
            <p className="max-w-sm">
              Your package will arrive in 3-5 business days at your pick up
              location or in the comfort of your home.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Simple exchanges</span>
            <p className="max-w-sm">
              Is the fit not quite right? No worries - we&apos;ll exchange your
              product for a new one.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Easy returns</span>
            <p className="max-w-sm">
              Just return your product and we&apos;ll refund your money. No
              questions asked – we&apos;ll do our best to make sure your return
              is hassle-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const SizingGuideTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        {/* Size Chart */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left font-semibold">Size</th>
                <th className="py-2 px-4 text-left font-semibold">Chest (cm)</th>
                <th className="py-2 px-4 text-left font-semibold">Waist (cm)</th>
                <th className="py-2 px-4 text-left font-semibold">Hip (cm)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">XS</td>
                <td className="py-2 px-4">82-87</td>
                <td className="py-2 px-4">63-68</td>
                <td className="py-2 px-4">87-92</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">S</td>
                <td className="py-2 px-4">87-92</td>
                <td className="py-2 px-4">68-73</td>
                <td className="py-2 px-4">92-97</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">M</td>
                <td className="py-2 px-4">92-97</td>
                <td className="py-2 px-4">73-78</td>
                <td className="py-2 px-4">97-102</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">L</td>
                <td className="py-2 px-4">97-102</td>
                <td className="py-2 px-4">78-83</td>
                <td className="py-2 px-4">102-107</td>
              </tr>
              <tr>
                <td className="py-2 px-4">XL</td>
                <td className="py-2 px-4">102-107</td>
                <td className="py-2 px-4">83-88</td>
                <td className="py-2 px-4">107-112</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Measuring Guide */}
        <div>
          <h3 className="font-semibold mb-4">How to Measure</h3>
          <div className="grid gap-y-4">
            <div>
              <p className="font-medium">Chest</p>
              <p>Measure around the fullest part of your chest, keeping the tape horizontal.</p>
            </div>
            <div>
              <p className="font-medium">Waist</p>
              <p>Measure around your natural waistline, keeping the tape comfortably loose.</p>
            </div>
            <div>
              <p className="font-medium">Hip</p>
              <p>Measure around the fullest part of your hips, keeping the tape horizontal.</p>
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <p className="text-ui-fg-subtle">
            * These measurements are a guide only. If you're between sizes, choose the larger size for a more comfortable fit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
