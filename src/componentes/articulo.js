import React, { Component } from 'react';

class Articulo extends Component{

    render(){
        return (
            <div className="Articulo">
                <tr>
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
            </div>
        )
    }
}

export default Articulo;