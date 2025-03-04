'use client'

import { usePathname } from "next/navigation"

export default function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  
  return (
    <div className={`fixed top-0 inset-x-0 z-50 ${isHomePage ? 'bg-transparent' : 'bg-white'}`}>
      <header className="relative h-16 mx-auto duration-200">
        <nav className={`content-container txt-xsmall-plus flex items-center justify-between w-full h-full text-small-regular ${isHomePage ? 'text-white' : 'text-black'}`}>
          {children}
        </nav>
      </header>
    </div>
  )
} 