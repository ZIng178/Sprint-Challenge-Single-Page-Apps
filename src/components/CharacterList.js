import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SearchForm from "./SearchForm"
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
 const [characters,setCharacters]=useState(null);
 const [search,setSearch]=useState("");
 const [searchResults,setSearchResults]=useState(null)

   
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get("https://rickandmortyapi.com/api/character")
    .then(response=>{
      console.log("data", response.data.results)
      setCharacters(response.data.results)
      setSearchResults(response.data.results)
      console.log("set", setCharacters)
    })
    .catch(error=>{
      console.log("ERROR", error)
    })
  }, []);

  useEffect(()=>{
    if(characters){
  const results = characters.filter(character => {
      return character.name.toLowerCase().includes(search.toLowerCase());
    
    });
  
setSearchResults(results);
  }
  },[search])

  const handleChange= (event)=>{
    event.preventDefault();
    setSearch(event.target.value)
  }

  const handleSubmit =(event)=>{
    event.preventDefault();

  }
  if (!searchResults ){
    return <div>Loading </div>
  }
  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <SearchForm placeholder="search for your characters here" value={search}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      />
      {searchResults.map(item=>( 
        <div key={item.id}>
        
          <img className="character-image" src={item.image} alt={item.image}/>
          <h2>{item.name}</h2>
        </div>
      ))}
    </section>
  );
}
