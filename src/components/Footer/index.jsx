import styled from 'styled-components'
import LogoKasaBlanc from '../../assets/LOGO_white.png'
import colors from '../../utils/style/colors'

const FooterLogo = styled.img`
  height: 40px;
  width:100px;
`

const FooterContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.blackColor};
`

const CopyRight = styled.h2`
 color:${colors.whiteColor};
 font-weight: lighter;
`

function Footer() {
    return (
      <FooterContainer>
        <FooterLogo src={LogoKasaBlanc} />
        <CopyRight>
          © 2020 Kasa. All rights reserved
        </CopyRight>
      </FooterContainer>
      
    )
  }
  
  export default Footer