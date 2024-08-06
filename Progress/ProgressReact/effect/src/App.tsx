import { useEffect, useState } from 'react'
import './App.css'
import { usePokemon, useTimer } from './hooks/useTimer'


function App() {
  const [incognito, setIncognito] = useState(true);
  const [count, setCount] = useState(1);
  const { seconds } = useTimer();
  const { pokemon } = usePokemon(count);

  function getPokemon(id: number){
    const realId = `00${id}`.slice(-3);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${realId}.png`;
  }

  useEffect(() => {
    console.log('Rendered'); 
  })

  useEffect(() => {
    console.log('Run on mount'); 
  }, [])

  const getAnotherPokemon = () => {
    const newId = Math.floor(Math.random() * 251) + 1;
    setCount(newId);
    setIncognito(true);
  }

  // const handleClick = () => {
  //   setCount(count + 1);
  // }

  const reveal = () => {
    setIncognito(inc => !inc);
  }

  const className = incognito ? 'incognito' : '';
  const timer = `${~~(seconds / 60)}: ${seconds % 60}`;

  return (
    <>
      <h1>{timer}</h1>
      <h1>{pokemon?.name}</h1>
      <img className={className} src={getPokemon(count)} alt={pokemon?.name}/>
      <button
      onClick={reveal}>
        reveal
      </button>
      <button
      onClick={getAnotherPokemon}>
        get another pokemon
      </button>
    </>
  )
}

export default App
