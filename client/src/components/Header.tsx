// client/src/components/Header.tsx
// import React from "react"; //simpre que usamos tsx importamos React


// Importa el CSS Module. Lo importamos como 'styles'.
// Cuando haces esto, 'styles' se convierte en un objeto JavaScript.
// Cada propiedad de 'styles' es el nombre de una clase CSS que definiste
// en Header.module.css (ej: headerContainer), y su valor es el nombre de clase
// único y complejo que Vite/React generaron para la encapsulación.

import styles from './Header.module.css';


// Definimos un componente funcional llamado Header.
// Un componente funcional es una función de JavaScript que retorna JSX.
function Header(){

    return(
        // <header> es un elemento semántico de HTML5, ideal para la cabecera de la página.
        // Usamos la propiedad `className` en JSX para aplicar clases CSS.
        // Accedemos a la clase 'headerContainer' de nuestro objeto 'styles'.
        <header className={styles.headerContainer}>
            {/* <h1> es el título principal de nuestra aplicación */}
            <h1 className="text-cyan-400">Futbol Globall</h1>
             {/* <nav> agrupa los enlaces de navegación */}
            <nav>
                {/* <a> son los enlaces. Por ahora, "#" es un marcador de posición. */}
                <a href="#">Partidos</a>
                <a href="#">Resultados</a>
                <a href="#">Noticias</a>
            </nav>
        </header>
    );

}

// Exportamos el componente Header para que otros archivos puedan importarlo y usarlo.
export default Header;
