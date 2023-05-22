import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import GlobalStyles from '../src/assets/reset/reset';
import HomePage from "./pages/home/HomePage";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import styled from "styled-components";
import SocialPage from "./pages/social/SocialPage";
import ConfirmEmail from "./pages/auth/confirmEmail/ConfirmEmail";

function RouteComponent() {
  const location = useLocation();

  return (
      <>
      <GlobalStyles />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<Login />} />
          <Route path="/sign-in" element={<Register />} />
          <Route path="/social-teams" element={<SocialPage />} />
          <Route path="/auth/validation/email/:code" element={<ConfirmEmail />} />
        </Routes>
      </AnimatePresence>
      </>
  );
}

function App() {
  return (
    <BrowserRouter>
    <Content>
      <RouteComponent />
      </Content>
    </BrowserRouter>
  );
}

export default App;

const Content = styled.div`
  width: 100%;
  min-width: 100vw;
  max-width: 100vw;
  height: 100vh;
  background-color: #000;
`;
