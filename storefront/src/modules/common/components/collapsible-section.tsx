'use client'

import { useState } from "react"
import { ChevronDown } from "@medusajs/icons"

type CollapsibleSectionProps = {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

const CollapsibleSection = ({ title, children, defaultOpen = false }: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-8 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-light">{title}</h2>
        <ChevronDown 
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[1000px] pb-8' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default CollapsibleSection 