import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] =useState([])
  useEffect(() => {
      fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=hard')
        .then(response => {
          if (response.ok) {
            return response.json 
          } throw response;
        })
        .then(data => {
          setData(data)
        })
        .catch(err => {
          console.log(err)
        })
  }, [])
  return (
    <div className="App">
      {data}
      <p>Hello world</p>
    </div>
  );
}

export default App;
