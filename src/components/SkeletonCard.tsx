import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

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
