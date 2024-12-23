import ContactColumn from "../components/ContactColumn";
import Header from "../components/Header";
import StackColumn from "../components/StackColumn";

const About = () => {
  return (
    <div className="h-full flex flex-col gap-12">
      <Header />
      <h1 className="text-3xl font-light text-white tracking-wide">About Me</h1>

      <div className="flex flex-col gap-3">

        <div className="flex flex-1 gap-6 flex-col bg-neutral-800 rounded-[36px] p-6">

          <h3 className="text-lg font-medium tracking-wider">Education</h3>

          <ul className="flex flex-col list-disc ml-4 gap-6">
            <li>
              <p className="text-base tracking-wider">
                Bachelor of Science in Information Technology.
              </p>
              <span className="text-xs text-[#B3B3B3]">
                Mumbai University, 2021-2024, 8.02 CGPA
              </span>
            </li>
            <li>
              <p className="text-base tracking-wider">
                Higher Secondary Certificate in Science.
              </p>
              <span className="text-xs text-[#B3B3B3]">
                Maharashtra State Board, 2019-2021, 79.00%
              </span>
            </li>
          </ul>

        </div>

        <div className="flex flex-1 gap-3">
          <div className="flex-1 h-72">
            <StackColumn />
          </div>
          <div className="flex-1 h-72">
            <ContactColumn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
