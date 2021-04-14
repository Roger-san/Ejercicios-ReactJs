import React from "react";

class PokemonPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      type: "",
    };
  }

  _handleClick = () => {
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
        return response.json();
      })
      .then((data) => {
        //alert("Pokemon añadido con id: " + data.newPokemon.id);
        this.props.handleChangeList();
        this.setState({ name: "", type: "" });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  _handleInputChange = (e) => {
    if (e.target.id === "name") this.setState({ name: e.target.value });
    if (e.target.id === "type") this.setState({ type: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>POKEMON FORM</h1>
        <input
          id="name"
          placeholder="name"
          type="text"
          onChange={this._handleInputChange}
          value={this.state.name}
        />
        <input
          id="type"
          placeholder="type"
          type="text"
          onChange={this._handleInputChange}
          value={this.state.type}
        />
        <button onClick={this._handleClick}>Añadir</button>
      </div>
    );
  }
}

export default PokemonPost;
