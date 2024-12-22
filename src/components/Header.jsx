import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevState) => !prevState);
  }, []);

  const getCurrentTimeAndDate = () => {
    const now = new Date();

    const time = now
      .toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(/^0/, "");

    const date = now.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    return `${time} ${date}`;
  };

  return (
    <header className="relative flex items-center justify-between p-3 bg-[#121212] rounded-[36px] text-white shadow-lg xs:hidden md:flex border border-white">
      {/* Time and Date */}
      <div className="text-base font-mono font-light tracking-wide">
        {getCurrentTimeAndDate()}
      </div>

      {/* Hamburger Menu */}
      <div
        className="cursor-pointer p-3 rounded-full border border-gray-500 transition-all duration-200 ease-in-out focus:outline-none xs:flex"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <motion.div
          initial="closed"
          animate={menuOpen ? "open" : "closed"}
          className="relative w-6 h-6 align-middle"
        >
          {/* Top Line */}
          <motion.span
            className="absolute left-0 h-[1px] w-6 bg-white"
            variants={{
              closed: { rotate: 0, top: "6px" },
              open: { rotate: 45, top: "12px" },
            }}
            transition={{ duration: 0.3 }}
          />
          {/* Bottom Line */}
          <motion.span
            className="absolute left-0 h-[1px] w-6 bg-white"
            variants={{
              closed: { rotate: 0, bottom: "6px" },
              open: { rotate: -45, bottom: "12px" },
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Navigation Menu */}
      <motion.div
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={{
          closed: { opacity: 0, y: -20, display: "none" },
          open: { opacity: 1, y: 0, display: "block" },
        }}
        transition={{ duration: 0.3 }}
        className="absolute top-20 right-6 bg-[#121212] text-white p-3 shadow-md border border-gray-600 w-64 h-auto rounded-[36px] border-none z-50"
      >
        <ul className="flex flex-col gap-3 justify-center items-center">
          {["About-me", "Stack", "My-project", "Journey", "Contact"].map((item, index) => (
            <li key={index} className="p-3 hover:w-full hover:bg-zinc-800 rounded-full">
              <Link
                to={`/${item.toLowerCase()}`}
                className="transition-colors font-light tracking-widest w-full block text-center"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
};

export default Header;
