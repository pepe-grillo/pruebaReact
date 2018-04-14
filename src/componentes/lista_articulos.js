import React, { Component } from 'react';
import Articulo from './articulo';

class ListaArticulos extends Component{

    render(){
        let art_reg;
        if(this.props.param_articulos){
             art_reg = this.props.param_articulos.map(articulo =>{
                 return(
                     <Articulo key={articulo.codigo} articulo={articulo} elimArticulo={this.props.elimArticulo}/>
                 );
             });
        }

        return (
            <div className="ListaArticulos">
                <table border="1">
                    <caption>Lista de Artículos</caption>
                    <tbody>
                        <tr>
                            <th>Artículo</th>
                            <th>Descripción</th>
                            <th>Cantidad</th>
                        </tr>
                        {art_reg}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListaArticulos;