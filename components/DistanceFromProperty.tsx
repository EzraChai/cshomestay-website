const DistanceFromProperty = ({ children, minutesNeeded }) => {
  return (
    <div className=" flex text-white justify-around items-center  bg-maximumBlue rounded-xl py-2 px-3 gap-2 hover:bg-zinc-800 transition ">
      {children}
      <div className="text-sm lg:text-base font-bold">
        {minutesNeeded} minutes
      </div>
    </div>
  );
};
export default DistanceFromProperty;
