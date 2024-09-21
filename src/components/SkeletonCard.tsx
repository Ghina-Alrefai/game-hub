import { Card, CardBody, SkeletonText } from '@chakra-ui/react'
import React from 'react'

export const SkeletonCard = () => {
  return (
  <Card width="300px" height="200px">
    <CardBody >
        <SkeletonText/>
    </CardBody>
  </Card>
)
}
