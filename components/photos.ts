import house from "../public/house.webp";
import livingRoom2 from "../public/living-room.webp";
import livingRoom from "../public/living-room.jpg";
import dining from "../public/dining.webp";
import mainBed from "../public/main-bedroom.webp";
import secondaryBed from "../public/secondary-bedroom.webp";

export interface PhotoInterface {
  src: any;
  title: string;
}

export const photos: PhotoInterface[] = [
  {
    src: livingRoom,
    title: "Living Room",
  },
  {
    src: house,
    title: "Main",
  },
  {
    src: dining,
    title: "Dining Room",
  },
  {
    src: mainBed,
    title: "Main Bedroom",
  },
  {
    src: secondaryBed,
    title: "Secondary Bedroom",
  },
];
