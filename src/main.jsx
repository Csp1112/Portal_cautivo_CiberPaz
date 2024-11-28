// Importa los estilos básicos de Bootstrap para facilitar el diseño responsivo y componentes predefinidos
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa StrictMode de React para identificar problemas potenciales en la aplicación
import { StrictMode } from 'react';

// Importa la función createRoot para manejar el punto de entrada de la aplicación con React 18
import { createRoot } from 'react-dom/client';

// Importa los estilos globales definidos en el archivo CSS
import './index.css';

// Importa el componente principal de la aplicación
import App from './App.jsx';

// Renderiza la aplicación en el contenedor raíz del DOM
createRoot(document.getElementById('root')).render(
  // StrictMode envuelve la aplicación para ayudar a detectar problemas en el desarrollo, como efectos secundarios
  <StrictMode>
    <App /> {/* Componente principal de la aplicación */}
  </StrictMode>,
);
