"use client";
import React from "react";
import { Button, HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { useEffect, useRef } from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack paddingRight="10px" >
    <Switch.Root checked={colorMode==='dark'} onCheckedChange={toggleColorMode}>
    <Switch.HiddenInput />
    <Switch.Control/>
    <Switch.Label />
  </Switch.Root>
  <Text whiteSpace="nowrap">Dark Mode</Text>
  </HStack>
);
};
export default ColorModeSwitch;
