import React, { Component } from "react";

class PokemonPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      type: "",
    };
  }

  handleClick = (e) => {
    const urlApi = "http://localhost:1010/api/pokemons/";

    const newPokemon = {
      name: this.state.name,
      type: this.state.type,
    };

    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPokemon),
    };

    fetch(urlApi, opts)
      .then((response) => {
        console.log("POST SUCCESS");
        return response.json();
      })
      .then((data) => {
        this.props.onChangeList(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  handleInputChange = (e) => {
    if (e.target.id === "name") this.setState({ name: e.target.value });
    if (e.target.id === "type") this.setState({ type: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Componente del ciclo de vida</h1>
        <input
          id="name"
          placeholder="name"
          type="text"
          onBlur={this.handleInputChange}
        />
        <input
          id="type"
          placeholder="type"
          type="text"
          onBlur={this.handleInputChange}
        />
        <button onClick={this.handleClick}>Añadir</button>
      </div>
    );
  }
}

export default PokemonPost;
