import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] =useState()
  useEffect(() => {
    try {
      fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=hard')
       .then(response => {
         if (response.ok) {
           return response.json()
           
         } 
       })
    } catch (err) {
      console.log(err)
    }

  }, [])
  return (
    <div className="App">
      
      <p>Hello world</p>
    </div>
  );
}

export default App;
