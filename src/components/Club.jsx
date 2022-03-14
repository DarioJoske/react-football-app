import React,{useEffect,useState} from 'react';
import { getFixturesData, getTeamInfoData,getTeamPlayersData } from '../api';


const Club = ({teamID}) => {
  const [fixtures,getFixtures] = useState([]);
  const [teamInfos,getTeamInfos] = useState([]);
  const [teamPlayers, getTeamPlayers] = useState([]);

  useEffect(() =>{
    getFixturesData(teamID)
      .then((response =>{
        console.log(response);
        getFixtures(response);
        
      }))
  },[teamID]);

  useEffect(()=> {
    getTeamInfoData(teamID)
      .then((response =>{
        console.log(response);
        getTeamInfos(response);
      }))
  },[teamID]);

  useEffect(() => {
    getTeamPlayersData(teamID)
      .then((response)=>{
        console.log(response);
        getTeamPlayers(response);
      })
  },[teamID]);

 



  return (
    <div>
      <div>
        {teamInfos?.map((teamInfo) =>(
          <>
            <img src={teamInfo.team.logo} alt={teamInfo.team.name}/>
            <h2>{teamInfo.team.name}</h2>
          </>  
        ))}
      </div>
      <div>
        {teamPlayers?.map((teamPlayer)=> (
          <div id={teamPlayer.player.id}>
            {teamPlayer.player.name}
          </div>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <td>Home</td>
            <td>Result</td>
            <td>Away</td>
          </tr>
        </thead>
        <thead>
          {fixtures?.map((fixture) =>(
            <tr key={fixture.fixture.id}>
              <td>{fixture.teams.home.name}</td>
              <td>{fixture.goals.home}-{fixture.goals.away}</td>
              <td>{fixture.teams.away.name}</td>
            </tr>
          ))}

        </thead>
      </table>
    </div>
  )
}

export default Club