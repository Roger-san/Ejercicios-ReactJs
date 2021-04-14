import React from "react";
import PokemonPost from "./PokemonPost";
import PokemonList from "./PokemonList";

// Nuestro componente index contendra el estado y tendra 2 hijos los cuales conectara mediante handles
class Pokemons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeList: false,
    };
  }

  // handle que escuchara un cambio en el form y hara un cambio de estado
  handleChangeList = (change) => {
    this.setState({
      changeList: change,
    });
  };

  // Creamos el formulario para añadir pokemons y el listado de pokemons
  render() {
    return (
      <div>
        <PokemonPost onChangeList={this.handleChangeList} />
        <hr />
        <PokemonList
          change={this.state.changeList}
          onChangeList={this.handleChangeList}
        />
      </div>
    );
  }
}

export default Pokemons;
