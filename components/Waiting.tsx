import type { FC } from "react";

const Waiting: FC = () => {
  return (
    <div className="relative h-[70vh]">
      <div className="flex justify-center items-center h-full">
        <h2 className="text-4xl lg:text-6xl px-2 lg:px-0 lg:tracking-tight text-center font-extrabold">
          Feel free to book with us.
        </h2>
        <div className="absolute z-[-1] inset-0 top-[7rem] lg:top-[14rem] flex justify-center -space-x-11 opacity-40 blur-xl">
          <div className="mix-blend-multiply bg-blue-200 w-60 h-60 rounded-full" />
          <div className="mix-blend-multiply bg-pink-200 w-60 h-60 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Waiting;
