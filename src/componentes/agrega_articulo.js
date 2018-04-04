import React, { Component } from 'react';

class AgregaArticulo extends Component{

    render(){
        return (
            <div className="AgregaArticulo">
             <form>
                <legend>Nuevo Artículo:</legend>
                 <input type="text" ref="articulo_nuevo"/>
                 <input type="text" ref="descrip_nuevo"/>
                 <input type="number" ref="cantidad_nuevo"/>
                 <input type="submit" ref="boton_agregar" value="Agregar"/>
             </form>
            </div>
        )
    }
}

export default AgregaArticulo;