import { Visibility, VisibilityOff } from "@mui/icons-material"
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material"
import { motion } from 'framer-motion'
import { useState } from "react"
import styled from "styled-components"
import Banner from "../../../components/auth/Banner"
import BoxForm from "../../../components/auth/BoxForm"
import ContinueWithGoogle from "../../../components/auth/ContinueWithGoogle"
import RedirectPage from "../../../components/auth/RedirectPage"
import CustomButton from "../../../components/auth/CustomButton"


function Register() {

  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const [loading, setLoading] = useState({status: false, text: 'Registrar'})

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordConfirm = () => setShowPasswordConfirm((show) => !show);

  const variants = {
    hidden: { x: '-100vw' },
    visible: { x: 0 },
    exit: { x: '100vw' }
  };

  function handleRegister() {
    if(loading.status) return
    setLoading({status: true, text: 'Registrando...'})
    setTimeout(() => {
      setLoading({status: false, text: 'Registrar'})
    }, 2000);
  }

  return (
    <motion.div
    variants={variants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
    <Container>
      <BoxForm title={'Registre-se'}>
        <TextField value={email} onChange={({target}) => setEmail(target.value)} id="standard-basic" label="E-mail" variant="outlined" required/>
        <TextField value={name} onChange={({target}) => setName(target.value)} id="standard-basic" label="Nome Completo" variant="outlined" required/>
        <FormControl>
          <InputLabel required htmlFor="standard-adornment-password">Senha</InputLabel>
          <OutlinedInput
            value={password}
            onChange={({target}) => setPassword(target.value)}
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl>
          <InputLabel required htmlFor="standard-adornment-password-confirm">Senha</InputLabel>
          <OutlinedInput
            value={passwordConfirmation}
            onChange={({target}) => setPasswordConfirmation(target.value)}
            id="standard-adornment-password-confirm"
            type={showPasswordConfirm ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPasswordConfirm}
                  edge="end"
                >
                  {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <CustomButton onClick={handleRegister} loading={loading}/>
        <RedirectPage link='/sign-up' text='Já possui uma conta? Faça Login agora mesmo!'/>
        <ContinueWithGoogle wait={loading} setWait={setLoading}/>
      </BoxForm>
      <Banner />
    </Container>
    </motion.div>
  )
}

export default Register

const Container = styled.div`
  display: flex;
`
