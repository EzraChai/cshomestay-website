import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiImage } from "react-icons/fi";

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
          src={image}
          alt="Living room"
        />
        <div className=" top-0 left-0 w-full h-full absolute flex justify-center bg-black opacity-0 hover:opacity-20 transition-opacity"></div>
      </div>

      <Dialog
        as="div"
        className={"relative z-20"}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel
            className={
              "max-w-5xl rounded-lg overflow-hidden w-full align-middle bg-white"
            }
          >
            <Image className="" src={image} alt={"image"} />
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
        onClick={() => setIsOpen(true)}
        className=" relative col-span-2  row-span-2 rounded-xl overflow-hidden md:h-72 h-[10rem] w-auto hover:cursor-pointer"
      >
        <Image className="object-cover h-full w-auto" src={image} alt="image" />
        <div className=" top-0 left-0 w-full h-full absolute flex justify-center bg-black opacity-0 hover:opacity-20 transition-opacity"></div>
      </div>

      <Dialog
        as="div"
        className={"relative z-20"}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel
            className={
              "max-w-5xl rounded-lg overflow-hidden w-full align-middle bg-white"
            }
          >
            <Image className="" src={image} alt={"image"} />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
