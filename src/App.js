import React, {useState, useEffect} from "react";
import axios from 'axios';
import styled from 'styled-components'
import {BASE_URL, API_KEY} from './constants/index'
import "./App.css";
import Title from './components/Title'
import Picture from './components/Picture'
import Explanation from './components/Explanation'
import Footer from './components/Footer'

const AppStyled = styled.div`
  padding: 3%;
  background-color: #302E34;
`

function App() {
  const [nasaData, changeData] = useState([]);

  useEffect(()=>{
    // axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    //   .then(res => {
    //     changeData(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })

      return ()=>{}
  }, [])

  return (
    // <AppStyled className="App">
    //   <Title title = {nasaData.title} date = {nasaData.date}/>
    //   <br></br>
    //   <Picture url = {nasaData.url}/>
    //   <Explanation explanation = {nasaData.explanation}/>
    //   <Footer copyright = {nasaData.copyright}/>
    // </AppStyled>

    <AppStyled className="App">
    <Title title = 'Good Title' date = 'June 11, 2020'/>
    <br></br>
    <Picture url = 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2853&q=80'/>
    <Explanation explanation = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
    <Footer copyright = 'Author'/>
  </AppStyled>
  );
}

export default App;
