import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ColorModeSwitch from "./components/Demo";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre| null>(null)

  const onSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre)
  }
  return (
    <Grid templateAreas={{ lg: `"nav nav" "side main"`, base: '"nav" "main"' }}
    templateColumns={{
      lg: '200px 1fr',
      base: '1fr'
    }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="side" display={{ base: "none", lg: "block" }} paddingLeft={5}>
        <GenreList onGenreSelect={onSelectGenre} selectedGenre={selectedGenre} />
      </GridItem>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
