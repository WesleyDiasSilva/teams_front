import React, { useContext } from 'react'
import styled from 'styled-components'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import { UserContext } from '../../contexts/UserContext'

function SocialPage() {
  const {user} = useContext(UserContext) 
  return (
    <>
    <Topbar />
    <Container>
      <Sidebar />
    </Container>
    </>
    
  )
}

export default SocialPage

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #000;
`