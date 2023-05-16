import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import './App.css';

function App() {
  const [currentURL, setCurrentURL] = useState("https://pokeapi.co/api/v2/pokemon?limit=151");
  const [nextPageURL, setNextPageURL] = useState();
  const [prevPageURL, setPrevPageURL] = useState();
  const [loading, setLoading] = useState(true);
  const [pokemonURL, setPokemonURL] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(currentURL).then(res => {
      setLoading(false);
      setPokemonURL(res.data.results.map(p => p.url))
      setNextPageURL(res.data.next);
      setPrevPageURL(res.data.previous);
    })
  },[currentURL])

  useEffect(() => {
    pokemonURL.forEach(u => {
      axios.get(u).then(res => {
        setPokemonData(prev => [...prev, res])
      })
    })
  }, [pokemonURL])

  // Filter and arrange data
  const fPD = [...new Map(pokemonData.map(v => [v.data.id, v])).values()]
  fPD.sort((a,b) => a.data.id - b.data.id)

  // Pagination Functions
  function goNextPage() {
    setCurrentURL(nextPageURL);
  }
  function goPrevPage() {
    setCurrentURL(prevPageURL);
  }

  if(loading) return "loading..."

  return (
    <>
      <PokemonList fPD={fPD} />
      <Pagination 
        goNextPage={nextPageURL ? goNextPage : null} 
        goPrevPage={prevPageURL ? goPrevPage : null}
      />
    </>
  );
}

export default App;
