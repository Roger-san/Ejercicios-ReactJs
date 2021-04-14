import React from "react";

class PokemonList extends React.Component {
  render() {
    return (
      <div>
        <h1>POKEMON LIST</h1>
        <ul>
          {this.props.pokemons.map((pokemon, i) => {
            return (
              <li key={`pokemon-list-${i}`}>
                {pokemon.name} - {pokemon.type}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default PokemonList;
