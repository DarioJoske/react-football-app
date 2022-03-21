import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import {Leagues,Standings,Club} from './';
import { Layout,Button} from 'antd';
import '../App.css';

const {Header,Footer,Sider} = Layout;

const Home = () => {

  const [leagueID,setLeagueID]=useState('210');
  const [teamID,setTeamID]=useState('620');
  const [showContent,setShowContent] = useState(true);
  
  //Auth
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchUserName = async () => {
      try {
          const q = query(collection(db, "users"), where("uid", "==", user?.uid));
          const doc = await getDocs(q);
          const data = doc.docs[0].data();
          setName(data.name);
      } catch (err) {
          console.error(err);
          alert("An error occured while fetching user data");
      }
  };
  
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading,navigate]);
  //
  return (
    <div className="home"> 
    <Layout>
      <Header>
        <div className="header-container">
          <div className="user-email">User: {name} {user?.email}
        </div>
        <div className="email">{user?.email}</div>
        <Button type="primary" onClick={logout}>
          Logout
        </Button>
        </div>
      </Header>
    </Layout>
    <Layout>
      <Sider
        className="sider"
        breakpoint="lg"
        collapsedWidth="0"  
      >
        <Leagues
          setLeagueID={setLeagueID}
          setShowContent={setShowContent}
        />
      </Sider>
      {
        showContent ?
          <Standings
          setShowContent={setShowContent}
          leagueID={leagueID}
          setTeamID={setTeamID}
          />
        :
          <Club
          teamID={teamID}
          setShowContent={setShowContent}
          />
      }    
    </Layout>
    <Layout>
      <Footer
      className="footer">
        <div>React Football App made by Dario Josipović</div>
      </Footer>
    </Layout>
    
    </div>
  )
}

export default Home