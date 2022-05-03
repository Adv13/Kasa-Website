import fullStar from "../../assets/full-star.png";
import emptyStar from "../../assets/empty-star.png";

function Rating({ rating }) {
  let content = [];
  if (rating < 5) {
    for (let i = 0; i < rating; i++) {
      content.push(<img key={`key${i}`} src={fullStar} alt="star" />);
    }
    for (let i = rating; i < 5; i++) {
      content.push(<img key={`key${i}`} src={emptyStar} alt="star" />);
    }
  } else {
    for (let i = 0; i < rating; i++) {
      content.push(<img key={`key${i}`} src={fullStar} alt="star" />);
    }
  }

  return <div className="rating">{content}</div>;
}

export default Rating;