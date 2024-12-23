import Hamburger from "./Hamburger";

const Header = () => {
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
    <header className="relative flex items-center justify-between p-3 bg-[#121212] rounded-[36px] text-white shadow-lg border border-white max-xl:hidden">
      {/* Time and Date */}
      <div className="text-base font-mono font-light tracking-wide">
        {getCurrentTimeAndDate()}
      </div>

      <Hamburger />
    </header>
  );
};

export default Header;
