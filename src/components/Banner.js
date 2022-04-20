import '../styles/Banner.css'
import leaf_logo from '../assets/leaf_logo.png'
import Recommendation from './Recommendation'

function Banner() {////
  const title = 'Projet Kasa'
  const currentMonth = new Date().getMonth()
  const isSpring = currentMonth >= 2 && currentMonth <= 5
  const recommendation = isSpring ? (
    <div>C'est le printemps, rempotez !</div>
  ) : (
    <div>Ce n'est pas le printemps donc pas besoin de rempoter.</div>
  )




  return (
    <div className='pk-banner'>
      <div className='pk-banner-row'>
        <img src={leaf_logo} alt='Projet Kasa' className='pk-logo' />
        <h1 className='pk-title'>{title}</h1>
      </div>
      <div className="recommendation">{recommendation}</div>
    </div>

  )

}

export default Banner