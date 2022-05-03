import styled from 'styled-components'
import Data from '../../data/dataLogements2.json'
import colors from '../../utils/style/colors'
import HomeImg from '../../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png'
import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import { Loader } from '../../utils/style/Atoms'


const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 50px;
`
const PageTitle = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  height: 50%;
  padding: 30px;
  object-fit:contain;
  background-image:url(${HomeImg});
  border-radius: 1rem;
  flex: 1;
`
const StyledTitle = styled.h2`
  text-align:center;
  line-height: 50px;
  color:${colors.blackColor};

`
const PageContent = styled.div`
  max-width:100%;
  height:600px;
  margin-top:20px;
  background-color: ${colors.secondary};
  border-radius: 1rem;`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`
const SpanError = styled.h2`
  padding:320px;
  text-align:center;
  line-height: 50px;
  color:${colors.primary};`

function Home() {
 const [isDataLoading, setDataLoading] = useState(false)
 const [error, setError] = useState(false)
 const [DataLogements, setDataLogements] = useState([])

  // Test dans console
  useEffect(() => {
    
    //let url = 'data/dataLogements2.json'
    fetch(Data)
         .then((response) => response.json()
         
         .then(({ DataLogements }) => console.log(DataLogements))
         .catch((error) => console.log(error))
     )
 }, [])

// METHODE 1
//   useEffect(() => {
//   fetchData()
//   setDataLoading(true)
//   fetch(`Data`).then((response) =>
//     response.json().then(({ DataLogements }) => {
//       setDataLogements(DataLogements)
//       setDataLoading(false)
//     })
//   )
// }, [])

// METHODE 2
// useEffect(()=>{
//   async function fetchDataLogements(){
//     setDataLoading(true)
//     try{
//       const response = await fetch(Data)
//       const {DataLogements} = await response.json()
//       setDataLogements(DataLogements)
//     }
//     catch(err){
//       console.log('===== error =====', err)
//       setError(true)
//     }
//     finally{
//       setDataLoading(false)
//     }
    
//   }
//   fetchDataLogements()
// }, [])

// if (error) {
//   return <span>Oups! Il y a eu un problème.</span>
// }

// METHODE 3
 const getData = () => {
  setDataLoading(true);
   fetch("data/dataLogements.json",{
     headers: {
       "Content-Type": "application/json",
       Accept: "application/json",
     },
   })
   .then(function(response){
     return response.json();
   })
   .then(function (myJson){  
     setDataLogements(myJson);
     setDataLoading(false);
   })
   .catch(function(err){
      console.log('===== error =====', err)
      setError(true);
    })
 };

 useEffect(()=>{
   getData();
 }, []);

if (error) {
  return <SpanError>Oups! Il y a eu un problème avec le chargement des données.</SpanError>
}

  return (
    <div>
    <HomeWrapper>
        <PageTitle>
          <StyledTitle>
            Chez vous, partout et ailleurs
          </StyledTitle>
        </PageTitle>
        <PageContent>
        {isDataLoading ? (
           <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          ):(
          <CardsContainer>
            {DataLogements.map((profile, index) => (
              <Card
                key={`${profile.name}-${index}`}
                title={profile.title}
                cover={profile.cover}
                pictures={profile.pictures}
                description={profile.description}
                name={profile.host.name}
                picture={profile.host.picture}
                rating={profile.rating}
                location={profile.location}
                equipments={profile.equipments}
                tags={profile.tags}
              />
            ))}
          </CardsContainer>
           )}
        </PageContent>
         
         
        

    </HomeWrapper>
    </div>
  )
}

export default Home

          // {isDataLoading ? (
          //   <LoaderWrapper>
          //     <Loader />
          //   </LoaderWrapper>
          // ):(
          // <CardsContainer>
          //   {DataLogements.map((profile, index) => (
          //     <Card
          //       key={`${profile.name}-${index}`}
          //       title={profile.title}
          //       cover={profile.cover}
          //       pictures={profile.pictures}
          //       description={profile.description}
          //       name={profile.host.name}
          //       picture={profile.host.picture}
          //       rating={profile.rating}
          //       location={profile.location}
          //       equipments={profile.equipments}
          //       tags={profile.tags}
          //     />
          //   ))}
          // </CardsContainer>
          // )}