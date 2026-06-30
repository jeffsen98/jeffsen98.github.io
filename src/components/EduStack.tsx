import { education, skills } from '../data'
import { SectionLabel } from './SectionLabel'

export function EduStack() {
  return (
    <div className="two-up">
      {/* EDU.LOG */}
      <div>
        <SectionLabel label="EDU.LOG" className="col-head" />
        <div className="edu-list">
          {education.map((e) => (
            <div className={`edu${e.current ? ' current' : ''}`} key={e.school}>
              <div className="date">{e.date}</div>
              <div className="school">{e.school}</div>
              <div className="program">{e.program}</div>
            </div>
          ))}
        </div>
      </div>

      {/* STACK.SYS */}
      <div>
        <SectionLabel label="STACK.SYS" className="col-head" />

        <div className="stack-group">// CODE</div>
        <div className="chips gap-below">
          {skills.code.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>

        <div className="stack-group">// CAD &amp; CAE</div>
        <div className="chips">
          {skills.cad.map((s) => (
            <span className="chip cad" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
