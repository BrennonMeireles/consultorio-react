import React from "react";
import Topo from "../Topo"
import Rodape from "../Rodape";

function EstruturaPagina(props){  // props = propiedades 
    return(
        <section>
            <Topo></Topo>
                { props.children }
            <Rodape></Rodape>
        </section>
    )
} export default EstruturaPagina