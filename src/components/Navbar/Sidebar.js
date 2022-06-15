import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarComponents'

export default function Sidebar(props) {

    //all the contents of Sidebar, used styled components
  return (
      <SidebarContainer isOpened={props.isOpened} onClick={props.helper}>
          <Icon>
              <CloseIcon />
          </Icon>

          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to="">etusivu</SidebarLink>
                  <SidebarLink to="stories">meidän tarinamme</SidebarLink>
                  <SidebarLink to="facts">tietoa</SidebarLink>
                  <SidebarLink to="comments">keskustelupalsta</SidebarLink>
              </SidebarMenu>
          </SidebarWrapper>
      </SidebarContainer>
  )
}
