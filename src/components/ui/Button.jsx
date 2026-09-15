const variants = {
  primary:
    'bg-accent text-white hover:bg-accent-hover shadow-[0_0_24px_rgba(99,102,241,0.25)] hover:shadow-[0_0_32px_rgba(99,102,241,0.4)]',
  outline:
    'border border-border text-ink hover:border-accent hover:text-accent bg-transparent',
  ghost: 'text-ink-dim hover:text-ink bg-transparent',
}

export default function Button({
  href,
  variant = 'primary',
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3',
    'text-sm font-semibold transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base',
    variants[variant],
    className,
  ].join(' ')

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}
