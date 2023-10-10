import {puppyList} from './data.js'
import './App.css'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log("puppyList: ", puppyList);

  return (
      <div className="App">
        <h1>Hello</h1>
        { 
          puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>;
  })
}
      </div>
);
}
export default App;

