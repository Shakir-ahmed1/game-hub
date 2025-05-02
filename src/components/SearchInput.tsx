import { Input, InputGroup } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
  onSearch: (searchText: string) => void
}
const SearchInput = ({onSearch}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      onSearch(inputRef.current?.value ?? '')
      console.log(inputRef.current?.value)}} className="form-search">
    <InputGroup startElement={<BsSearch/>}>
    <Input ref={inputRef} borderRadius={20} placeholder='Search games ...' variant="outline"></Input>
    </InputGroup>
    </form>
)
}

export default SearchInput