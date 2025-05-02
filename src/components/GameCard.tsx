import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import GamePlatformIcons from "./GamePlatformIcons";
import ScoreBadge from "./ScoreBadge";
import getCroppedImages from "../services/image-url";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root>
      <Image src={getCroppedImages(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <GamePlatformIcons
            platforms={game.parent_platforms}
          ></GamePlatformIcons>
          <ScoreBadge score={game.metacritic}></ScoreBadge>
        </HStack>
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
