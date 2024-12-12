/* eslint-disable react/prop-types */
const Button = ({ icon: Icon, size = 24, label, onClick, link }) => {
  return (
    <button
      onClick={onClick ? onClick : () => (window.location.href = link)}
      className={`bg-transparent border border-white rounded-full flex items-center justify-center h-12 w-12 transition-all duration-1000 hover:[background-color:#242424] hover:border-transparent`}
      aria-label={label}
    >
      {Icon && <Icon size={size} className="text-white" />}
      {label && (
        <span className="text-white ml-2 text-sm hidden group-hover:inline">{label}</span>
      )}
    </button>
  );
};

export default Button;
