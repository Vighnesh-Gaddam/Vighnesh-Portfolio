const IndieStack = ({ stack }) => {
    return (
      <div className="flex flex-row gap-3 w-full">
        <img src={stack.icon} alt={stack.title} className="h-12 w-12 rounded-xl bg-white p-2" />
        <div className="flex-1 flex flex-col ">
          <p className="text-xl font-extralight tracking-widest font-mono">{stack.title}</p>
          
          <p className="text-sm leading-snug font-extralight tracking-wide text-[#B3B3B3] ">{stack.description}</p>
        </div>
      </div>
    );
  };
  
  export default IndieStack;
  