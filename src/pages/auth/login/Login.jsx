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

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Container>
      <Banner />
      <BoxForm title={'Login'}>
        <TextField id="standard-basic" label="E-mail" variant="outlined" />
        <FormControl>
          <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
          <OutlinedInput
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