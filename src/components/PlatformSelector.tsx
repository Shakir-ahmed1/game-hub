"use client";

import { For, NativeSelect, Portal, Select, Stack, createListCollection } from "@chakra-ui/react";
import { useMemo } from "react";
import { Platform } from "../hooks/useGenres";
import { usePlatforms } from "../hooks/usePlatforms";

interface Props {
  onPlatformSelect: (platform: Platform | null) => void;
}

const PlatformSelector = ({onPlatformSelect}: Props) => {
  const { data, error} = usePlatforms();
  if (error) return null;
  return (
          <NativeSelect.Root size='sm' width={"200px"} paddingBottom={2} onChange={(event) => {
            const selectedPlatform = data.find(platform => platform.id === parseInt(event.target?.value));
            onPlatformSelect(selectedPlatform || null);
          }}> 
            <NativeSelect.Field placeholder="Select Platform" >
              {data.map((platform) => (
                <option key={platform.id} value={platform.id} onChange={event => onPlatformSelect(platform)}>
                  {platform.name}
                </option>
              ))}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
  )

};

export default PlatformSelector;
