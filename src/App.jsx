import Navbar from "../components/Navbar"
import ProfileCard from "../components/ProfileCard"
import SkillsDisplay from "../components/SkillsDisplay"

function App() {
  return (
    <div className="space-y-16">
      <Navbar />
      <ProfileCard />
      <SkillsDisplay />
    </div>
  )
}

export default App
