import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../contexts/UserContext';
import Title from '../Title';
import SearchImage from '../../assets/icons/Search.svg';
import AvatarMenu from './AvatarMenu';

function Topbar() {

  const context = useContext(UserContext)
  console.log(context)

  return (
    <Navbar>
      <Logo>
        <Title size={'2rem'}/>
      </Logo>
      <Search>
        <Input placeholder='Buscar'/>
        <InputIcon src={SearchImage}/>
      </Search>
      <ControlsMenu>
      <AvatarMenu />
      </ControlsMenu>
    </Navbar>
  )
}

export default Topbar

const Navbar = styled.header`
  height: 75px;
  width: 100%;
  background-color: #0a58e7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`

const Logo = styled.div`
  margin-left: 70px;
  display: flex;
  align-items: center;
`

const Search = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 30px;
  position: relative;
`

const Input = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 5px 20px;
  box-sizing: border-box;
  font-family: 'Roboto';
  font-size: 1rem;
  &:focus {
    border: 1px solid #377dff;
    outline: none;
  }
`

const ControlsMenu = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 80px;
  display: flex;
  align-items: center;
`

const InputIcon = styled.img`
  width: 25px;
  height: 25px;
  position: absolute;
  z-index: 1;
  right: 10px;
`