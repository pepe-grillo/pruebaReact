import React, { Component } from 'react';

class Indicador extends Component{

    render(){
        return (
            <div className="Indicador">
                <tr>
                    <td>
                        {this.props.indicador.indic}
                    </td>
                    <td>
                        {this.props.indicador.ind_nombre}
                    </td> 
                    <td>
                        {this.props.indicador.ind_valor}
                    </td>
                </tr>
            </div>
        )
    }
}

export default Indicador;