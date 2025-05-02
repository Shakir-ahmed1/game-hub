import { Image } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.svg";
import meh from "../assets/meh.webp";
import { ImageProps } from "@chakra-ui/react/dist/types/components/avatar/namespace";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const imagesMap: {[key: string]: ImageProps} = {
      3: { src: meh, alt: "meh" },
      4: { src: thumbsUp, alt: "Recommended" },
      5: { src: bullsEye, alt: "Exeptional" },
  };
  console.log("image", imagesMap[rating])
  return <Image {...imagesMap[rating]} boxSize="25px" marginTop={1} />;
};

export default Emoji;
