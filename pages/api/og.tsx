import { ImageResponse } from "@vercel/og";
import Image from "next/image";
import HouseImage from "../../public/house.webp"

export const config = {
  runtime: "experimental-edge",
};

export default function og() {
  return new ImageResponse(
    (
      <div style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img

          style={{
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundSize: "cover"
          }}
          src={`https://i.ibb.co/b2LNNKG/house.jpg`}
          alt="main-image"></img>
      </div >
    )
  );
}
