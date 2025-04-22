import { GoBrowser } from "react-icons/go";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import SkillCard from "./SkillCard";

function SkillsDisplay() {
  return (
    <section className="flex flex-col w-full justify-center items-center space-y-2 animate-fade-in-up">
      <h2 className="text-3xl font-bold">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <SkillCard SkillIcon={GoBrowser} skillDesc={"HTML, CSS, JavaScript"} color="text-yellow-400" cardColor="bg-yellow-100/10" />
        <SkillCard SkillIcon={FaReact} skillDesc={"React"} color="text-cyan-400" cardColor="bg-cyan-100/10" />
        <SkillCard SkillIcon={RiTailwindCssFill} skillDesc={"Tailwind"} color="text-sky-400" cardColor="bg-sky-100/10" />
      </div>
    </section>
  )
}

export default SkillsDisplay;