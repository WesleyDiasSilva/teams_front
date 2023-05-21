import { Button, CircularProgress } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

function CustomButton({loading, onClick}) {
  return (
    <CustomButtonStyle 
          state={loading.status} 
          variant="contained" 
          onClick={onClick}
          loading={loading.status}
          disabled={loading.status}
        >
          {loading.status && <CircularProgress style={{marginRight: '40px', color: '#a41dc9'}} size={24} />}
          {loading.text}
        </CustomButtonStyle>
  )
}

export default CustomButton

const CustomButtonStyle = styled(Button)`
  background-color: ${({state}) => state ? '#ebebeb' : '#a41dc9'} !important;
  box-shadow: ${({state}) => state && 'none'} !important;
  border-radius: 5px !important;
  color: ${({state}) => state ? '#a41dc9' : '#ffffff'} !important;
`