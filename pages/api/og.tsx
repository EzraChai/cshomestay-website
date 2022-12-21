import { ImageResponse } from "@vercel/og";
import Image from "next/image";

export const config = {
  runtime: "experimental-edge",
};

export default function og() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Monserrat",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div tw=" flex bg-[#f5f5f5] h-full justify-around items-center w-[85%] flex">
          <h2 tw="w-full leading-[0.9] items-center text-center text-xl sm:text-[3.7rem] font-bold tracking-tight text-[#64A6BD]">
            Cozy & Sweet Homestay.
          </h2>
          <Image
            width="256"
            height="256"
            src={"https://media.graphassets.com/9rHSZo9XTKeEZZfA8nsd"}
            alt="Cozy & Sweet's logo"
          />
        </div>
      </div>
    )
  );
}
