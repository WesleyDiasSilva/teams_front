import React from 'react';
import { BurgerSpin as Burger } from 'react-burger-icons';
import styled, { keyframes } from 'styled-components';
import HomeIcon from '../assets/icons/Vector-1.svg';
import ChatIcon from '../assets/icons/Vector-2.svg';
import CalendarIcon from '../assets/icons/Vector-3.svg';
import KanbanIcon from '../assets/icons/Vector.svg';

function Sidebar() {

  const [isClosed, setIsClosed] = React.useState(false);

  function toggleSidebar() {
    setIsClosed(!isClosed);
  }

  function openSidebar() {
    setIsClosed(true);
  }

  function closeopenSidebar() {
    setIsClosed(false);
  }
  return (
    <SidebarWrapper isClosed={isClosed} onMouseLeave={closeopenSidebar}>
      <HamburgerButton onClick={toggleSidebar}>
        <Burger isClosed={isClosed} />
      </HamburgerButton>
      <OptionsContainer>
        <SidebarOption isClosed={isClosed}>
          <Icon src={HomeIcon} onMouseEnter={openSidebar}/>
          <Option isClosed={isClosed}>Feed</Option>
        </SidebarOption>
        <SidebarOption isClosed={isClosed}>
          <Icon src={KanbanIcon} onMouseEnter={openSidebar}/>
          <Option isClosed={isClosed}>Kanban</Option>
        </SidebarOption>
        <SidebarOption isClosed={isClosed}>
          <Icon src={CalendarIcon} onMouseEnter={openSidebar}/>
          <Option isClosed={isClosed}>Calendário</Option>
        </SidebarOption>
        <SidebarOption isClosed={isClosed}>
          <Icon src={ChatIcon} onMouseEnter={openSidebar}/>
          <Option isClosed={isClosed}>Chat</Option>
        </SidebarOption>
      </OptionsContainer>
      
    </SidebarWrapper>
  )
}

export default Sidebar

const SidebarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.isClosed ? '200px' : '70px'};
  height: 100vh;
  background-color: #0a58e7;
  transition: width 0.3s;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`

const OptionsContainer = styled.div`
  padding: 15px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const HamburgerButton = styled.button`
  position: absolute;
  left: 15px;
  top: 30px;
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
`;

const SidebarOption = styled.div`
  color: #fff;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Option = styled.span`
  display: ${props => props.isClosed ? 'inline' : 'none'};
  animation: ${props => props.isClosed && slideUp} 0.5s forwards;
  font-family: 'Lato';
`

const slideUp = keyframes`
0% {
  transform: translateY(100%);
  opacity: 0;
}
100% {
  transform: translateY(0);
  opacity: 1;
}
`;