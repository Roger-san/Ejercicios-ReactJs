import React from "react";
import PokemonList from "./PokemonList";
import PokemonPost from "./PokemonPost";

class PokemonStateGlobal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }

  _fetchApi = () => {
    fetch("http://localhost:1010/api/pokemons")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ pokemons: data.pokemons });
      });
  };

  _handleChangeList = () => {
    this._fetchApi();
  };

  componentDidMount() {
    this._fetchApi();
  }

  render() {
    return (
      <div>
        <PokemonPost handleChangeList={this._handleChangeList} />
        <PokemonList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default PokemonStateGlobal;
