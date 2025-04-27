import React from "react";
import { MdPhoneIphone } from "react-icons/md";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: { platform: Platform }[];
}

const GamePlatformIcons = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe,
    ios: MdPhoneIphone,
    android: FaAndroid,
  };

  return (
    <HStack marginY={1}>
      {platforms.map(({ platform }) => {
        if (Object.keys(iconMap).includes(platform.slug)) {
            return (
              <Icon
                color="gray.500"
                key={platform.id || platform.slug}
                as={iconMap[platform.slug]}
              />
            );
        }
      })}
    </HStack>
  );
};

export default GamePlatformIcons;
