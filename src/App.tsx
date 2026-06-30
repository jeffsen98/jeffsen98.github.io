import { Hud } from './components/Hud'
import { Hero } from './components/Hero'
import { Readme } from './components/Readme'
import { Career } from './components/Career'
import { EduStack } from './components/EduStack'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="frame">
      <Hud />
      <Hero />
      <div className="content">
        <Readme />
        <Career />
        <EduStack />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
