import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ColorModeSwitch from "./components/Demo";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre, Platform } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  const onSelectGenre = (genre: Genre) => {
    setGameQuery({...gameQuery, genre})
  }
  const onSelectPlatform = (platform: Platform | null) => {
    console.log("Platform ",platform)
    setGameQuery({...gameQuery, platform})
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
        <GenreList onGenreSelect={onSelectGenre} selectedGenre={gameQuery.genre} />
      </GridItem>
      <GridItem area="main">
        <PlatformSelector onPlatformSelect={onSelectPlatform}/>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
