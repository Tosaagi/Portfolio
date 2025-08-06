import { useRef } from "react";
import { GoBrowser } from "react-icons/go";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { GiDatabase } from "react-icons/gi";
import { FaPython } from "react-icons/fa";
import { LiaGit } from "react-icons/lia";
import SkillCard from "./SkillCard";

function SkillsDisplay() {
  const scrollRef = useRef(null);

  const scrollByAmount = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = 260;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };


  return (
    <section id="skills" className="relative flex flex-col w-full justify-center items-center space-y-2 scroll-mt-20 animate-fade-in-up">
      <h2 className="text-3xl font-bold">My Skills</h2>

      <div className="pointer-events-none absolute left-0 top-0 -bottom-2 w-8 bg-gradient-to-r from-[#121212] to-transparent z-10 sm:hidden" />
      <div className="pointer-events-none absolute right-0 top-0 -bottom-2 w-8 bg-gradient-to-l from-[#121212] to-transparent z-10 sm:hidden" />

      <div
        onClick={() => scrollByAmount("left")}
        className="absolute z-20 left-0 top-0 h-full w-10 sm:hidden"
      />
      <div
        onClick={() => scrollByAmount("right")}
        className="absolute z-20 right-0 top-0 h-full w-10 sm:hidden"
      />

      <div
        ref={scrollRef}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        className="w-full max-w-6xl mx-auto flex overflow-x-auto space-x-8 snap-x snap-mandatory scroll-smooth sm:grid sm:grid-cols-3 sm:gap-6 sm:px-0 sm:overflow-visible sm:snap-none sm:space-x-0 px-[calc((100vw-18rem)/2)]"
      >
        <div className="flex-shrink-0 w-64 max-[360px]:w-60 sm:w-auto snap-center">
          <SkillCard
            SkillIcon={GoBrowser}
            skillDesc={"HTML, CSS, JavaScript"}
            color="text-yellow-400"
            cardColor="bg-yellow-100/10"
          />
        </div>
        <div className="flex-shrink-0 w-64 max-[360px]:w-60 sm:w-auto snap-center">
          <SkillCard
            SkillIcon={FaReact}
            skillDesc={"React"}
            color="text-cyan-400"
            cardColor="bg-cyan-100/10"
          />
        </div>
        <div className="flex-shrink-0 w-64 max-[360px]:w-60 sm:w-auto snap-center">
          <SkillCard
            SkillIcon={RiTailwindCssFill}
            skillDesc={"Tailwind"}
            color="text-sky-400"
            cardColor="bg-sky-100/10"
          />
        </div>
        <div className="flex-shrink-0 w-64 max-[360px]:w-60 sm:w-auto snap-center">
          <SkillCard
            SkillIcon={GiDatabase}
            skillDesc={"Database"}
            color="text-gray-500"
            cardColor="bg-gray-300/10"
          />
        </div>
        <div className="flex-shrink-0 w-64 max-[360px]:w-60 sm:w-auto snap-center">
          <SkillCard
            SkillIcon={FaPython}
            skillDesc={"Python"}
            color="text-[#3776AB]"
            cardColor="bg-[#D6E4F0]/10"
          />
        </div>
        <div className="flex-shrink-0 w-64 max-[360px]:w-60 sm:w-auto snap-center">
          <SkillCard
            SkillIcon={LiaGit}
            skillDesc={"Git/Github"}
            color="text-[#F1502F]"
            cardColor="bg-orange-100/10"
          />
        </div>
      </div>
    </section>
  );
}

export default SkillsDisplay;
