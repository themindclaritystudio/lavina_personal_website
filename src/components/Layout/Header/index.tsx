'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

import Logo from './Logo'
import { headerData } from '../Header/Navigation/menuData'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'

const Header: React.FC = () => {
const pathUrl = usePathname()
const { theme, setTheme } = useTheme()

const [navbarOpen, setNavbarOpen] = useState(false)
const [sticky, setSticky] = useState(false)

const mobileMenuRef = useRef<HTMLDivElement>(null)

const handleScroll = () => {
setSticky(window.scrollY >= 80)
}

const handleClickOutside = (event: MouseEvent) => {
if (
mobileMenuRef.current &&
!mobileMenuRef.current.contains(event.target as Node) &&
navbarOpen
) {
setNavbarOpen(false)
}
}

useEffect(() => {
window.addEventListener('scroll', handleScroll)
document.addEventListener('mousedown', handleClickOutside)

return () => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('mousedown', handleClickOutside)
}

}, [navbarOpen])

useEffect(() => {
document.body.style.overflow = navbarOpen ? 'hidden' : ''
}, [navbarOpen])

return (
<header
className={`fixed top-0 z-50 h-24 w-full py-1 transition-all ${
        sticky
          ? 'bg-white shadow-lg dark:bg-darklight dark:shadow-dark-md'
          : 'bg-white/95 backdrop-blur-sm dark:bg-darklight/90'
      }`}
> <div className="container mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-6"> <Logo />

    {/* Desktop Navigation */}
    <nav className="hidden grow items-center justify-center gap-8 lg:flex">
      {headerData.map((item, index) => (
        <HeaderLink key={index} item={item} />
      ))}
    </nav>

    {/* Right Actions */}
    <div className="flex items-center gap-4">
      {/* Theme Toggle */}
  

      {/* CTA */}
      <Link
        href="/contact#contact-form"
        className="hidden rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:opacity-90 lg:inline-flex"
      >
        Get In Touch
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setNavbarOpen(!navbarOpen)}
        className="rounded-lg p-2 lg:hidden"
        aria-label="Toggle Menu"
      >
        <span className="block h-0.5 w-6 bg-black dark:bg-white"></span>
        <span className="mt-1.5 block h-0.5 w-6 bg-black dark:bg-white"></span>
        <span className="mt-1.5 block h-0.5 w-6 bg-black dark:bg-white"></span>
      </button>
    </div>
  </div>

  {/* Overlay */}
  {navbarOpen && (
    <div className="fixed left-0 top-0 z-40 h-full w-full bg-black/50" />
  )}

  {/* Mobile Menu */}
  <div
    ref={mobileMenuRef}
    className={`fixed right-0 top-0 z-50 h-full w-full max-w-xs bg-white shadow-lg transition-transform duration-300 dark:bg-darkmode ${
      navbarOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
  >
    <div className="flex items-center justify-between p-5">
      <h2 className="text-lg font-bold text-midnight_text dark:text-white">
        Menu
      </h2>

      <button
        onClick={() => setNavbarOpen(false)}
        aria-label="Close Menu"
      >
        ✕
      </button>
    </div>

    <nav className="flex flex-col p-4">
      {headerData.map((item, index) => (
        <MobileHeaderLink key={index} item={item} />
      ))}

      <Link
        href="/contact#contact-form"
        onClick={() => setNavbarOpen(false)}
        className="mt-6 rounded-xl bg-primary px-5 py-3 text-center font-medium text-white"
      >
        Get In Touch
      </Link>
    </nav>
  </div>
</header>


)
}

export default Header
