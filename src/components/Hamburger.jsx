import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevState) => !prevState);
  }, []);

  return (
    <>
      {/* Hamburger Menu */}
      <div
        className="cursor-pointer p-3 rounded-full border border-gray-500 transition-all duration-200 ease-in-out focus:outline-none "
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
          {["About-me", "Stack", "My-project", "Journey", "Contact"].map(
            (item, index) => (
              <li
                key={index}
                className="p-3 hover:w-full hover:bg-zinc-800 rounded-full"
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="transition-colors font-light tracking-widest w-full block text-center"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </motion.div>
    </>
  );
};

export default Hamburger;
