import React,{ useEffect, useState } from 'react';
import { getLeaguesData } from '../api';
import {Menu} from 'antd';
import "../App.css";

const Leagues = ({setLeagueID,setShowContent}) => {
  const[leagues,setLeagues] = useState([]);
    

  useEffect(() => {
    getLeaguesData()
      .then((response) => {        
        setLeagues(response);
          });
      }, []);


  return (
    <div className='leagues'>
        <Menu
        defaultSelectedKeys={[0]}
        mode="inline"
        >
          {leagues?.map((league) => (
            <Menu.Item 
            key={league.league.id} 
            onClick={(e)=>{
                setLeagueID(league.league.id);
                setShowContent(true);
            }}
            className="league"      
            >
              {league.league.name} <img src={league.league.logo} alt={league.league.name} />
            </Menu.Item>
          ))}
        </Menu> 
    </div>
  )
}

export default Leagues
