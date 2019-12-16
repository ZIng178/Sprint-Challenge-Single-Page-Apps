import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
 const [characters,setCharacters]=useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get("https://rickandmortyapi.com/api/character")
    .then(response=>{
      console.log("data", response.data.results)
      setCharacters(response.data.results)
      console.log("set", setCharacters)
    })
    .catch(error=>{
      console.log("ERROR", error)
    })
  }, []);

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {characters.map(item=>( 
        <div key={item.id}>
        
          <img className="character-image" src={item.image} alt={item.image}/>
          <h2>{item.name}</h2>
        </div>
      ))}
    </section>
  );
}
