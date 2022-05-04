import { useState, useEffect } from "react";
import imgTop from "../../assets/top-img.png";
import Card from "../../components/Card/index";
import { Loader } from '../../utils/style/Atoms'

function Home() {
  const [data, setData] = useState([]);//data stocke l'objet retourné par l'API grâce à useState tandis que setData permet de l'exploiter
  const [isDataLoading, setDataLoading] = useState(false)//permet d'afficher un loader lorsque la page a besoin de temps pour charger

  console.log('test 1 sur fetch')
  const getData = () => {//stock dans getData les données
    fetch("data.json", {//récupère les données dans le fichier json (dans le dossier public)
      headers: {//infos sur le type de données
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {//ensuite récupère la réponse incluant les données
        console.log(response)//affiche les données dans la console pour vérifier
        return response.json();//données formatées en json
        
      })
      .then(function (myJson) {
        setData(myJson);//exploiter les données formatées
        console.log('test 2 sur fetch')
      });
  };

  useEffect(() => {
    console.log('test 3 sur fetch')
    setDataLoading(true)//loader true = visible
    getData();//lancer la fonction concernant les données pour ensuite les utiliser/afficher dans le return ci-dessous
    setDataLoading(false)//loader false = non visible
  }, []);//le tableau vide permet d'exécuter le code qu'à la construction de la page

  return (
    <section className="home-content">
      <div className="top">
        <img src={imgTop} alt="background" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
      {isDataLoading ? (
        <Loader />
      ) : (
      <div className="main">
        <div className="main--grid">
          {data &&
            data.map(({ id, title, cover }) => (
              <Card id={id} title={title} cover={cover} key={id}></Card>
            ))}
        </div>
      </div>
      )}
    </section>
  );
}

export default Home;