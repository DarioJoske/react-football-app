import React,{ useState,useEffect } from 'react'
import { getStandingsData } from '../api';
import "../App.css";

const Standings = ({setTeamID,leagueID,setShowContent}) => {
  const[standings,setStandings] = useState([]);
  

  useEffect(() => {
      getStandingsData(leagueID)
        .then((response) => {
          setStandings(response[0].league.standings[0]);
        });
    }, [leagueID]);
  
  return (
    <div className='standings'>
      <table className='standings-table'>
        <thead>
          <tr>
          <th>#</th>
          <th>Team</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GD</th>
          <th>Form</th>
          <th>Pt</th>
          </tr> 
        </thead>
        <tbody>
          {standings?.map((standing) =>(
          <tr 
            key={standing.team.id}
            onClick={(e)=>{
              setShowContent(false);
              setTeamID(standing.team.id);
          }}
          >
            <td>{standing.rank}</td>
            <td><img className='club-logo-small' src={standing.team.logo} alt={standing.team.name}/>{standing.team.name}</td>
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