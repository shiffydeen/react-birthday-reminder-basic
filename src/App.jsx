import React, {useState} from 'react';
import data from './data'
import List from './List.jsx'



function App() {
  const [celebrants, setCelebrants] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>{celebrants.length} birthdays today</h3>
        <List celebrants={celebrants}/>
        <button className="btn btn-block" type="button" onClick={() => setCelebrants([])}>clear all</button>
      </section>
    </main>
    
  )
}

export default App
