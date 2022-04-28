import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
`

const ErrorTitle = styled.h1`
  margin-top:5%;
  margin-bottom:2%;
  font-weight: bolder;
  font-size:18em;
`

const ErrorSubtitle = styled.h2`
  margin-top:1%;
  margin-bottom:20%;
  font-weight: lighter;
  color: ${colors.primary};
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>404</ErrorTitle>
      <ErrorSubtitle>
        Oups ! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <Link to="/">
        Retourner sur la page d'accueil
      </Link>
    </ErrorWrapper>
  )
}

export default Error