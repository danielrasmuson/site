import React from 'react'

import { Box, Flex, Heading } from 'serverless-design-system'
import OtherOptions from './OtherOptions'
import { InternalLink } from 'src/fragments'

const ExamplesHero = ({title}) => {
  return (
      <Flex
        color='black'
        justifyContent='space-between'
        width={1}
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        pt={92}
      >
        <Box width={[1, 1, 1, 1, 0.6]}>
          <Heading.h3
            mb={'12px'}
            fontFamily='Soleil'
          >
            Watching: {title} 
          </Heading.h3>
          <InternalLink to={'/learn/courses/full-stack-application-development-on-aws/'}>
            <Heading.h5 color='#8c8c8c' fontFamily='Soleil' pb={'8px'}>From: Serverless Full Stack Application on AWS Course</Heading.h5>
          </InternalLink>
        </Box>
        <OtherOptions />
      </Flex>
  )
}

export default ExamplesHero
