import { Disclosure } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

const Question = ({ questions }) => {
  return (
    <>
      <h2 className="text-4xl lg:text-6xl text-center mt-24 lg:tracking-tight font-extrabold text-zinc-800">
        Frequently Asked Questions.
      </h2>
      <div className=" mt-8 mx-8 lg:mt-16 mb-12 px-4 pt-4 pb-1 max-w-5xl md:w-[80%] md:mx-auto rounded-xl bg-zinc-800 text-white">
        {questions.map((question, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`${
                    open ? "mb-3" : "mb-4"
                  } py-2 lg:py-4 px-4 text-left text-zinc-50 flex w-full justify-between items-center rounded-lg bg-zinc-700 hover:bg-zinc-600 transition`}
                >
                  <span className="text-xl lg:text-2xl font-semibold">
                    {question.question}
                  </span>
                  <IoIosArrowDown
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } " text-2xl font-bold transition"
                `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <div className="text-zinc-300 text-normal lg:text-[1.16rem] font-medium pb-8 px-4">
                    {question.answer}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
      <div className="text-center mb-24 text-zinc-600 ">
        If you have other questions,
        <br />
        <Link
          rel={"noopener"}
          className="group font-bold flex text-zinc-900 items-center mx-auto w-32 justify-center border-b-2 border-transparent hover:border-blue-900 transition"
          href={"https://wa.link/z1sa7g"}
          target={"_blank"}
        >
          <span>chat with me</span>
          <FiArrowUpRight className="font-bold text-xl" />
        </Link>
      </div>
    </>
  );
};
export default Question;
