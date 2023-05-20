import styled from "styled-components"

function Banner() {
  return (
    <ContainerBanner>
      <Title>Teams</Title>
      <Description>
        A melhor solução quando o assunto é integração, engajamento e produtividade para suas equipes.
      </Description>
    </ContainerBanner>
  )
}

export default Banner

const ContainerBanner = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px;
  box-sizing: border-box;
  gap: 30px;
`

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  font-weight: 700;
  font-family: 'Passion one';
`

const Description = styled.p`
  font-size: 1.2rem;
  color: #fff;
  font-weight: 400;
  text-align: center;
  font-family: 'Roboto';
  line-height: 1.3;
`