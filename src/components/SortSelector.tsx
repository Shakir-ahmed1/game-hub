import { NativeSelect } from "@chakra-ui/react";
import React, { ChangeEvent } from "react";

interface Props {
  onSelectSortBy: (sortBy: string) => void;
  sortedBy: string
}
const SortSelector = ({ onSelectSortBy , sortedBy}: Props) => {
  const sortOptions = [
    { value: "", label: "Relevance"},
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-rating", label: "Average Rating" },
    { value: "-metacritic", label: "Popularity" },
  ];
  const foundSorting = sortOptions.find(item=> item.value === sortedBy)
  return (
    <NativeSelect.Root
      width={"200px"}
      size='sm'
      paddingBottom={2}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        onSelectSortBy(sortOptions.find(item=> item.value === event.target?.value)?.value || '');
      }}
    >
      <NativeSelect.Field >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {sortedBy === option.value ? `Sorted by: ${foundSorting?.label || 'Relevance'}` : option.label}
          </option>
        ))}
      </NativeSelect.Field>
      <NativeSelect.Indicator />
    </NativeSelect.Root>
  );
};

export default SortSelector;
