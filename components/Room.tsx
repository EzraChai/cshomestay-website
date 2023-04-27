import { LargeImageWithModal } from "./ImageWithModal";

const Room = ({ room }: any) => {
  return (
    <div className="mx-3 md:mx-4">
      <LargeImageWithModal image={room} />
      <div className="p-2 font-semibold text-zinc-800 text-normal md:text-xl">
        {room.totalNumber}
        <span className="mx-[0.15rem]">&times;</span>
        {room.title}
      </div>
    </div>
  );
};

export default Room;
