import Header from  './components/Header';
// App.tsx
// Este es el componente principal de nuestra aplicación React.

// Definimos una función llamada App.
// En React, los componentes funcionales son funciones de JavaScript
// que devuelven lo que queremos que se muestre en la pantalla (JSX).
function App(){
// El "return" contiene el JSX (HTML-like) que React va a renderizar.
  return(
    
    <div>
      {/* Un <div> simple como contenedor principal.*/}

      {/* Aquí es donde "montamos" o "renderizamos" nuestro componente Header.
          Se usa como si fuera una etiqueta HTML personalizada. */}
      <Header />
      
      {/* El elemento <main> es semántico para el contenido principal de la página. */}
      <main>
        <p>Bienvenido a tu agregador de deportes, futbol globall.</p>
      </main>
    </div>
  );
}

// Exportamos el componente App para que pueda ser utilizado
// por otros archivos de React (como main.tsx, que es el punto de entrada).
export default App;