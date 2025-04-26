import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card.Root width="300px" overflow="hidden" borderRadius={10}>
        <Skeleton height="200px"></Skeleton>
        <SkeletonText></SkeletonText>
    </Card.Root>
  )
}

export default GameCardSkeleton