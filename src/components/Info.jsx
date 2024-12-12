import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Button from "./Button"; // Import the Button component

const Info = () => {
  return (
    <div className="flex flex-col justify-end gap-11">
      <div className="flex-1 flex gap-2 w-auto h-auto">
        <div className="flex items-center justify-center w-18 h-18 relative rounded-full overflow-hidden">
          <img
            src="https://img.freepik.com/premium-photo/portrait-boy-with-dark-hair-vector-illustration-cartoon-style_994418-93881.jpg"
            alt=""
            width={72}
            height={72}
            className="w-18 h-18 object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-2xl font-extralight tracking-widest">
            VIGHNESH G.
          </p>
          <p className="text-sm font-thin text-[#B3B3B3] tracking-normal m-0">
            Full-Stack Developer
          </p>
        </div>
      </div>

      <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none opacity-100 max-w-xs">
        <p className="leading-tight font-extralight tracking-widest text-[#B3B3B3]">
          I am a full-stack developer with a passion for creating innovative and
          user-friendly applications. I specialize in frontend development using
          React and React Native, and backend development using Node.js and
          Express.
        </p>
      </div>

      <button className="bg-transparent border border-white rounded-full flex items-center justify-center h-12 w-48 transition-all duration-1000 hover:[background-color:#242424] hover:border-transparent tracking-widest">
        More about Me
      </button>

      {/* Social media buttons and the slogan in the same container */}
      <div className="flex flex-col justify-between gap-3">
        <div className="flex gap-3 items-end">
          <Button
            icon={FaXTwitter}
            size={24}
            label="Twitter"
            link="https://x.com/VighneshGaddam"
          />
          <Button
            icon={FaLinkedinIn}
            size={24}
            label="LinkedIn"
            link="https://www.linkedin.com/in/vighnesh-gaddam/"
          />
          <Button
            icon={FiGithub}
            size={24}
            label="GitHub"
            link="https://github.com/Vighnesh-Gaddam"
          />
        </div>
      </div>
      {/* Added text inside the same div as buttons */}
      <p className="text-base font-light text-[#B3B3B3] flex flex-col gap-3 ">
        Code, Create, Innovate <br /> <span>Vighnesh Gaddam</span>
      </p>
    </div>
  );
};

export default Info;