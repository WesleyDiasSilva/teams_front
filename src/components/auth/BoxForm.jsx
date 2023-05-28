import styled from "styled-components"

function BoxForm({title, children}) {
  return (
    <Container>
      <Title>{title}</Title>
      <Form gap={children.length > 5 ? '20px' : '30px'}>
        {children}
      </Form>
    </Container>
  )
}



export default BoxForm

const Container = styled.div`
  background-color: #030d32;
  width: 40%;
  height: 100vh;
  gap: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 2rem;
  font-family: 'Roboto';
  color: #111111;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({gap}) => gap};
`