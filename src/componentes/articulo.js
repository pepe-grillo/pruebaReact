import React, { Component } from 'react';

class Articulo extends Component{

    render(){
        return (
            <tr className="Articulo">
                <td>
                    {this.props.articulo.codigo}
                </td>
                <td>
                    {this.props.articulo.descrip}
                </td> 
                <td>
                    {this.props.articulo.cantidad}
                </td>
                <td>
                    <input type="button" value="X"/>
                </td> 
            </tr>
        )
    }
}

export default Articulo;