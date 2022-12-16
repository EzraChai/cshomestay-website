const DistanceFromProperty = ({ children, minutesNeeded }) => {
  return (
    <div className=" flex border-2 border-zinc-600 hover:text-white justify-around items-center rounded-xl py-2 px-3 gap-[0.3rem] hover:bg-zinc-800 transition mb-3">
      {children}
      <div className="text-sm lg:text-base font-bold">
        {minutesNeeded} minutes
      </div>
    </div>
  );
};
export default DistanceFromProperty;
