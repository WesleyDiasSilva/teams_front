import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material"
import { motion } from 'framer-motion'
import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import Banner from "../../../components/auth/Banner"
import BoxForm from "../../../components/auth/BoxForm"
import ContinueWithGoogle from "../../../components/auth/ContinueWithGoogle"
import CustomButton from "../../../components/auth/CustomButton"
import RedirectPage from "../../../components/auth/RedirectPage"
import CustomAlert from '../../../components/feedback/CustomAlert'
import useToken from '../../../hooks/useToken'
import { loginSchema } from "../../../schemas/login"
import { signUp } from "../../../services/signUpApi"
import { UserContext } from '../../../contexts/UserContext'

function Login() {
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate()
  const [tooltip, setTooltip] = useState({status: false, message: '', severity: 'error', title: 'Erro'})
  const [showPassword, setShowPassword] = useState(false)
  const {setToken} = useToken()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState({status: false, text: 'Login'})

  const [errorEmail, setErrorEmail] = useState({status: false, message: ''})
  const [errorPassword, setErrorPassword] = useState({status: false, message: ''})

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
    const result = loginSchema.shape.email.safeParse(target.value);
    if (result.success) {
      setErrorEmail({status: false, message: ''})
    }
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
    const result = loginSchema.shape.password.safeParse(target.value);
    if (result.success) {
      setErrorPassword({status: false, message: ''})
    }
  };

  function handleLogin() {
    if(loading.status) return
    const resultValidation = loginSchema.safeParse({email, password})
    if(!resultValidation.success) {
      setErrorEmail({status: false, message: ''})
      setErrorPassword({status: false, message: ''})

      resultValidation.error.errors.forEach((error) => {
        if (error.path[0] === 'email') {
          setErrorEmail({status: true, message: 'Preencha com um e-mail válido por favor!'})
        }
        if (error.path[0] === 'password') {
          setErrorPassword({status: true, message: 'A senha precisa ter no mínimo 6 caracteres!'})
        }
      })

      return
    }
    setLoading({status: true, text: 'Fazendo login...'})
    const response = signUp({email, password})
    response.then((data) => {
      console.log(data)
      setLoading({status: false, text: 'Login'})
      if(data.user.name) {
        setUser({
          name: data.user.name,
          email: data.user.email,
          id: data.user.id,
          image: data.user.image,
          last_name: data.user.last_name
        })
        setToken(data.user.token.access_token)
        navigate('/social-teams')
      }
    }).catch((error) => {
      setTooltip({status: true, message: 'E-mail não é valido!', severity: 'error', title: 'Erro'})
      setTimeout(() => {
        setTooltip({status: false, message: '', severity: 'error', title: 'Erro'})
      }, 3000)
      setLoading({status: false, text: 'Login'})
    })
  }


  const variants = {
    hidden: { x: '100vw' },
    visible: { x: 0 },
    exit: { x: '-100vw' }
  };

  return (
    <>
      {tooltip.status ? 
      <Container>
        <CustomAlert severity={tooltip.severity} title={tooltip.title}>{tooltip.message}</CustomAlert>
      <Banner />
      <BoxForm title={'Login'}>
        <TextField helperText={errorEmail.message} error={errorEmail.status} value={email} onChange={handleEmailChange} id="standard-basic" label="E-mail" variant="outlined" required/>
        <FormControl>
          <InputLabel required htmlFor="standard-adornment-password">Senha</InputLabel>
          <OutlinedInput
            error={errorPassword.status}
            value={password} 
            onChange={handlePasswordChange}
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
          {errorPassword.status && <FormHelperText id="component-error-text">{errorPassword.message}</FormHelperText>}
        </FormControl>
        <CustomButton disabled={errorEmail.status || errorPassword.status || !email || !password} loading={loading} onClick={handleLogin}/>
        <RedirectPage link='/sign-in' text='Ainda não possui uma conta? Crie agora mesmo!'/>
        <ContinueWithGoogle wait={loading} setWait={setLoading}/>
      </BoxForm>
    </Container>
      :
      <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
      <Container>
        <Banner />
        <BoxForm title={'Login'}>
          <TextField helperText={errorEmail.message} error={errorEmail.status} value={email} onChange={handleEmailChange} id="standard-basic" label="E-mail" variant="outlined" required/>
          <FormControl>
            <InputLabel required htmlFor="standard-adornment-password">Senha</InputLabel>
            <OutlinedInput
              error={errorPassword.status}
              value={password} 
              onChange={handlePasswordChange}
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
            {errorPassword.status && <FormHelperText id="component-error-text">{errorPassword.message}</FormHelperText>}
          </FormControl>
          <CustomButton disabled={errorEmail.status || errorPassword.status || !email || !password} loading={loading} onClick={handleLogin}/>
          <RedirectPage link='/sign-in' text='Ainda não possui uma conta? Crie agora mesmo!'/>
          <ContinueWithGoogle wait={loading} setWait={setLoading}/>
        </BoxForm>
      </Container>
      </motion.div>
    }
    </>
    
  )
}

export default Login

const Container = styled.div`
  display: flex;
`
