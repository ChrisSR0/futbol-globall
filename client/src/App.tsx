// App.tsx
// Este es el componente principal de nuestra aplicación React.

// Definimos una función llamada App.
// En React, los componentes funcionales son funciones de JavaScript
// que devuelven lo que queremos que se muestre en la pantalla (JSX).
function App(){
// El "return" contiene el JSX (HTML-like) que React va a renderizar.
  return(
    <div>
      {/* Un simple encabezado para indicar que la limpieza fue exitosa */}
      <h1>Hola, Futbol globall</h1>
    </div>
  );
}

// Exportamos el componente App para que pueda ser utilizado
// por otros archivos de React (como main.tsx, que es el punto de entrada).
export default App;