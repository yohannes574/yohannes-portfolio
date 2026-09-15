import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { projects } from '../data/projects'
import { IconExternal, IconGitHub } from './ui/Icons'

function TechList({ items }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1">
      {items.map((tech) => (
        <li key={tech} className="text-xs font-medium tracking-[0.15em] text-ink-dim uppercase">
          {tech}
        </li>
      ))}
    </ul>
  )
}

function Links({ github, liveDemo, title }) {
  return (
    <div className="flex gap-5">
      {liveDemo && (
        <a
          href={liveDemo}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"
        >
          <IconExternal className="h-4 w-4" />
          View Project
          <span className="sr-only">— {title}</span>
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-dim transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"
        >
          <IconGitHub className="h-4 w-4" />
          GitHub
          <span className="sr-only">— {title}</span>
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            label="Portfolio"
            title="Selected Projects"
            description="Real-world applications I've designed and developed."
          />
        </Reveal>

        {/* Featured project */}
        {featured && (
          <Reveal delay={100}>
            <article className="group mt-12 overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50">
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[260px]">
                  <img
                    src={featured.image}
                    alt={`${featured.title} screenshot`}
                    width="1200"
                    height="750"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-col justify-center gap-5 p-8 sm:p-12">
                  <p className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold text-ink sm:text-3xl">{featured.title}</h3>
                  <p className="leading-relaxed text-ink-dim">{featured.description}</p>
                  <TechList items={featured.technologies} />
                  <Links {...featured} />
                </div>
              </div>
            </article>
          </Reveal>
        )}

        {/* Remaining projects */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/30">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width="1200"
                    height="750"
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-ink">{project.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-ink-dim">
                    {project.description}
                  </p>
                  <TechList items={project.technologies} />
                  <div className="mt-1 border-t border-border pt-4">
                    <Links {...project} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
