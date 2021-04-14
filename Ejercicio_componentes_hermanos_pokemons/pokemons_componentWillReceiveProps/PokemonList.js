import React, { Component } from "react";

class PokemonList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      change: this.props.change,
      pokemons: [],
    };
  }

  _fetchApi = () => {
    fetch("http://localhost:1010/api/pokemons")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ pokemons: data.pokemons, change: true });
      });
  };

  componentDidMount() {
    this._fetchApi();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.change) this._fetchApi();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate: nextProps y nextState: ",
      nextProps,
      nextState
    );
    // debo devolver un boleano
    return this.state.pokemons.length !== nextState.pokemons.length;
  }

  render() {
    return (
      <div className="bordes">
        <h2> pokemons </h2>
        <ol>
          {this.state.pokemons.map((pokemon, i) => {
            return <li key={i}> {pokemon.name} </li>;
          })}
        </ol>
      </div>
    );
  }
}

export default PokemonList;
