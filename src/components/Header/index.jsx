import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import LogoKasaRouge from '../../assets/LOGO.png'

const HomeLogo = styled.img`
  height: 50px;
`

const NavContainer = styled.nav`
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={LogoKasaRouge} />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">A Propos</StyledLink>

      </div>
    </NavContainer>
  )
}

export default Header