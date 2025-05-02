import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './Demo'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchText: string) => void
}
const NavBar = ({onSearch}: Props) => {
  return (
    <HStack justifyContent="space-between">
        <Image src={logo} boxSize="60px"/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch></ColorModeSwitch>

    </HStack>
  )
}

export default NavBar