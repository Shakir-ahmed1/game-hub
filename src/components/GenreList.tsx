import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { Button, HStack, Image, Link, List, ListItem, Spinner } from "@chakra-ui/react";

interface Props {
  onGenreSelect: (genre: Genre)=> void,
  selectedGenre: Genre| null
}
const GenreList = ({onGenreSelect, selectedGenre }: Props) => {
  const { isLoading, error, data } = useGenres();
  if (isLoading) return <Spinner></Spinner>
  if (error) return null;
  return (
    <div>
      <List.Root>
        {data.map((genre) => {
          return (
            <List.Item key={genre.id} paddingY="5px" listStyle='none'>
              <HStack>
                <Image boxSize="32px" src={genre.image_background} />
                <Link onClick={()=> onGenreSelect(genre)} fontWeight={genre.id === selectedGenre?.id ? "bold": "normal"}>{genre.name}</Link>
              </HStack>
            </List.Item>
          );
        })}
      </List.Root>
    </div>
  );
};

export default GenreList;
