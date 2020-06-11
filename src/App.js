import React, {useState, useEffect} from "react";
import axios from 'axios';
import {BASE_URL, API_KEY} from './constants/index'
import "./App.css";

function App() {
  const [nasaData, changeData] = useState([]);
  const [buttonClickStatus, changeStatus] = useState(false);
  const [hideDate, changeDisplayDate] = useState(true);

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

function ChangedButtonStatus(){
  if (buttonClickStatus){
    return (
      <div>
        <input type='date'/>
        <button onClick={() => changeStatus(false)}>Submit</button>
      </div>
    )
  } else {
    return <div></div>
  }
}

  return (
    <div className="App">
      <h1>{nasaData.title}</h1>
      <h3>{nasaData.date}</h3> 
      <button onClick={() => changeStatus(true)}>Click to change date</button>
      <ChangedButtonStatus />
      <br></br>
      {
        nasaData.url !== null ? <img src={nasaData.url} alt="nasa"/> : <p>Picture Loading</p>
      }
      <p>{nasaData.explanation}</p>
      <footer>{nasaData.copyright}</footer>
    </div>
  );
}

export default App;
