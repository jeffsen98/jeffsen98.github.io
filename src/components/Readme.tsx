import { SectionLabel } from './SectionLabel'

export function Readme() {
  return (
    <>
      <SectionLabel label="README.TXT" className="readme-head">
        <span className="equalizer" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </span>
      </SectionLabel>

      <div className="readme-box">
        <div className="tick-tl" />
        <div className="tick-br" />
        <p>
          <span className="prompt">&gt; </span>Motivated engineer crossing wires from mechanical
          &amp; aerospace into software. Strong problem-solving, analytical thinking, and hands-on
          experience with hard technical systems — now channeling an M.S. in Computer Science into
          building things that ship.
        </p>
      </div>
    </>
  )
}
