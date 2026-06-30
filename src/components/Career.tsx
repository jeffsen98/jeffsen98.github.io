import { roles } from '../data'
import { SectionLabel } from './SectionLabel'

export function Career() {
  return (
    <>
      <SectionLabel label="CAREER.LOG" className="career-head" />

      <div className="cards">
        {roles.map((r) => (
          <article className="card" key={`${r.company}-${r.date}`}>
            <div className="card-top">
              <div>
                <div className="stage">{r.stage}</div>
                <div className="company">{r.company}</div>
                <div className="role">{r.role}</div>
              </div>
              <div className="date">{r.date}</div>
            </div>
            <ul>
              {r.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  )
}
