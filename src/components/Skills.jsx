import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            label="Skills"
            title="Technologies I work with"
            description="The stack I use to design, build and ship complete web applications."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 80}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-sm font-semibold tracking-[0.15em] text-accent uppercase">
                  {group.label}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm text-ink transition-colors hover:border-accent/60 hover:text-accent"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
