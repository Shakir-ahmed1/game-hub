import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";

const GenreList = () => {
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
                {genre.name}
              </HStack>
            </List.Item>
          );
        })}
      </List.Root>
    </div>
  );
};

export default GenreList;
