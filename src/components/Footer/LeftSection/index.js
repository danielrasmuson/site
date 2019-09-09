import React from 'react'

import { Flex, Column } from 'serverless-design-system'

import CompanyDetails from './CompanyDetails'
import DocsColumn from './DocsColumn'
import ProductsColumn from './ProductsColumn'
import ResourcesColumn from './ResourcesColumn'
import LearnColumn from './LearnColumn'
import CommunityColumn from './CommunityColumn'
import CompanyColumn from './CompanyColumn'
import EnterpriseColumn from './EnterpriseColumn'

// Renders the entire footer list items
const LeftSection = () => (
  <Column
    width={[0.8, 0.8, 1, 1, 0.65]}
    order={['2', '2', '2', '2', '1']}
    justifyContent={['space-between', 'space-between', 'initial']}
  >
    <Flex width={1} flexWrap='wrap' px={0} mb={[62, 62, 52]}>
      <ProductsColumn mobileOrder={1} />
      <DocsColumn mobileOrder={2} />
      <ResourcesColumn mobileOrder={5} />
      <CommunityColumn mobileOrder={7} />
      <LearnColumn mobileOrder={4} />
      <EnterpriseColumn mobileOrder={3} />
      <CompanyColumn mobileOrder={6} />
    </Flex>
    <CompanyDetails />
  </Column>
)

export default LeftSection
