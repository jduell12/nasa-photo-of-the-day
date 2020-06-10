import React, {useState, useEffect} from "react";
import axios from 'axios';
import {BASE_URL, API_KEY} from './constants/index'
import "./App.css";

function App() {
  const [nasaData, changeData] = useState([]);

  useEffect(()=>{
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        changeData(res.data);
      })
      .catch(err => {
        console.log(err);
      })

      return ()=>{}
  }, [])

  return (
    <div className="App">
      <h1>{nasaData.title}</h1>
      <h3>{nasaData.date}</h3>
      <img src={nasaData.url}></img>
      <p>{nasaData.explanation}</p>
      <footer>{nasaData.copyright}</footer>
    </div>
  );
}

export default App;
