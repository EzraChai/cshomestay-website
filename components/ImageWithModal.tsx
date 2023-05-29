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
        className="relative col-span-4 row-span-4 overflow-hidden rounded-xl hover:cursor-pointer"
      >
        <Image
          className="object-cover w-auto h-full"
          src={image.image.url}
          width={image.image.width}
          height={image.image.height}
          alt={image.title}
        />
        <div className="absolute top-0 left-0 flex justify-center w-full h-full transition-opacity bg-black opacity-0 hover:opacity-20"></div>
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
            className="absolute flex items-center justify-center w-12 h-12 transition rounded-full outline-none top-1 right-1 group md:top-5 md:right-10 hover:bg-zinc-500"
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
          className="object-cover w-auto h-full"
          src={image.image.url}
          width={image.image.width}
          height={image.image.height}
          alt={image.title}
        />
        <div className="absolute inset-0 flex justify-center transition-opacity bg-black opacity-0 hover:opacity-20" />
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
            className="absolute flex items-center justify-center w-12 h-12 transition rounded-full outline-none group right-1 top-1 md:top-5 md:right-10 hover:bg-zinc-500"
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
        className="relative col-span-2 overflow-hidden cursor-pointer group md:col-span-1 rounded-xl"
      >
        <div className="absolute inset-0 flex justify-center transition-opacity bg-black opacity-0 hover:opacity-20" />
        <Image
          className="object-cover w-full h-auto"
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
            className="absolute flex items-center justify-center w-12 h-12 transition rounded-full outline-none group right-1 top-1 md:top-5 md:right-10 hover:bg-zinc-500"
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
        className="relative col-span-2 overflow-hidden cursor-pointer rounded-xl"
      >
        <div className="absolute inset-0 flex justify-center transition-opacity bg-black opacity-0 hover:opacity-20" />
        <Image
          className="object-cover w-full h-auto"
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
            className="absolute flex items-center justify-center w-12 h-12 transition rounded-full outline-none md:top-5 group right-1 top-1 md:right-10 hover:bg-zinc-500"
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
