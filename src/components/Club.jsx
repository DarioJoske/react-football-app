import React,{useEffect,useState} from 'react';
import { getFixturesData, getTeamInfoData,getTeamPlayersData } from '../api';
import { Avatar, Button } from 'antd';
import "../App.css";
import { CloseOutlined } from '@ant-design/icons';


const Club = ({teamID,setShowContent}) => {
  const [fixtures,getFixtures] = useState([]);
  const [teamInfos,getTeamInfos] = useState([]);
  const [teamPlayers, getTeamPlayers] = useState([]);

  useEffect(() =>{
    getFixturesData(teamID)
      .then((response =>{
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
    <div className='club'>
      <div className='exit-button'><Button onClick={(e)=>{
          setShowContent(true);
          console.log(setShowContent);
        }}
        ><CloseOutlined/>
        </Button>
      </div>
      <div >
        {teamInfos?.map((teamInfo) =>(
          <div className='team-info-container'>            
            <img src={teamInfo.team.logo} alt={teamInfo.team.name}/>            
            <h1>{teamInfo.team.name}</h1>
            <h3>{teamInfo.team.country}</h3>
            <h4>Founded: {teamInfo.team.founded}</h4>
          </div>  
        ))}
      </div>
      <div className='team-content-container'>
      <table className='fixtures-table'>
        <thead>
          <tr>
            <th>Home</th>
            <th>Result</th>
            <th>Away</th>
          </tr>
        </thead>
        <tbody>
          {fixtures?.map((fixture) =>(
            <tr key={fixture.fixture.id}>
              <td>{fixture.teams.home.name}</td>
              <td>{fixture.goals.home}-{fixture.goals.away}</td>
              <td>{fixture.teams.away.name}</td>
            </tr>
          ))}

        </tbody>
      </table>
      <div className='squad-list'>
        <h3>Squad list</h3>
        {teamPlayers?.map((teamPlayer)=> (
          <div id={teamPlayer.player.id} className='squad-player'>
            <Avatar src={teamPlayer.player.photo} alt={teamPlayer.player.name}/>
            {teamPlayer.player.name}
            <div>
            {teamPlayer.player.age}y
            </div>  
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Club