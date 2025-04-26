import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import GamePlatformIcons from "./GamePlatformIcons";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
        <GamePlatformIcons platforms={game.parent_platforms}></GamePlatformIcons>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
