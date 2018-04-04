import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class PruebaGrafica extends Component{

    render(){
        return (
            <Plot
              data={[
                {
                  x: [1, 2, 3, 4, 5],
                  y: [2, 6, 3, 6, 7],
                  type: 'scatter',
                  mode: 'lines+points',
                  marker: {color: 'red'},
                }
              ]}
              layout={ {width: 620, height: 540, title: 'Plot hecha con Plotly'} }
            />
          );
    }
}

export default PruebaGrafica;