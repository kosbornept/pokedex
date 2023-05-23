import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import PokemonList from "./PokemonList";
import PokemonCard from "./PokemonCard";
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {
  const [currentURL, setCurrentURL] = useState("https://pokeapi.co/api/v2/pokemon?limit=151");
  const [loading, setLoading] = useState(true);
  const [pokemonURL, setPokemonURL] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});
  const [moveData, setMoveData] = useState();
  const [tabIndex, setTabIndex] = useState();

  useEffect(() => {
    setLoading(true);
    axios.get(currentURL).then(res => {
      setLoading(false);
      setPokemonURL(res.data.results.map(p => p.url))
      setPokemonData([]);
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
  const fPokeData = useMemo(() => [...new Map(pokemonData.map(v => [v.data.id, v])).values()], [pokemonData])
  fPokeData.sort((a,b) => a.data.id - b.data.id)

  function handleSelect(e) {
    if(e === 1 ) {
      setCurrentURL("https://pokeapi.co/api/v2/pokemon?limit=151")
      setTabIndex(1);
    }
    if(e === 2) {
      setCurrentURL("https://pokeapi.co/api/v2/pokemon?limit=100&offset=151")
      setTabIndex(2);
    }
    if(e === 3) {
      setCurrentURL("https://pokeapi.co/api/v2/pokemon?limit=135&offset=251")
      setTabIndex(3);
    }
    if(e === 4) {
      setCurrentURL("https://pokeapi.co/api/v2/pokemon?limit=107&offset=386")
      setTabIndex(4);
    }
    if(e === 5) {
      setCurrentURL("https://pokeapi.co/api/v2/pokemon?limit=156&offset=493")
      setTabIndex(5);
    }
    if(e === 6) {
      setCurrentURL("https://pokeapi.co/api/v2/pokemon?limit=72&offset=649")
      setTabIndex(6);
    }
    if(e === 7) {
      setCurrentURL("https://pokeapi.co/api/v2/pokemon?limit=88&offset=721")
      setTabIndex(7);
    }
    if(e === 8) {
      setCurrentURL("https://pokeapi.co/api/v2/pokemon?limit=96&offset=809")
      setTabIndex(8);
    }
    if(e === 9) {
      setCurrentURL("https://pokeapi.co/api/v2/pokemon?limit=105&offset=905")
      setTabIndex(9);
    }
    // if(e === 10) {
    //   setCurrentURL("https://pokeapi.co/api/v2/pokemon?limit=150&offset=1016")
    //   setTabIndex(9);
    // }
  }

  if(loading) return "loading..."

  return (
    <Tabs defaultIndex={tabIndex} onSelect={handleSelect}>
      <TabList className="mainNavTab" >
        <Tab>Home</Tab>
        <Tab>Gen 1</Tab>
        <Tab>Gen 2</Tab>
        <Tab>Gen 3</Tab>
        <Tab>Gen 4</Tab>
        <Tab>Gen 5</Tab>
        <Tab>Gen 6</Tab>
        <Tab>Gen 7</Tab>
        <Tab>Gen 8</Tab>
        <Tab>Gen 9</Tab>
        {/* <Tab>Specials</Tab> */}
      </TabList>
      <TabPanel>
        Welcome to my Pokémon API React project.
      </TabPanel>
      <TabPanel><PokemonList show={show} setModalData={setModalData} setShow={setShow} fPokeData={fPokeData} /></TabPanel>
      <TabPanel><PokemonList show={show} setModalData={setModalData} setShow={setShow} fPokeData={fPokeData} /></TabPanel>
      <TabPanel><PokemonList show={show} setModalData={setModalData} setShow={setShow} fPokeData={fPokeData} /></TabPanel>
      <TabPanel><PokemonList show={show} setModalData={setModalData} setShow={setShow} fPokeData={fPokeData} /></TabPanel>
      <TabPanel><PokemonList show={show} setModalData={setModalData} setShow={setShow} fPokeData={fPokeData} /></TabPanel>
      <TabPanel><PokemonList show={show} setModalData={setModalData} setShow={setShow} fPokeData={fPokeData} /></TabPanel>
      <TabPanel><PokemonList show={show} setModalData={setModalData} setShow={setShow} fPokeData={fPokeData} /></TabPanel>
      <TabPanel><PokemonList show={show} setModalData={setModalData} setShow={setShow} fPokeData={fPokeData} /></TabPanel>
      <TabPanel><PokemonList show={show} setModalData={setModalData} setShow={setShow} fPokeData={fPokeData} /></TabPanel>
      {/* <TabPanel><PokemonList show={show} setModalData={setModalData} setShow={setShow} fPokeData={fPokeData} /></TabPanel> */}
      <PokemonCard moveData={moveData} setMoveData={setMoveData} modalData={modalData} onClose={() => {setShow(false); setMoveData()}} show={show} />
    </Tabs>
  );
}

export default App;
