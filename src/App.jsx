import {puppyList} from './data.js'
import './App.css'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    // some logic here
  }
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
      {/* <p>{ featPupId }</p>  */}
      
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ol>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ol>
        </div>
      )}
    </div>
  );
}

export default App;

