import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


export const SkeletonCard = () => {
  return (
  <Card >
    <Skeleton height="200px"  >
    <CardBody>
        <SkeletonText/>
    </CardBody>
    </Skeleton>
  </Card>
)
}
