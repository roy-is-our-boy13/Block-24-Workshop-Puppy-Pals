import {puppyList} from './data.js'
import {useState} from 'react'
import './App.css';

function App() 
{
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  console.log(puppyList);
  console.log("puppyList: ", puppies);
  console.log(featuredPup);

return (
  <>
    <div>
      {puppies.map((puppy) => (
        <p onClick={() => { setFeatPupId(puppy.id); }} key={puppy.id}> {puppy.name} </p>
      ))}
    { featPupId && featuredPup && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
    </div>
  </>
);
}

export default App
