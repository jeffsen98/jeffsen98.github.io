interface Props {
  label: string
  className?: string
  children?: React.ReactNode
}

export function SectionLabel({ label, className, children }: Props) {
  return (
    <div className={`sec-label${className ? ` ${className}` : ''}`}>
      <span className="tag">{label}</span>
      <span className="rule" />
      {children}
    </div>
  )
}
