import React from "react";
import Header from "./components/Header.js";
import {Route} from "react-router-dom";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import WelcomePage from "./components/WelcomePage";
import styled from "styled-components";
import SearchForm from "./components/SearchForm";



export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/card/:id" component={CharacterCard}/>
      <Route  path="/list" component={CharacterList}/>
      <Route exact path ='/Search' component={SearchForm}/>
 </main>
  );
}
