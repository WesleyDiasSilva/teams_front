import { Alert, AlertTitle } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

function CustomAlert({ severity, title, children}) {

  const alertVariants = {
    hidden: { x: "100vw" }, 
    visible: { x: 0, transition: { duration: 0.5 } }, 
  }

  return (

    <motion.div
        variants={alertVariants}
        initial="hidden"
        animate="visible"
        style={{ position: "fixed", top: 0, right: 0, width: '30%' }} // Aplica diretamente no style do elemento
        >
      <AlertCustom severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      {children}
      </AlertCustom>
    </motion.div>

    
  )
}

export default CustomAlert

const AlertCustom = styled(Alert)`
  position: absolute;
  right: 10px;
  top: 10px;
`
