import React from "react";
import styled from "styled-components";

const card =styled.div`
border : 10px solid black;
margin :5%;
padding : 5%;
background : red;
`;


export default function CharacterCard({name,image,species}){
  return (
    <card>
    <img src={image} alt="Rick and Morty"/>
    <h3>Name :{name}</h3>
    <p> Species :{species}</p>
    </card>
  )
  
}
