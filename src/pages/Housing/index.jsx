import Gallery from "../../components/Gallery/index";
import Accordion from "../../components/Accordion/index";
import Rating from "../../components/Rating/index";
import Tag from "../../components/Tag/index";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";



function Housing() {
  const { id } = useParams();
  const [appartment, setAppartment] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const getData = () => {

      fetch("../../data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          let myAppartment = myJson.find((app) => app.id === id);
          if (myAppartment) {
            setAppartment(myAppartment);
          } else {
            navigate("/*");
          }
        });
    };
    getData();
  }, [appartment, id, navigate]);

  return appartment ? (
    <div className="housing">
      <Gallery
        pictures={appartment.pictures}
        title={appartment.title}
      ></Gallery>
      <div className="content">
        <div className="content--left">
          <div className="titles">
            <h1>{appartment.title}</h1>
            <h2>{appartment.location}</h2>
          </div>
          <Tag tags={appartment.tags} />
        </div>
        <div className="content--right">
          <div className="host">
            <p>{appartment.host.name}</p>
            <img src={appartment.host.picture} alt={appartment.host.name} />
          </div>
          <Rating rating={appartment.rating}></Rating>
        </div>
      </div>

      <div className="accordions">
        <div className="description">
          <Accordion title="Description" content={appartment.description} />
        </div>

        <div className="equipement">
          <Accordion
            title="Équipements"
            content={appartment.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          />
        </div>
      </div>
    </div>
  ) : null;
}
export default Housing;