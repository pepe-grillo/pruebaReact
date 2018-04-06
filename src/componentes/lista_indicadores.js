import React, { Component } from 'react';
import Indicador from './indicador';

class ListaIndicadores extends Component {
  render() {
    let reg_indicador;
    if(this.props.param_indicadores){
        reg_indicador = this.props.param_indicadores.map(indicador =>{
             return(
                 <Indicador key={indicador.indic} indicador={indicador}/>
             );
         });
    }

    return (
        <div className="ListaIndicadores">
            <table border="1">
                <caption>Lista de Indicadores</caption>
                <tbody>
                    <tr>
                        <th>Indicador</th>
                        <th>Nombre</th>
                        <th>Valor</th>
                    </tr>
                    {reg_indicador}
                </tbody>
            </table>
        </div>
    )
}
}

export default ListaIndicadores;