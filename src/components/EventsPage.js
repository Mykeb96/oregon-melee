import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const EventsPage = (props) => {

  const [isLoading, setIsLoading] = useState(true)
  // const [oregonEvents, setOregonEvents] = useState([])

  const closeNav = () => {
    props.setIsNavOpen(false)
  }

  // const endpoint = "https://api.smash.gg/gql/alpha";

  // const headers = {
	// "content-type": "application/json",
  //   "Authorization": "Bearer b64cc6bd4af1d2175fba093e445babde"
  // }

//   const graphqlQuery = {
//     "query": `query TournamentsByState {
//       tournaments(query: {
//         perPage: 50
//         filter: {
//           addrState: "OR"
//         }
//       }) {
//         nodes {
//           id
//           name
//           addrState
//         }
//       }
//     }`
// }

// const graphqlQuery = {
//   "query": `query TournamentsByVideogame {
//     tournaments(query: {
//       perPage: 15
//       page: 1
//       sortBy: "startAt asc"
//       filter: {
//         past: false
//         videogameIds: [
//           2
//         ]
//       }
//     }) {
//       nodes {
//         id
//         name
//         slug
//       }
//     }
//   }`
// }

//   useEffect(() => {

//     const response = axios({
//       url: endpoint,
//       method: 'post',
//       headers: headers,
//       data: graphqlQuery
//     }).then(res => {
//       for (let i = 0; i < res.data.data.tournaments.nodes.length; i++) {
//       console.log(res.data.data.tournaments.nodes[i])
//       setOregonEvents(currentArray => [...currentArray, res.data.data.tournaments.nodes[i].name])
//     }
//     })
//     .catch(err => console.log(err))

//     setIsLoading(false)
    

//   },[])


  return (
    <div className='events-container' onClick={closeNav}>
      <div className='info-container'>
        <h1 className='epic-gaming-title'><a href='http://smash.gg/mae'>Epic Gaming</a></h1>
        <span>*Every* Sunday</span>
        <span>12:30pm : Doors Open</span>
        <span>1:00pm : Melee Doubles</span>
        <span>2:00pm : Melee Singles</span>
      </div>
        <img id='store-pic' src={require('./assets/epic_store_front.PNG')} alt="" className="pic" />
        
        {/* {isLoading ? 'loading...' : oregonEvents.map(element => <span>{element}</span>)} */}
    </div>
  )
}

export default EventsPage