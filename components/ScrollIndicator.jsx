import { useState, useEffect } from "react";
import { PiMouseScroll } from "react-icons/pi";

function ScrollIndicator() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex fixed -bottom-20 left-0 w-full h-[180px] justify-center items-center transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0"
      } bg-gradient-to-t from-[#121212] to-transparent z-50`}
    >
      <PiMouseScroll className="text-3xl text-mainaccent animate-bounce mt-15" />
    </div>
  );
}

export default ScrollIndicator;
