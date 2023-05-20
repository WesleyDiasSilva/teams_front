import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material"
import BoxForm from "../../../components/auth/BoxForm"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import RedirectPage from "../../../components/auth/RedirectPage"
import ContinueWithGoogle from "../../../components/auth/ContinueWithGoogle"
import styled from "styled-components"
import { useState } from "react"
import Banner from "../../../components/auth/Banner"


function Register() {

  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordConfirm = () => setShowPasswordConfirm((show) => !show);

  return (
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
        <Button variant="contained">Registrar</Button>
        <RedirectPage link='/sign-up' text='Já possui uma conta? Faça Login agora mesmo!'/>
        <ContinueWithGoogle />
      </BoxForm>
      <Banner />
    </Container>
  )
}

export default Register

const Container = styled.div`
  display: flex;
`