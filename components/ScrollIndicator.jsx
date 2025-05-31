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
      className={`hidden sm:block fixed bottom-[-60px] left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0"
      } bg-[#121212]/50 shadow-[0_10px_30px_rgba(0,0,0,0.3)] rounded-full p-4`}
    >
      <PiMouseScroll className="text-3xl text-mainaccent animate-bounce" />
    </div>
  );
}

export default ScrollIndicator;
