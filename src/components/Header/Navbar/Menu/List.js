import React from 'react'
import { Box } from 'serverless-design-system'

import MenuTitle from './Title'
import {
  ResourcesDropdownList,
  CommunityDropdownList,
  LearnDropdownList,
} from './DropdownList'
import NavLink from 'src/components/NavLink'
import { why, enterprise, docs, framework } from 'src/constants/newUrls'
import HeaderCTAButton from '../../HeaderCTAButton'
import CommunityMenuDescription from './Descriptions/Community'
import LearnMenuDescription from './Descriptions/Learn'
import ResourcesMenuDescription from './Descriptions/Resources'

const ProductMenu = () => (
  <Box>
    <NavLink to={framework} completed className='header-menu-item'>
      <MenuTitle name={'Product'} />
    </NavLink>
  </Box>
)

const DocsMenu = () => (
  <Box>
    <NavLink to={docs} completed className='header-menu-item'>
      <MenuTitle name={'Docs'} />
    </NavLink>
  </Box>
)

const ResourcesMenu = () => (
  <Box>
    <MenuTitle name={'Resources'} />
    <ResourcesMenuDescription>
      <ResourcesDropdownList />
    </ResourcesMenuDescription>
  </Box>
)

const CommunityMenu = () => (
  <Box>
    <MenuTitle name={'Community'} />
    <CommunityMenuDescription>
      <CommunityDropdownList />
    </CommunityMenuDescription>
  </Box>
)

const LearnMenu = () => (
  <Box>
    <MenuTitle name={'Learn'} />
    <LearnMenuDescription>
      <LearnDropdownList />
    </LearnMenuDescription>
  </Box>
)

const EnterpriseMenu = () => (
  <Box>
    <NavLink to={enterprise} completed className='header-menu-item'>
      <MenuTitle name={'Enterprise'} />
    </NavLink>
  </Box>
)

const SupportMenu = () => (
  <Box pt={[2, 2, 2, 2, 0]} pl={[1, 1, 1, 1, 2, 1]} pb={[2, 2, 2, 2, 0]}>
    <HeaderCTAButton />
  </Box>
)

export default [
  ProductMenu,
  DocsMenu,
  ResourcesMenu,
  CommunityMenu,
  LearnMenu,
  EnterpriseMenu,
  SupportMenu,
]
