import React, { Component } from 'react';
import Principal from './componentes/Principal';
import ListaIndicadores from './componentes/lista_indicadores';
import PruebaGrafica from './componentes/prueba_grafica';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      consulta_del_servidor: [
        {
          codigo: 'A0001',
          descrip: 'artículo 1',
          cantidad: 11
        },
        {
          codigo: 'A0002',
          descrip: 'artículo 2',
          cantidad: 22
        },
        {
          codigo: 'A0003',
          descrip: 'artículo 3',
          cantidad: 33
        },
        {
          codigo: 'A0004',
          descrip: 'artículo 4',
          cantidad: 44
        },
        {
          codigo: 'A0005',
          descrip: 'artículo 5',
          cantidad: 55
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
        <hr/>
        <PruebaGrafica/>
      </div>
    );
  }
}

export default App;
