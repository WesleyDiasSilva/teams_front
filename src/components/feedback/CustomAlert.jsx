import { Alert, AlertTitle } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

function CustomAlert({ severity, title, children}) {
  return (
    <AlertCustom severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      {children}
    </AlertCustom>
  )
}

export default CustomAlert

const AlertCustom = styled(Alert)`
  position: absolute;
  right: 10px;
  top: 10px;
`
