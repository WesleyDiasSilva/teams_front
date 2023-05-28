import React from 'react'
import styled from 'styled-components'

function Title({size}) {
  return (
    <Text size={size}>Teams</Text>
  )
}

export default Title

const Text = styled.h1`
  font-size: ${props => props.size};
  color: #fff;
  font-weight: 900;
  font-family: 'Raleway';
`