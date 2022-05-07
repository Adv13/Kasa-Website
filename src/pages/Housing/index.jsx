import Gallery from "../../components/Gallery/index";
import Accordion from "../../components/Accordion/index";
import Rating from "../../components/Rating/index";
import Tag from "../../components/Tag/index";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";



function Housing() {
  const { id } = useParams();//permet d'accéder aux id contenues dans data qui seront loadées dans l'url avec housing
  const [appartment, setAppartment] = useState(null);//appartment stocke l'objet retourné par l'API grâce à useState tandis que setAppartment permet de l'exploiter
  const navigate = useNavigate();//anciennement useHistory, useNavigate est un hook qui permet de rediriger sur une page d'avant/d'après et/ou spécifique si besoin


  useEffect(() => {//ce hook permet de déclencher une fonction de manière asynchrone, ici la récupération des données pour les intégrer dans les éléments du return de la page
    const getData = () => {//stock dans getData les données


      // const getData = async () =>
      // await fetch("./scripts/data/recipes.json", {
      //   mode: "no-cors",
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      // })
      //   .then((res) => res.json())
      //   .catch((err) => console.log("An error occurs when fetching recipes", err));
      

      fetch("../../data.json", {//récupère les données dans le fichier json
        headers: {//infos sur le type de données
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {//ensuite récupère la réponse incluant les données
          return response.json();//données mises au format json
        })
        .then(function (myJson) {//ensuite applique une recherche dans le fichier json retourné
          let myAppartment = myJson.find((app) => app.id === id);//stocker dans une variable l'appartemment dont li'd correspond strictement à l'id sur laquelle on avait cliqué précédemment grâce à useParams
          if (myAppartment) {
            console.log(myAppartment);
            setAppartment(myAppartment);//afficher l'appartement
          } else {
            console.log('test 3 données sur page housing');
            navigate("/*");//sinon afficher page error 404
          }
        });
    };
    getData();
  }, [appartment, id, navigate]);//le tableau en second paramètre permet de prendre en compte un changement dans les States appartment/id/navigate pour relancer la fonction à nouveau

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