import React from 'react'
import { Badge } from '@chakra-ui/react';
interface Props {
    score: number;
}
const ScoreBadge = ({score}: Props) => {
  const color = score > 75? 'green': 'yellow'
  return (
    <div>
        <Badge fontSize={15} colorScheme={color}>{score}</Badge>
    </div>
  )
}

export default ScoreBadge