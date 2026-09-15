import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { journey } from '../data/journey'

export default function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            label="My Journey"
            title="How I got here"
            description="Every step below is a project I built — that's how I learn, and it's what I bring to a team."
          />
        </Reveal>

        <ol className="relative mt-14 max-w-3xl space-y-12 border-l border-border pl-8 sm:pl-12">
          {journey.map((step, i) => (
            <li key={step.title} className="relative">
              {/* Timeline node */}
              <span
                aria-hidden="true"
                className={`absolute top-1.5 -left-[37px] h-3.5 w-3.5 rounded-full border-2 sm:-left-[53px] ${
                  i === journey.length - 1
                    ? 'border-accent bg-accent shadow-[0_0_16px_rgba(99,102,241,0.6)]'
                    : 'border-accent bg-base'
                }`}
              />
              <Reveal delay={i * 60}>
                <p className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">
                  {step.period}
                </p>
                <h3 className="mt-2 text-lg font-bold text-ink sm:text-xl">{step.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-dim">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
