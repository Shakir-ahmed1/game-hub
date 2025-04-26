import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card.Root>
        <Skeleton height="200px"></Skeleton>
        <SkeletonText></SkeletonText>
    </Card.Root>
  )
}

export default GameCardSkeleton