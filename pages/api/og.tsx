import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function () {
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
          backgroundColor: "#f5f5f5",
        }}
      >
        <div tw="bg-[#f5f5f5] h-full justify-center items-center flex-col w-full flex">
          <img
            width="256"
            height="256"
            src={"https://media.graphassets.com/9rHSZo9XTKeEZZfA8nsd"}
            alt="Cozy & Sweet's logo"
          />
          <h2 tw="flex flex-col w-full items-center text-center text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
            <span>Finding place to live in ? </span>
            <span tw="text-[2.6rem] text-center mt-1 font-bold text-[#64A6BD]">
              Cozy & Sweet Homestay.
            </span>
          </h2>
        </div>
      </div>
    )
  );
}
