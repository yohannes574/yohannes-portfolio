import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { services } from '../data/services'

export default function WhatICanBuild() {
  return (
    <section id="services" className="border-t border-border bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            label="Services"
            title="What I can build for you"
            description="The kinds of applications I can take from idea to deployed product."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={i * 60}>
              <article className="h-full rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent/50">
                <p className="text-3xl font-extrabold text-accent/70">{service.number}</p>
                <h3 className="mt-4 text-lg font-bold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">{service.description}</p>
              </article>
            </Reveal>
          ))}

          {/* Sixth cell: conversion card */}
          <Reveal delay={services.length * 60}>
            <article className="flex h-full flex-col justify-center rounded-2xl border border-accent/40 bg-accent/10 p-7">
              <h3 className="text-lg font-bold text-ink">Have something else in mind?</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                If it runs in a browser, I want to build it. Tell me about your project.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"
              >
                Start a conversation
                <span aria-hidden="true">→</span>
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
