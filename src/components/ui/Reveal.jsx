import { useReveal } from '../../hooks/useReveal'

export default function Reveal({ children, delay = 0, className = '' }) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
