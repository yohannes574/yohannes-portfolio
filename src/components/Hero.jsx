import { site } from '../data/site'
import Button from './ui/Button'
import { IconArrowRight, IconDownload } from './ui/Icons'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Soft accent glow behind the photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 right-[-10%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        {/* Left: copy */}
        <div>
          {site.availableForWork && (
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-ink-dim">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                <span className="sr-only">Available for work</span>
              </span>
              Available for work
            </p>
          )}

          <h1 className="mt-6 text-5xl leading-[1.05] font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Full-Stack
            <br />
            <span className="text-accent">Web Developer</span>
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-relaxed font-medium text-ink">
            {site.headline}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-dim">
            {site.subheadline}
          </p>

          <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-ink-dim uppercase">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects">
              View My Projects
              <IconArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="outline">
              Let&apos;s Talk
            </Button>
            <Button
              href={site.resumeUrl}
              variant="ghost"
              download
              aria-label="Download résumé (PDF)"
            >
              <IconDownload className="h-4 w-4" />
              Résumé
            </Button>
          </div>
        </div>

        {/* Right: portrait */}
        <div className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="rounded-2xl border border-border bg-surface p-2 shadow-2xl shadow-black/40">
            <img
              src="/images/image.png"
              alt="Portrait of Yohannes, Full-Stack Web Developer"
              width="800"
              height="800"
              className="aspect-square w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
