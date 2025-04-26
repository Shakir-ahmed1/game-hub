import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ColorModeSwitch from "./components/Demo";

function App() {
  return (
    <Grid templateAreas={{ lg: `"nav nav" "main side"`, base: '"nav" "main"' }}>
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="main" bg="red">
        Main
      </GridItem>
      <GridItem area="side" bg="blue" display={{ base: "none", lg: "block" }}>
        Side
      </GridItem>
    </Grid>
  );
}

export default App;
