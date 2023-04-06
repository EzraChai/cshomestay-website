import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import { RiCloseFill } from "react-icons/ri";

export const LargeImageWithModal = ({ image }) => {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className=" col-span-4 row-span-4 rounded-xl overflow-hidden relative hover:cursor-pointer"
      >
        <Image
          className="object-cover h-full w-auto"
          src={image.image.url}
          width={image.image.width}
          height={image.image.height}
          alt={image.title}
        />
        <div className=" top-0 left-0 w-full h-full absolute flex justify-center bg-black opacity-0 hover:opacity-20 transition-opacity"></div>
      </div>

      <Dialog
        as="div"
        className={"relative z-20"}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="group flex justify-center items-center absolute right-5 md:right-10 top-5 outline-none w-12 h-12 rounded-full hover:bg-zinc-500 transition"
          >
            <RiCloseFill className="text-3xl text-white " />
          </button>
          <Dialog.Panel
            className={
              "max-w-5xl rounded-lg mx-2 overflow-hidden w-full align-middle bg-white"
            }
          >
            <Image
              src={image.image.url}
              width={image.image.width}
              height={image.image.height}
              alt={image.image.title}
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export const SmallImageWithModal = ({ image }) => {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className=" relative col-span-2 row-span-2 rounded-xl overflow-hidden md:h-72 h-[10rem] w-auto hover:cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          className="object-cover h-full w-auto"
          src={image.image.url}
          width={image.image.width}
          height={image.image.height}
          alt={image.title}
        />
        <div className=" inset-0 absolute flex justify-center bg-black opacity-0 hover:opacity-20 transition-opacity" />
      </div>

      <Dialog
        as="div"
        className={"relative z-20"}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="group flex justify-center items-center absolute right-10 top-5 outline-none w-12 h-12 rounded-full hover:bg-zinc-500 transition"
          >
            <RiCloseFill className="text-3xl text-white " />
          </button>
          <Dialog.Panel
            className={
              "max-w-5xl mx-2 rounded-lg overflow-hidden w-full align-middle bg-white"
            }
          >
            <Image
              src={image.image.url}
              width={image.image.width}
              height={image.image.height}
              alt={image.title}
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export const SmallPictureWithModal = ({ image }) => {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group relative col-span-2 md:col-span-1 rounded-xl overflow-hidden cursor-pointer"
      >
        <div className="absolute inset-0 flex justify-center bg-black opacity-0 hover:opacity-20 transition-opacity" />
        <Image
          className="object-cover h-auto w-full"
          src={image.image.url}
          width={image.image.width}
          height={image.image.height}
          alt={image.title}
        />
      </div>

      <Dialog
        as="div"
        className={"relative z-20"}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="group flex justify-center items-center absolute right-10 top-5 outline-none w-12 h-12 rounded-full hover:bg-zinc-500 transition"
          >
            <RiCloseFill className="text-3xl text-white " />
          </button>
          <Dialog.Panel
            className={
              "max-w-5xl mx-2 rounded-lg overflow-hidden w-full align-middle bg-white"
            }
          >
            <Image
              src={image.image.url}
              width={image.image.width}
              height={image.image.height}
              alt={image.title}
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export const BigPictureWithModal = ({ image }) => {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className=" relative col-span-2 rounded-xl overflow-hidden cursor-pointer"
      >
        <div className="absolute inset-0 flex justify-center bg-black opacity-0 hover:opacity-20 transition-opacity" />
        <Image
          className="object-cover h-auto w-full"
          src={image.image.url}
          width={image.image.width}
          height={image.image.height}
          alt={image.title}
        />
      </div>

      <Dialog
        as="div"
        className={"relative z-20"}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="group flex justify-center items-center absolute right-10 top-5 outline-none w-12 h-12 rounded-full hover:bg-zinc-500 transition"
          >
            <RiCloseFill className="text-3xl text-white " />
          </button>
          <Dialog.Panel
            className={
              "max-w-5xl mx-2 rounded-lg overflow-hidden w-full align-middle bg-white"
            }
          >
            <Image
              src={image.image.url}
              width={image.image.width}
              height={image.image.height}
              alt={image.title}
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
