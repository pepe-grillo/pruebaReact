import React, { Component } from 'react';

class AgregaArticulo extends Component{

    constructor(){
        super();
        this.state = {
            nuevoArticulo: {}
        };
    }
    
    render(){
        return (
            <div className="AgregaArticulo">
             <form onSubmit={this.hAgregaArticulo.bind(this)}>
                <legend>Nuevo Artículo:</legend>
                 <input type="text" ref="articulo_nuevo"/>
                 <input type="text" ref="descrip_nuevo"/>
                 <input type="number" ref="cantidad_nuevo"/>
                 <input type="submit" ref="boton_agregar" value="Agregar"/>
             </form>
            </div>
        )
    }

    hAgregaArticulo(e){
        if(this.refs.articulo_nuevo.value === ''){
            alert('Llena el código del artículo carita.');
        }else{
            this.setState({nuevoArticulo:{
                codigo: this.refs.articulo_nuevo.value,
                descrip: this.refs.descrip_nuevo.value,
                cantidad: this.refs.cantidad_nuevo.value
            }}, function(){
                this.props.agregaArticulo(this.state.nuevoArticulo);
            });
        }
        e.preventDefault();
    }

}

export default AgregaArticulo;