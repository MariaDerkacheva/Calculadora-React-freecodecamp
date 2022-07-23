import React from "react";
import "../hojas-de-estilo/boton.css"

function Boton(props) {
    /* funcion que va devolver false o true */
    const esOperador =valor => {
//isNaN=> si la cadena de caracteres no es numero y tampoco es un ".""=" va devolver true
        return isNaN(valor) && (valor !== ".") && (valor !== "=");
    }

    return(                                                            //.trim() => metodo que remueve espacioes del principio o final de una cadena de caracteres
        <button className={`boton-contenedor ${esOperador(props.children) ? "operador" : null}`.trimEnd()}
         onClick={ () => props.manejarClick(props.children)}>
            
            {props.children}
        </button>
    );
}

export default Boton