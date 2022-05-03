import LogoKasaBlanc from '../../assets/LOGO_white.png'

function Footer() {
  return (
    <footer className="footer">
      <img src={LogoKasaBlanc} alt="logo" className="logo-footer" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;