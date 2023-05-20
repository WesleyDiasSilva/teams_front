import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyles from '../src/assets/reset/reset'
import HomePage from "./pages/homePage/HomePage"
import Login from "./pages/auth/login/Login"
import Register from "./pages/auth/register/Register"
import styled from "styled-components"

function App() {

  return (
    <BrowserRouter>
    <Content>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<Login />} />
        <Route path="/sign-in" element={<Register />} />
      </Routes>
      </Content>
    </BrowserRouter>
  )
}

export default App

const Content = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 100vh;
  background-color: #000;
`