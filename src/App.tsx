import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ColorModeSwitch from "./components/Demo";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid templateAreas={{ lg: `"nav nav" "side main"`, base: '"nav" "main"' }}>
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="side" display={{ base: "none", lg: "block" }}>
        Side
      </GridItem>
      <GridItem area="main">
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
