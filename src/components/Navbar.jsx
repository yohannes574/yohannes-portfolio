import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { IconMenu, IconX } from './ui/Icons'
import Button from './ui/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(site.nav.map((item) => item.href.slice(1)))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-border bg-base/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="text-lg font-extrabold tracking-tight text-ink" aria-label="Yohannes — home">
          YOHANNES
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => {
            const id = item.href.slice(1)
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    active === id ? 'text-accent' : 'text-ink-dim hover:text-ink'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:block">
          <Button href="#contact" variant="primary" className="px-4 py-2 text-sm">
            Let&apos;s Talk
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="rounded-md p-2 text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
        >
          {open ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-base/95 backdrop-blur-md md:hidden">
          <ul className="space-y-1 px-4 py-4">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink-dim transition-colors hover:bg-surface hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button href="#contact" variant="primary" className="w-full" onClick={() => setOpen(false)}>
                Let&apos;s Talk
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
