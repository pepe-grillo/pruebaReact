import React, { Component } from 'react';
import ListaArticulos from './lista_articulos';
import AgregaArticulo from './agrega_articulo';

class Principal extends Component {
  
  constructor(){
    super();
    this.state = {lista_articulos: []};
  }

  render() {
    if(this.state.lista_articulos.length===0){
      this.state= {lista_articulos: this.props.parametros};
    }
    
    return (
      <div className="Principal">
        <AgregaArticulo agregaArticulo={this.agregaArticulo.bind(this)}/>
        <ListaArticulos param_articulos={this.state.lista_articulos}/>
        <input type="button" value="Confirmar"/>
      </div>
    );
  }

  agregaArticulo(articulo){
    let articulos = this.state.lista_articulos;
    articulos.push(articulo);
    this.setState({lista_articulos: articulos});
  };
}

export default Principal;
