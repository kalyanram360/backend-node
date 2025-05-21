import { useState } from 'react'
import './App.css'
import { use } from 'react'
import { useEffect } from 'react'


function App() {


    const [jokes, setJokes] = useState([])

    useEffect(() => {
      fetch("/api/jokes")
        .then((response) => response.json())
        .then((data) => setJokes(data))
        .catch((error) => console.error("Error fetching jokes:", error));
    }, [])
    return(
     <>
      <div>
        <h1>Jokes</h1>
        <ul>
          {jokes.map((joke) => (
            <li key={joke.id}>
              <strong>{joke.title}</strong>: {joke.joke}
            </li>
          ))}
        </ul>
      </div>

     </>
    )
}

export default App
