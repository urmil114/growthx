import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('http://localhost:8080/api/test')
      .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setMessage(data.message))
      .catch(error => {
        console.error('Error fetching data:', error);
        setMessage('Backend not connected (Is it running?)');
      })
  }, [])

  return (
    <>
      <h1>Growx Trading Platform</h1>
      <div className="card">
        <h2>Backend Status</h2>
        <p>{message}</p>
      </div>
    </>
  )
}

export default App
