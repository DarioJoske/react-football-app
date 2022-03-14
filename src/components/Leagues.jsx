import React,{ useEffect, useState } from 'react';
import {Menu} from 'antd';
import { getLeaguesData } from '../api';




const Leagues = ({setLeagueID}) => {
    
    const[leagues,setLeagues] = useState([]);

    useEffect(() => {
        getLeaguesData()
          .then((response) => {
            
            
            setLeagues(response);
          });
      }, []);


  return (
    <div>
        <Menu
        defaultSelectedKeys={[0]}
        mode="inline"
        style={{ width: 200 }}
        >
        {leagues?.map((league) => (
            <Menu.Item 
            key={league.league.id} 
            onClick={(e)=>{
                console.log(league.league.id)
                setLeagueID(league.league.id)
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
