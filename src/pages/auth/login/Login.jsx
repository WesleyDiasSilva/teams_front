import styled from "styled-components"
import Banner from "../../../components/auth/Banner"
import BoxForm from "../../../components/auth/BoxForm"
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material"
import { useState } from "react"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import RedirectPage from "../../../components/auth/RedirectPage"
import ContinueWithGoogle from "../../../components/auth/ContinueWithGoogle"

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Container>
      <Banner />
      <BoxForm title={'Login'}>
        <TextField value={email} onChange={({target}) => setEmail(target.value)} id="standard-basic" label="E-mail" variant="outlined" required/>
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
          <InputLabel required htmlFor="standard-adornment-password-confirm">Senha</InputLabel>
        </FormControl>
        <Button variant="contained">Login</Button>
        <RedirectPage link='/sign-in' text='Ainda não possui uma conta? Crie agora mesmo!'/>
        <ContinueWithGoogle />
      </BoxForm>
    </Container>
  )
}

export default Login

const Container = styled.div`
  display: flex;
`