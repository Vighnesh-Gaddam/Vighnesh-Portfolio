import ArrowButton from "./ArrowButton";

const CertificateCard = ({ certificate }) => {
  // Accessing properties directly from the certificate object
  const title = certificate.title;
  const fileLink = certificate.fileLink;

  return (
    <div className="relative flex gap-3 bg-neutral-800 rounded-[32px] p-3 cursor-pointer">
      <div className="relative rounded-3xl overflow-hidden flex flex-col items-center">
        <img
          src={fileLink}
          alt={title}
          className="object-cover rounded-xl h-full w-full"
        />

        {/* Title below image or PDF */}
        <p className="mt-5 mb-2 text-center text-white font-semibold">
          {title}
        </p>
      </div>
      <ArrowButton />
    </div>
  );
};

export default CertificateCard;
