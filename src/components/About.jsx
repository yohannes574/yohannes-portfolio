import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { site } from '../data/site'

const facts = [
  { label: 'Location', value: site.location },
  { label: 'Focus', value: 'Full-Stack Development' },
  { label: 'Status', value: site.availableForWork ? 'Open to opportunities' : 'Not available' },
]

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            label="About Me"
            title="Building useful software, one project at a time."
            description="I'm Yohannes, a full-stack web developer from bahir dar university. I learn by building complete applications — not isolated tutorials — and every project on this page is something I designed, built and shipped end to end."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 max-w-2xl space-y-4 leading-relaxed text-ink-dim">
            <p>
              I care about turning business requirements into working software: a real
              database model, a real API, a real interface people can actually use. The
              problems change — managing a gym, booking a hotel, running a store — but the
              approach stays the same: understand it, build it completely, make it work.
            </p>
            <p>
              I'm currently looking for professional opportunities where I can contribute
              to real products and keep growing as an engineer.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-border bg-surface p-4">
                <dt className="text-xs font-semibold tracking-[0.15em] text-ink-dim uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm font-semibold text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
