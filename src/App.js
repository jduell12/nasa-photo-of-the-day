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

  const Button = () => {
    return(
      <button onClick={() => getDate()}>Click to change date</button>
    )
  }

  const getDate = () => {
    return(
      <p>working</p>
    )
  }

  // const changeDate = ()=> {

  // }

  return (
    <div className="App">
      <h1>{nasaData.title}</h1>
      <h3>{nasaData.date}</h3> 
      <Button />
      {
        nasaData.url !== null ? <img src={nasaData.url} alt="nasa"/> : <p>Picture Loading</p>
      }
      <p>{nasaData.explanation}</p>
      <footer>{nasaData.copyright}</footer>
    </div>
  );
}

export default App;
