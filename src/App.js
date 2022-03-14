import React, {useState} from 'react';

import { Layout } from 'antd';

import {Leagues,Standings,Club} from './components';

import './App.css';



const {Header,Footer,Sider,Content} = Layout;


const App = () => {
  const [leagueID,setLeagueID]=useState('210');
  const [teamID,setTeamID]=useState('');
  

  return (
    <>
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>
          <Leagues
            setLeagueID={setLeagueID}
          />
        </Sider>
        <Content>
          <Standings
            leagueID={leagueID}
            setTeamID={setTeamID}
          />
          <Club
            teamID={teamID}
          />
        </Content>  
      </Layout>
      <Footer>
      </Footer>
    </Layout>
    
    </>
  )
}

export default App;
