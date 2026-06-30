// Source of truth for all resume content (from Jeff_Resume.pdf).
// Effectively static — these arrays are mapped over by the section components.

export interface Role {
  stage: string
  company: string
  role: string
  date: string
  bullets: string[]
}

export const roles: Role[] = [
  {
    stage: 'STAGE 04 · BOSS',
    company: 'LTA Research',
    role: 'Design Engineer · Soft Structures',
    date: '2025 → NOW',
    bullets: [
      'Lead structural design for pressurized softgoods assemblies on large-scale lighter-than-air vehicles.',
      'Tackle helium diffusion, gas-cell fill-line adapters, and water-ingress mitigation across rapid prototyping cycles.',
      'Drive cross-functional resolution between sewn softgoods and rigid aerospace hardware — concept to integration.',
    ],
  },
  {
    stage: 'STAGE 03',
    company: 'The Boeing Company',
    role: 'Stress Analysis Engineer · 737 NG/MAX',
    date: '2023 — 2025',
    bullets: [
      'Classical static stress & fatigue analysis for fuselage repairs and nonconforming structure on critical details.',
      'Authored structural substantiation Strength Check Notes and reference packages for airline fleet requests.',
      'Extracted FEA static/fatigue loads; modeled cross-sections; CATIA V5 + ENOVIA LCA.',
    ],
  },
  {
    stage: 'STAGE 02',
    company: 'The Boeing Company',
    role: 'Structural & Mechanical Design · GMD Interceptor',
    date: '2022 — 2023',
    bullets: [
      'Designed mechanical & electrical hardware to build, test, and emplace the GBI rocket using NX and AutoCAD.',
      'Payload-to-boost, shroud close-out, silo & emplaced assemblies; electrical racks, cables, and test rigs.',
      'Liaison across engineering, manufacturing, and quality; obtained U.S. DoD Secret Security Clearance.',
    ],
  },
  {
    stage: 'STAGE 01',
    company: 'Prescient Edge',
    role: 'Junior Engineer · Research, Development & Engineering',
    date: '2021',
    bullets: [
      'Analyzed accelerometers, EO/IR, RF, radar, acoustics, and Kevlar across 15 released technical reports.',
      'Supported government-contract proposals and fed business-development considerations.',
      'Concepted a decentralized machine-learning platform for federal customers.',
    ],
  },
]

export interface Education {
  date: string
  school: string
  program: string
  current?: boolean
}

export const education: Education[] = [
  { date: '2025 → NOW', school: 'USC', program: 'M.S. Computer Science · 3.5', current: true },
  { date: '2022 — 2023', school: 'NC State University', program: 'M.S. Mechanical Engineering · 3.7' },
  { date: '2016 — 2021', school: 'Virginia Tech', program: 'B.S. Mechanical Engineering · 3.2' },
]

export const skills = {
  code: ['Python', 'Java', 'C++', 'MATLAB'],
  cad: ['NX', 'SolidWorks', 'Inventor', 'AutoCAD', 'ANSYS', 'Fluent', 'CATIA', 'Rhino'],
}
