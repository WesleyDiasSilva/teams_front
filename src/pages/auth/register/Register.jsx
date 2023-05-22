import { Visibility, VisibilityOff } from "@mui/icons-material"
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material"
import { motion } from 'framer-motion'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Banner from "../../../components/auth/Banner"
import BoxForm from "../../../components/auth/BoxForm"
import ContinueWithGoogle from "../../../components/auth/ContinueWithGoogle"
import CustomButton from "../../../components/auth/CustomButton"
import RedirectPage from "../../../components/auth/RedirectPage"
import CustomAlert from "../../../components/feedback/CustomAlert"
import registerSchema from "../../../schemas/register"
import { signIn } from "../../../services/signInApi"

function Register() {

  const navigate = useNavigate()

  const [tooltip, setTooltip] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  
  const [errorEmail, setErrorEmail] = useState({status: false, message: ''})
  const [errorName, setErrorName] = useState({status: false, message: ''})
  const [errorPassword, setErrorPassword] = useState({status: false, message: ''})
  const [errorPasswordConfirmation, setErrorPasswordConfirmation] = useState({status: false, message: ''})

  const [loading, setLoading] = useState({status: false, text: 'Registrar'})

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordConfirm = () => setShowPasswordConfirm((show) => !show);

  function handleEmailChange({ target }) {
    setEmail(target.value);
    setErrorEmail({ status: false, message: '' });
  }

  function handleNameChange({ target }) {
    setName(target.value);
    setErrorName({ status: false, message: '' });
  }

  function handlePasswordChange({ target }) {
    setPassword(target.value);
    setErrorPassword({ status: false, message: '' });
  }

  function handlePasswordConfirmationChange({ target }) {
    setPasswordConfirmation(target.value);
    setErrorPasswordConfirmation({ status: false, message: '' });
  }

  const alertVariants = {
    hidden: { x: "100vw" }, 
    visible: { x: 0, transition: { duration: 0.5 } }, 
  }

  function handleRegister() {
    if (loading.status) return;

    const resultValidation = registerSchema.safeParse({email, password, passwordConfirmation, fullName: name});
    if (!resultValidation.success) {
      setErrorEmail({status: false, message: ''});
      setErrorName({status: false, message: ''});
      setErrorPassword({status: false, message: ''});
      setErrorPasswordConfirmation({status: false, message: ''});
      for (const err of resultValidation.error.errors) {
        switch (err.path[0]) {
          case 'email':
            setErrorEmail({status: true, message: 'Preencha com um e-mail válido por favor!'});
            break;
          case 'fullName':
            setErrorName({status: true, message: err.message});
            break;
          case 'password':
            setErrorPassword({status: true, message: err.message});
            break;
          case 'passwordConfirmation':
            setErrorPasswordConfirmation({status: true, message: err.message});
            break;
          default:
            break;
        }
      }
      return;
    }

    setLoading({status: true, text: 'Registrando...'});
    const response = signIn({ email, password, name: name.split(' ')[0], last_name: name.split(' ')[1]})
    response.then((res) => {
      setTooltip(true);
      setTimeout(() => {
        setLoading({status: false, text: 'Registrar'});
        setTooltip(false);
        navigate('/sign-up')
      }, 8000)
    }).catch((err) => {
      setTooltip(false);
      setLoading({status: false, text: 'Registrar'});
      console.log(err);
    })
  }

  const isDisabled = errorEmail.status || errorName.status || errorPassword.status || errorPasswordConfirmation.status;

  return (
    <>
      {tooltip ? 
      <Container>
        <motion.div
        variants={alertVariants}
        initial="hidden"
        animate="visible"
        style={{ position: "fixed", top: 0, right: 0, width: '30%' }} // Aplica diretamente no style do elemento
        >
        <CustomAlert
          title={'Conta Criada com Sucesso!'}
          severity={'success'}
        >
          <p>Sua conta foi criada com sucesso!</p>
          <strong>Você receberá em instantes um e-mail de confirmação!</strong>
        </CustomAlert>
        </motion.div>
      <BoxForm title={'Registre-se'}>
        <TextField 
          value={email} 
          onChange={handleEmailChange}
          id="standard-basic" 
          label="E-mail" 
          variant="outlined" 
          required
          error={errorEmail.status}
          helperText={errorEmail.message}
        />
        <TextField 
          value={name} 
          onChange={handleNameChange} 
          id="standard-basic" 
          label="Nome Completo" 
          variant="outlined" 
          required
          error={errorName.status}
          helperText={errorName.message}
        />
        <FormControl error={errorPassword.status}>
          <InputLabel required htmlFor="standard-adornment-password">Senha</InputLabel>
          <OutlinedInput
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
          {errorPassword.status && <FormHelperText>{errorPassword.message}</FormHelperText>}
        </FormControl>
        <FormControl error={errorPasswordConfirmation.status}>
          <InputLabel required htmlFor="standard-adornment-password-confirm">Confirmar Senha</InputLabel>
          <OutlinedInput
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
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
          {errorPasswordConfirmation.status && <FormHelperText>{errorPasswordConfirmation.message}</FormHelperText>}
        </FormControl>
        <CustomButton disabled={isDisabled} onClick={handleRegister} loading={loading}/>
        <RedirectPage link='/sign-up' text='Já possui uma conta? Faça Login agora mesmo!'/>
        <ContinueWithGoogle wait={loading} setWait={setLoading}/>
      </BoxForm>
      <Banner />
    </Container> : 
    <motion.div
      variants={{
        hidden: { x: '-100vw' },
        visible: { x: 0 },
        exit: { x: '100vw' }
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
    <Container>
      <BoxForm title={'Registre-se'}>
        <TextField 
          value={email} 
          onChange={handleEmailChange}
          id="standard-basic" 
          label="E-mail" 
          variant="outlined" 
          required
          error={errorEmail.status}
          helperText={errorEmail.message}
        />
        <TextField 
          value={name} 
          onChange={handleNameChange} 
          id="standard-basic" 
          label="Nome Completo" 
          variant="outlined" 
          required
          error={errorName.status}
          helperText={errorName.message}
        />
        <FormControl error={errorPassword.status}>
          <InputLabel required htmlFor="standard-adornment-password">Senha</InputLabel>
          <OutlinedInput
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
          {errorPassword.status && <FormHelperText>{errorPassword.message}</FormHelperText>}
        </FormControl>
        <FormControl error={errorPasswordConfirmation.status}>
          <InputLabel required htmlFor="standard-adornment-password-confirm">Confirmar Senha</InputLabel>
          <OutlinedInput
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
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
          {errorPasswordConfirmation.status && <FormHelperText>{errorPasswordConfirmation.message}</FormHelperText>}
        </FormControl>
        <CustomButton disabled={isDisabled} onClick={handleRegister} loading={loading}/>
        <RedirectPage link='/sign-up' text='Já possui uma conta? Faça Login agora mesmo!'/>
        <ContinueWithGoogle wait={loading} setWait={setLoading}/>
      </BoxForm>
      <Banner />
    </Container>
    </motion.div>}
    </>
  )
}

export default Register;

const Container = styled.div`
  display: flex;
`;
