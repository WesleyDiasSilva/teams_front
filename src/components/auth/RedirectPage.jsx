import { Link } from "react-router-dom"
import styled from "styled-components"

function RedirectPage({text, link}) {
  return (
    <Link to={link}>
    <Redirect>
      {text}
    </Redirect>
    </Link>
  )
}

export default RedirectPage

const Redirect = styled.span`
  color: #000;
  font-family: 'Roboto';
  font-size: 0.9rem;
  font-weight: 500;
`