import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { confirmEmail } from '../../../services/confirmEmailApi';

function ConfirmEmail() {
  const navigate = useNavigate()
  const {code} = useParams();

  useEffect(() => {
    console.log(code)
    const response = confirmEmail(code)
    response.then(() => {
      navigate('/sign-up')
    }).catch(() => {
      navigate('/sign-in')
    })
  }, [code, navigate])
  return (
    <Container>
    </Container>
  )
}

export default ConfirmEmail

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FeedbackCard = styled.div`
  width: 50%;
  height: 75%;
  background-color: #a41dc9;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
`

const FeedbackTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`

const FeedbackText = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  width: 80%;
  line-height: 1.5;
  `