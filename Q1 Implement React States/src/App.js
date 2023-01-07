
import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData]=useState("akash");
  function updateData(){
    setData("Akash Gautam")
  }
  return (
    <div class="App">
      <h1>States in react</h1>
      <h2>{data}</h2>
      <button onClick={updateData}>Update State</button>
    </div>
  );
}

export default App;
