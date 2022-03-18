import axios from "axios";

const leaguesURL = 'https://api-football-v1.p.rapidapi.com/v3/leagues'
const standingsURL = 'https://api-football-v1.p.rapidapi.com/v3/standings'
const fixturesURL = 'https://api-football-v1.p.rapidapi.com/v3/fixtures'
const teamsURL = 'https://api-football-v1.p.rapidapi.com/v3/teams';
const playersURL = 'https://api-football-v1.p.rapidapi.com/v3/players';

export const getLeaguesData = async () => {
    try {
        const {data: {response}}  = await axios.get(leaguesURL, {
          params: {country: 'Croatia', type: 'league'},
          headers: {
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
            'x-rapidapi-key': '5461597603mshbb50dc4b7316cf6p16ac2djsnb480c1d3a7f0'
          }
        })
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const getStandingsData = async (leagueID) => {
    try {
        const {data: {response}}  = await axios.get(standingsURL, {
          params: {season: '2021', league: leagueID},
          headers: {
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
            'x-rapidapi-key':'5461597603mshbb50dc4b7316cf6p16ac2djsnb480c1d3a7f0'
          }
        })
        return response;
    } catch (error) {
      console.log(error)
    }
}

export const getFixturesData = async (teamID) => {
  try {
      const {data: {response}}  = await axios.get(fixturesURL, {
        params: {team: teamID, last: '5'},
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key': '5461597603mshbb50dc4b7316cf6p16ac2djsnb480c1d3a7f0'
        }
      })
      return response;
  } catch (error) {
    console.log(error)
  }
}

export const getTeamInfoData = async (teamID) => {
  try {
      const {data: {response}}  = await axios.get(teamsURL, {
        params: {id: teamID,},
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key': '5461597603mshbb50dc4b7316cf6p16ac2djsnb480c1d3a7f0'
        }
      })
      return response;
  } catch (error) {
    console.log(error)
  }
}

export const getTeamPlayersData = async (teamID) => {
  try {
      const {data: {response}}  = await axios.get(playersURL, {
        params: {team: teamID, season: '2021'},
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key': '5461597603mshbb50dc4b7316cf6p16ac2djsnb480c1d3a7f0'
        }
      })
      return response;
  } catch (error) {
    console.log(error)
  }
}

