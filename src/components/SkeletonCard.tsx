import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

export const SkeletonCard = () => {
  return (
  <Card width="300px"  borderRadius={20} overflow='hidden'>
    <Skeleton height="200px" >
    <CardBody height="200px">
        <SkeletonText/>
    </CardBody>
    </Skeleton>
  </Card>
)
}
