import { useState } from 'react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { site } from '../data/site'
import { IconGitHub, IconLinkedIn, IconMail, IconPhone } from './ui/Icons'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

const channels = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, Icon: IconMail },
  { label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}`, Icon: IconPhone },
  { label: 'GitHub', value: 'github.com/yohannes574', href: site.socials.github, Icon: IconGitHub },
  { label: 'LinkedIn', value: 'www.linkedin.com/in/yohannes-alem-8183a2388/', href: site.socials.linkedin, Icon: IconLinkedIn },
]

const inputClass =
  'w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-ink placeholder:text-ink-dim/60 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const buildMailto = () => {
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    const params = new URLSearchParams({ subject: form.subject, body })
    return `mailto:${site.email}?${params.toString()}`
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    if (FORMSPREE_ENDPOINT) {
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error(`Formspree responded ${res.status}`)
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
      } catch {
        setStatus('error')
      }
      return
    }

    // No endpoint configured: hand off to the visitor's email client.
    window.location.href = buildMailto()
    setStatus('idle')
  }

  return (
    <section id="contact" className="border-t border-border bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            label="Contact"
            title="Let's build something together."
            description="Have a project, job opportunity, or idea? I'd be happy to hear from you."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Direct channels */}
          <Reveal delay={80}>
            <ul className="space-y-4">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
                    className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-[0.15em] text-ink-dim uppercase">
                        {label}
                      </span>
                      <span className="block text-sm font-medium text-ink">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal delay={160}>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={set('email')}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-ink">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={set('subject')}
                  placeholder="What's this about?"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Tell me about your project or opportunity…"
                  className={`${inputClass} resize-y`}
                />
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Button type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </Button>
                {status === 'sent' && (
                  <p className="text-sm font-medium text-emerald-400" role="status">
                    Message sent — I'll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm font-medium text-red-400" role="alert">
                    Something went wrong. Please email me directly at {site.email}.
                  </p>
                )}
                {!FORMSPREE_ENDPOINT && status === 'idle' && (
                  <p className="text-xs text-ink-dim">
                    Opens your email app with the message prefilled.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
