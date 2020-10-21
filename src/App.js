import React, {useState, useEffect} from "react";
import axios from 'axios';
import styled from 'styled-components'
import {BASE_URL, API_KEY} from './constants/index'
import "./css/index.css"
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
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        console.log(res);
        changeData(res.data);
      })
      .catch(err => {
        console.log(err);
      })

      return ()=>{}
  }, [])
  
  return (
    <AppStyled className="App">
      <Title title = {nasaData.title} date = {nasaData.date}/>
      <br></br>
      <Picture url = {nasaData.url}/>
      <Explanation explanation = {nasaData.explanation}/>
      <Footer copyright = {nasaData.copyright}/>
  </AppStyled>
    
  );
}

export default App;
