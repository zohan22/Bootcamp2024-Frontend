import { useEffect, useState } from "react";

const url = 'https://pokeapi.co/api/v2/pokemon/';

function useTimer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds((count) => count + 1);
        }, 1000);
        return () => {
          clearInterval(interval);
        }
      }, [])
      return { seconds }
}

function getData(id: number) {
  return fetch(url + id)
  .then(response => response.json())
  .then(data => data);
}

function usePokemon(id: number): {pokemon: any} {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getData(id)
    .then(pokemon => {
      setPokemon(pokemon);
      console.log(pokemon)
    });
  }, [id]);

  return { pokemon }
}

export { useTimer, usePokemon };