import React from 'react';
import { useEffect, useState } from 'react';
import PokemonThumb from '../../PokemonThumb';
import { Button, CardTitle } from 'reactstrap';

import './pokedex.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pokedex = () => {
    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getAllPokemons = async () => {
        const res = await fetch(loadMore)
        const data = await res.json()

        setLoadMore(data.next)

        function createPokemonObject(results) {
            results.forEach(async pokemon => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                setAllPokemons(currentList => [...currentList, data])
                await allPokemons.sort((a, b) => a.id - b.id)
            })
        }
        createPokemonObject(data.results)
    }

    useEffect(() => {
        getAllPokemons()
       }, [])

    return (
        <section className="app-contaner">
          <CardTitle className="CardTitle">Pokemon Evolution</CardTitle>
          <div className="pokemon-container">
            <div className="all-container">
              {allPokemons.map( (pokemonStats, index) => 
                <PokemonThumb
                  key={index}
                  id={pokemonStats.id}
                  image={pokemonStats.sprites.other.dream_world.front_default}
                  name={pokemonStats.name}
                  type={pokemonStats.types[0].type.name}
                />)}
              
            </div>
              <Button color="primary" size="lg" onClick={() => getAllPokemons()}>Load more</Button>
          </div>
        </section>
      );
}

export default Pokedex;
