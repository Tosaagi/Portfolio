import { IconContext } from "react-icons";
import { GoBrowser } from "react-icons/go";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function SkillsDisplay() {
  return (
    <section className="flex flex-col justify-center items-center animate-fade-in-up">
      <h2 className="text-2xl font-bold">My Skills</h2>
      <div className="flex space-x-8">
        <div className="flex flex-col items-center p-2">
          <GoBrowser className="text-6xl"/>
          <p className="text-center text-white">HTML, CSS, JavaScript</p>
        </div>
        <div className="flex flex-col items-center p-2">
          <FaReact className="text-6xl"/>
          <p className="text-center text-white">React</p>
        </div>
        <div className="flex flex-col items-center p-2">
          <RiTailwindCssFill className="text-6xl"/>
          <p className="text-center text-white">Tailwind CSS</p>
        </div>
      </div>
    </section>
  )
}

export default SkillsDisplay;