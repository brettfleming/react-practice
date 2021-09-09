import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [data, setData] =useState([])
  useEffect(() => {
      axios('https://opentdb.com/api.php?amount=10&category=9&difficulty=hard')
        .then(response => {
          console.log(response.data.results)
          setData(response.data.results)
        })
        .catch(err => {
          console.log(err)
        })
  }, [])
  console.log(data)
  return (
    <div className="App">
      {
        data.map(data => {
          if (data.type === 'multiple') {
            return (
            <div key={Math.floor(Math.random() * 1000)}>
              <p >{data.question}</p>
              <p>{data.correct_answer}</p>
              {
              data.incorrect_answers.map(option => {
                return <p>{option}</p>
              })}
            </div>
            )
          }
          return (
            <p key={Math.floor(Math.random() * 1000)}>{data.question}</p> )
        })
      }
      
    </div>
  );
}

export default App;
