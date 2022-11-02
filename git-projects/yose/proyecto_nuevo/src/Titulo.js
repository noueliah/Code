import React from 'react'// en esta línea importo React (el coso que lee y convierte el código en cosas lindas)
// y los otros componentes que quieras usar en este


function Titulo() { // adentro del return va el "contenido" del componente
    return (
        <div>
            <h1>Esto es un título</h1> /
            <p>El título sirve para titular.</p>
        </div>

    )
}

export default Titulo // siempre exportar para poder usar este componente afuera