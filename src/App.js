import React, { Component } from 'react';
import Principal from './componentes/Principal';
import ListaIndicadores from './componentes/lista_indicadores';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      consulta_del_servidor: [
        {
          codigo: 'A01',
          descrip: 'Tornillos',
          cantidad: 7
        },
        {
          codigo: 'A02',
          descrip: 'Tuercas',
          cantidad: 2
        },
        {
          codigo: 'A03',
          descrip: 'Martillos',
          cantidad: 5
        }
      ],
      consulta_indicadores: [
        {
          indic: 'I01',
          ind_nombre: 'index 1',
          ind_valor: 5.3456
        },
        {
          indic: 'I02',
          ind_nombre: 'index 2',
          ind_valor: 7.13
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        Mi App
        <Principal parametros={this.state.consulta_del_servidor}/>
        <hr/>
        <ListaIndicadores param_indicadores={this.state.consulta_indicadores}/>
      </div>
    );
  }
}

export default App;
