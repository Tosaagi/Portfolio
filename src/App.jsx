import ScrollIndicator from "../components/ScrollIndicator"
import Navbar from "../components/Navbar"
import ProfileCard from "../components/ProfileCard"
import AboutMe from "../components/AboutMe"
import SkillsDisplay from "../components/SkillsDisplay"
import Footer from "../components/Footer"

function App() {
  return (
    <div className="space-y-16">
      <ScrollIndicator />
      <Navbar />
      <ProfileCard />
      <AboutMe />
      <SkillsDisplay />
      <Footer />
    </div>
  )
}

export default App
