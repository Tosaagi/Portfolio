const SkillCard = ({ SkillIcon, skillDesc, color, cardColor }) => (
  <div className={`w-full flex flex-col items-center ${cardColor} border-mainaccent border-2 p-4 rounded-lg `}>
    <div className="flex justify-center items-center mb-2">
      <SkillIcon className={`${color} text-6xl`} />
    </div>
    <p className="font-semibold text-lg text-center text-gray-300">
      {skillDesc}
    </p>
  </div>
);

export default SkillCard;
