import React, { Component } from 'react';
import ListaArticulos from './lista_articulos';
import AgregaArticulo from './agrega_articulo';

class Principal extends Component {
  render() {
    return (
      <div className="Principal">
        <AgregaArticulo/>
        <ListaArticulos param_articulos={this.props.parametros}/>
        <input type="button" value="Confirmar"/>
      </div>
    );
  }
}

export default Principal;
