import React,{ useState,useEffect } from 'react'
import { getStandingsData } from '../api';





const Standings = ({setTeamID,leagueID}) => {
  const[standings,setStandings] = useState([]);

  useEffect(() => {
      getStandingsData(leagueID)
        .then((response) => {
          
         
          setStandings(response[0].league.standings[0]);
        });
    }, [leagueID]);

    
  return (
  
    
    <div>
      <table className='standings-table'>
        <thead>
          <tr>
          <td>Pos</td>
          <td>Name</td>
          <td>Played</td>
          <td>Win</td>
          <td>Draw</td>
          <td>Lose</td>
          <td>GD</td>
          <td>Form</td>
          <td>Points</td>
          </tr> 
        </thead>
        <tbody>
          {standings?.map((standing) =>(
          
          <tr 
            key={standing.team.id}
            onClick={(e)=>{
              console.log(standing.team.id)
              setTeamID(standing.team.id)
          }}
          >
            <td>{standing.rank}</td>
            <td><img className='club-logo-small' src={standing.team.logo} alt={standing.team.name}/> {standing.team.name}</td>
            <td>{standing.all.played}</td>
            <td>{standing.all.win}</td>
            <td>{standing.all.draw}</td>
            <td>{standing.all.lose}</td>
            <td>{standing.goalsDiff}</td>
            <td>{standing.form}</td>
            <td>{standing.points}</td>
            
          </tr>
          
          
          
           
          ))}
        </tbody>
      </table>
     
    </div>
      
  )
}

export default Standings