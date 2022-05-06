import fullStar from "../../assets/full-star.png";
import emptyStar from "../../assets/empty-star.png";

function Rating({ rating }) {
  let content = [];
  if (rating < 5) {
    for (let i = 0; i < rating; i++) {
      content.push(<img key={`key${i}`} src={fullStar} alt="star" />);//remplir en orange les étoiles de 1 à rating (= note attribuée de 1 à 5 dans le data.json)
    }
    for (let i = rating; i < 5; i++) {
      content.push(<img key={`key${i}`} src={emptyStar} alt="star" />);//étoile vide pour les étoiles restantes au dessus de rating jusqu'à 5 inclus
    }
  } else {
    for (let i = 0; i < rating; i++) {
      content.push(<img key={`key${i}`} src={fullStar} alt="star" />);//remplir en plein supplémentaire par mesure de sécurité
    }
  }

  return <div className="rating">{content}</div>;
}

export default Rating;