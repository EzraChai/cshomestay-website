import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
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
