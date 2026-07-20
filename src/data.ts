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

// Side projects reuse the Role card shape (stage/company/role/date/bullets).
export const projects: Role[] = [
  {
    stage: 'SIDE QUEST · LIVE',
    company: 'Find Your Rugby Club',
    role: 'Nationwide Club Directory & Stats Platform · findyourrugbyclub.com',
    date: '2026 → NOW',
    bullets: [
      'Launched a nationwide club rugby directory — interactive map, geolocated search, and weekly-updated ladders, rankings, and stats for 350+ men’s and women’s clubs — now in partnership talks with USA Rugby as the national club finder.',
      'Reverse-engineered an undocumented GraphQL API into an automated data pipeline aggregating fixtures and results from 55+ competitions; designed a national ranking algorithm blending win %, strength of schedule, and playoff outcomes across three divisions.',
      'Built season leaderboards for 4,400+ players by fusing match lineups with play-by-play commentary, on a $0/month serverless stack (GitHub Pages + Google Sheets as CMS) with a mobile-first Leaflet.js UI.',
    ],
  },
  {
    stage: 'SIDE QUEST · ACTIVE',
    company: 'Heater',
    role: 'AI Rugby Highlight Generator · Python / PyTorch / FastAPI',
    date: '2026 → NOW',
    bullets: [
      'Built a computer-vision pipeline (YOLOv8, ByteTrack, CLIP, SAM 2) that turns full match video into single-player highlight reels — 94% recall of human-verified moments on a consumer GPU.',
      'Designed camera-motion-compensated event detection and a human-in-the-loop identity system where one click seeds segmentation tracking, cutting per-match labeling from days to under an hour.',
      'Fused vision, audio (referee-whistle detection), and jersey-number OCR to recognize game states, auto-suppress dead-ball footage, and cut GPU processing 4×.',
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
  code: ['Python', 'PyTorch', 'FastAPI', 'Java', 'C++', 'JavaScript', 'HTML/CSS', 'MATLAB'],
  cad: ['NX', 'SolidWorks', 'Inventor', 'AutoCAD', 'ANSYS', 'Fluent', 'CATIA', 'Rhino'],
}
