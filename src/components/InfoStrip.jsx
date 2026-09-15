import { infoStrip } from '../data/skills'

export default function InfoStrip() {
  return (
    <div className="border-y border-border bg-surface/50">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-5 sm:px-6">
        {infoStrip.map((item, i) => (
          <p
            key={item}
            className={`text-xs font-semibold tracking-[0.2em] uppercase sm:text-sm ${
              i === 0 ? 'text-accent' : 'text-ink-dim'
            }`}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  )
}
