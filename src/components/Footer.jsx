import { site } from '../data/site'
import { IconGitHub, IconLinkedIn, IconMail } from './ui/Icons'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6">
        <p className="text-lg font-extrabold tracking-tight text-ink">YOHANNES</p>
        <p className="text-sm text-ink-dim">Full-Stack Web Developer</p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-ink-dim transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center gap-5">
          <li>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="text-ink-dim transition-colors hover:text-accent"
            >
              <IconGitHub className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="text-ink-dim transition-colors hover:text-accent"
            >
              <IconLinkedIn className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.email}`}
              aria-label="Send an email"
              className="text-ink-dim transition-colors hover:text-accent"
            >
              <IconMail className="h-5 w-5" />
            </a>
          </li>
        </ul>

        <p className="text-xs text-ink-dim">© {year} Yohannes. All rights reserved.</p>
      </div>
    </footer>
  )
}
