import Navbar from "../components/Navbar"
import ProfileCard from "../components/ProfileCard"
import SkillsDisplay from "../components/SkillsDisplay"
import Footer from "../components/Footer"

function App() {
  return (
    <div className="space-y-16">
      <Navbar />
      <ProfileCard />
      <SkillsDisplay />
      <Footer />
    </div>
  )
}

export default App
