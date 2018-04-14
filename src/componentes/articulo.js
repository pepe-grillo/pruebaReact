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
                    <input type="button" onClick={this.manejaELimArticulo.bind(this)} value="X"/>
                </td> 
            </tr>
        )
    }

    manejaELimArticulo(e){
        this.props.elimArticulo(this.props.articulo);
        e.preventDefault();
    }
}

export default Articulo;