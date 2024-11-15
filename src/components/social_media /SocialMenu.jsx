import { useState } from "react";


import { BiMessageRoundedDetail } from "react-icons/bi";

import { TbBrandGithubCopilot } from "react-icons/tb";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { HiX } from "react-icons/hi"; // Icons for menu and close buttons

function SocialMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="hidden md:flex items-center mt-4" data-aos="fade-left">
      {/* Social Media Icons with Transition */}
      <div
        className={`flex space-x-4 transition-all duration-500 ease-in-out transform ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}>
        
        <a href="https://github.com/Amey0312" target="_blank" rel="noopener noreferrer" >
        <TbBrandGithubCopilot size="50" className="rounded-full ml-6 text-white" />
        </a>
        
        {/* <MdOutlineAttachEmail size="50" className="rounded-full ml-6 text-white" /> */}
        
        <a href="www.linkedin.com/in/amey-nitore" target="_blank" rel="noopener noreferrer" className=" w-[3rem]" >
        <FaLinkedin size="50" className="rounded-full ml- text-white" />
        </a>
      </div>

      {/* Menu Button */}
      <button onClick={toggleMenu} className="p-2 bg-slate-600 rounded-full ml-4">
        {isMenuOpen ? (
          <HiX size="32" className="text-white" /> // Close icon
        ) : (
          <BiMessageRoundedDetail size="32" className="text-white"  /> // Menu icon
        )}
      </button>
    </div>
  );
}

export default SocialMenu;
