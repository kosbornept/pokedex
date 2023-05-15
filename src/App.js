import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentURL, setCurrentURL] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageURL, setNextPageURL] = useState();
  const [prevPageURL, setPrevPageURL] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(currentURL).then(res => {
      setLoading(false);
      setPokemon(res.data.results.map(p => p.name))
      setNextPageURL(res.data.next);
      setPrevPageURL(res.data.previous);
    })
  },[currentURL])

  function goNextPage() {
    setCurrentURL(nextPageURL);
  }

  function goPrevPage() {
    setCurrentURL(prevPageURL);
  }

  if(loading) return "loading..."

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination 
        goNextPage={nextPageURL ? goNextPage : null} 
        goPrevPage={prevPageURL ? goPrevPage : null}
      />
    </>
  );
}

export default App;
