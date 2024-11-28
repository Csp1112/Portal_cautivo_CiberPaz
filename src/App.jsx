// App.jsx
import { useState } from 'react'; // Importa el hook useState para manejar el estado del componente
import Section from './components/Section'; // Importa el componente Section que renderiza cada sección

// Datos para las secciones
const sectionsData = [
  { title: 'Tu puerta a un internet responsable', content: 'Da el primer paso hacia un mundo digital más consciente y protegido' }, // Primera sección con título y contenido
  { title: 'Pequeñas acciones, grandes cambios', content: 'Aprende y actúa por un mejor futuro digital con Ciber Paz' }, // Segunda sección
  { title: 'Conéctate con Ciber Paz', content: 'Dale click para conectarte a la red y disfrutar de acceso gratuito a internet' }, // Tercera sección
];

// Imágenes del footer asociadas a cada sección
const images = {
  0: 'footer-4.svg',    // Imagen para la primera sección
  1: 'footer-5.svg',    // Imagen para la segunda sección
  2: 'footer-6.svg',    // Imagen para la tercera sección
};

function App() {
  const [currentSection, setCurrentSection] = useState(0); // Estado para rastrear la sección actual
  const totalSections = sectionsData.length; // Total de secciones

  // Función para avanzar a la siguiente sección
  const nextSection = () => {
    if (currentSection < totalSections - 1) { // Comprueba si no es la última sección
      setCurrentSection(currentSection + 1); // Actualiza a la siguiente sección
    }
  };

  // Función para retroceder a la sección anterior
  const prevSection = () => {
    if (currentSection > 0) { // Comprueba si no es la primera sección
      setCurrentSection(currentSection - 1); // Actualiza a la sección anterior
    }
  };

  return (
    <Section
      // Pasa el título de la sección actual
      title={sectionsData[currentSection].title}

      // Pasa el contenido de la sección actual
      content={sectionsData[currentSection].content}

      // Función para manejar el avance a la siguiente sección
      onNext={nextSection}

      // Función para manejar el retroceso a la sección anterior
      onPrev={prevSection}

      // Imagen del footer correspondiente a la sección actual
      footerImage={images[currentSection]}

      // Índice de la sección actual, comenzando en 0
      sectionIndex={currentSection}

      // Total de secciones disponibles
      totalSections={totalSections}

      // Descripción accesible de la sección actual
      aria-label={`Sección ${currentSection + 1} de ${totalSections}`}
    />
  );
}

export default App;
