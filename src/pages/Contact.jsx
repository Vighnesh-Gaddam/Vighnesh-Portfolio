import CertificatesColumn from "../components/CertificatesColumn";
import Header from "../components/Header";
import ProjectColumn from "../components/ProjectColumn";

const Contact = () => {
  return (
    <div className="h-full flex flex-col gap-12">
      <Header />
      <h1 className="text-3xl font-light text-white tracking-wide flex-1">
        Let's Connect
      </h1>
      <div className="flex flex-col flex-1 gap-3">
        <div className="flex flex-col gap-6 p-6 bg-neutral-800 rounded-[36px]">
          <p>Email</p>
          <p className=" leading-tight text-3xl text-[#B3B3B3] tracking-widest">
            vgnshgdm@gmail.com
          </p>
        </div>
        <div className="flex flex-col gap-6 p-6 bg-neutral-800 rounded-[36px]">
          <p>Telephone</p>
          <p className="flex gap-7 leading-tight text-3xl text-[#B3B3B3] tracking-widest">
            {" "}
            <span>+91</span> <span>88</span> <span>5593</span> <span>3974</span>{" "}
          </p>
        </div>
        <div className="flex gap-3">
          <div className="h-28 w-full">
            <ProjectColumn />
          </div>
          <div className="h-28 w-full">
            <CertificatesColumn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
