import { projects } from '../data'
import { SectionLabel } from './SectionLabel'

export function SideQuest() {
  return (
    <>
      <SectionLabel label="SIDE_QUEST.LOG" className="career-head" />

      <div className="cards">
        {projects.map((p) => (
          <article className="card" key={`${p.company}-${p.date}`}>
            <div className="card-top">
              <div>
                <div className="stage">{p.stage}</div>
                <div className="company">{p.company}</div>
                <div className="role">{p.role}</div>
              </div>
              <div className="date">{p.date}</div>
            </div>
            <ul>
              {p.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  )
}
