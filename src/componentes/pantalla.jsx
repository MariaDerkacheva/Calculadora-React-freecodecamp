import React from "react";
import "../hojas-de-estilo/pantalla.css"
/*
* Componentes funcionales 
devuelve la estructura de componentes 
 */
const Pantalla = ({ input }) => (
    <div className="input">
        {input}
    </div>
)

export default Pantalla;