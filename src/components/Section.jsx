// Section.jsx

// Importa AnimatePresence y motion desde Framer Motion para manejar las animaciones de entrada y salida.
// Estos son útiles para crear transiciones dinámicas al cambiar de secciones o mostrar elementos.
import { AnimatePresence, motion } from 'framer-motion';

// Importa el componente Footer, que se utiliza para mostrar un pie de página visual.
import Footer from './Footer';

// Importa PropTypes para validar las propiedades pasadas al componente.
import PropTypes from 'prop-types';

// Importa Button, un componente reutilizable para los botones de navegación "Anterior" y "Siguiente".
import Button from './Button';

// Importa Card, un componente que contiene los términos y condiciones.
import Card from './CardTerms';

// Importa Checkbox, que incluye una casilla para que el usuario acepte los términos y condiciones.
import Checkbox from './CheckBox';

// Importa el componente para visualizar los videos de tiktok procesados con ia desde el back
import TikTokVideoPlayer from './tiktokvideoplayer';

// Importa Social, un componente para mostrar botones de redes sociales.
import Social from './Social';

// Importa Animal, que muestra un componente animado relacionado con la narrativa del proyecto.
import Animal from './Animal';

// Define el componente Section. Este representa una página o sección en el portal y contiene elementos como el título, contenido, botones, y el footer.
function Section({ title, content, onNext, onPrev, footerImage, totalSections, sectionIndex }) {
  return (
  <div
      // Define el elemento principal de la sección como el contenido principal de la página para propósitos de accesibilidad.
      role="main"
      // Asocia el título de la sección con el contenedor para que los lectores de pantalla puedan identificarlo.
      aria-labelledby="section-title"
      // Relaciona la descripción de la sección con el contenedor principal.
      aria-describedby="section-description"
      style={{
        // Define que el contenedor ocupe todo el ancho y alto de la ventana.
        width: '100vw',
        height: '100vh',
        display: 'flex', // Usa flexbox para estructurar el contenido interno.
        flexDirection: 'column', // Alinea los elementos internamente de forma vertical.
        justifyContent: 'space-between', // Distribuye el espacio uniformemente entre los elementos.
        alignItems: 'center', // Centra los elementos horizontalmente.
        backgroundImage: `url(fondo-nutria-3.svg)`, // Asigna una imagen de fondo específica para la sección.
        backgroundRepeat: 'no-repeat', // Evita que la imagen de fondo se repita.
        backgroundSize: 'cover', // Escala la imagen de fondo para cubrir completamente el contenedor.
        overflow: 'hidden', // Oculta cualquier contenido que sobresalga del contenedor.
        zIndex: 1, // Coloca este contenedor por encima de otros elementos.
      }}
    >

    {/* Logos accesibles */}
    <div 
      style={{ 
        display: 'flex',  // Utiliza Flexbox para alinear los logos horizontalmente.
        position: 'absolute',  // Posiciona el contenedor respecto al borde superior izquierdo.
        left: '2%',  // Espaciado desde el lado izquierdo del contenedor principal.
        top: '5%',  // Espaciado desde la parte superior del contenedor principal.
        gap: '0vw'  // Define un espacio nulo entre los elementos dentro del contenedor.
      }}
    >
      <img 
        src="/logo_mintic.svg"  // Ruta de la imagen del logo del Ministerio TIC.
        alt="Logo MINTIC"  // Descripción para usuarios con lector de pantalla o cuando la imagen no carga.
        onClick={() => window.open('https://www.mintic.gov.co/portal/inicio/', '_blank')}  
        // Acción al hacer clic: abre el sitio web oficial del Ministerio TIC en una nueva pestaña.
        style={{ 
          width: '11%',  // Define el ancho del logo como un porcentaje relativo a la ventana.
          height: '111%',  // Define la altura del logo, proporcional al ancho.
          cursor: 'pointer'  // Cambia el cursor a un puntero indicando interactividad.
        }} 
        aria-label="Enlace al sitio web oficial del Ministerio TIC"  
        // Proporciona una descripción accesible para lectores de pantalla, útil para navegación inclusiva.
      />
      <img 
        src="/logo_ciberpaz.png"  // Ruta de la imagen del logo de Ciberpaz.
        alt="Logo ciber paz"  // Descripción del logo para accesibilidad y cuando la imagen no carga.
        onClick={() => window.open('https://ciberpaz.gov.co/portal/', '_blank')}  
        // Acción al hacer clic: abre el sitio web oficial de Ciberpaz en una nueva pestaña.
        style={{ 
          width: '6%',  // Define un tamaño más pequeño en ancho para este logo.
          height: '6%',  // Define la altura proporcional al ancho.
          cursor: 'pointer'  // Cambia el cursor para mostrar que es interactivo.
        }} 
        aria-label="Enlace al sitio web oficial de Ciberpaz"  
        // Descripción accesible que informa la funcionalidad del enlace a los usuarios.
      />
    </div>
      
    {/* Contenido TikTokVideoPlayer */}
    <TikTokVideoPlayer />
      
    {/* Contenido principal */}
    <div 
      style={{ 
        flex: 1,  // Permite que el contenedor ocupe el espacio disponible de forma proporcional en el eje principal.
        display: 'flex',  // Aplica Flexbox para organizar los elementos internos.
        flexDirection: 'column',  // Alinea los elementos (título y descripción) en una columna vertical.
        alignItems: 'center',  // Centra los elementos horizontalmente dentro del contenedor.
        justifyContent: 'center',  // Centra los elementos verticalmente dentro del contenedor.
        color: '#313B72',  // Define el color del texto del contenido principal.
        paddingTop: '6%'  // Añade espacio superior para separar el contenido de otros elementos.
      }}
    >
      <h2 
        id="section-title"  // Define un identificador único para relacionar este título con accesibilidad.
        className='titillium-web-bold'  // Aplica una clase CSS para estilos tipográficos específicos.
        style={{ 
          fontSize: '7vh',  // Define el tamaño del texto basado en el alto de la ventana para mayor adaptabilidad.
          padding: '2px 10px',  // Agrega relleno interno para separar el texto de los bordes del fondo.
          backgroundColor: 'rgba(169, 202, 181, 0.8)',  // Establece un fondo semitransparente para destacar el texto.
          borderRadius: '20px',  // Aplica esquinas redondeadas al fondo del título.
          display: 'inline-block'  // Asegura que el título tenga un tamaño basado en su contenido.
        }}
      >
        {title}  {/* Inserta dinámicamente el título de la sección pasada como prop. */}
      </h2>
      
      <p 
        id="section-description"  // Define un identificador único para asociar este párrafo con accesibilidad.
        className='titillium-web-semibold'  // Aplica una clase CSS para estilos tipográficos específicos.
        style={{ 
          fontSize: '4vh',  // Define un tamaño de fuente menor que el título, adaptativo al alto de la ventana.
          padding: '2px 10px',  // Añade relleno interno para espaciar el texto de los bordes.
          backgroundColor: 'rgba(169, 202, 181, 0.8)',  // Fondo semitransparente para resaltar el contenido.
          borderRadius: '20px',  // Esquinas redondeadas que combinan con el estilo del título.
          display: 'inline-block'  // Ajusta el tamaño del contenedor al contenido del párrafo.
        }}
      >
        {content}  {/* Inserta dinámicamente el contenido descriptivo de la sección pasada como prop. */}
      </p>
    </div>


    {/* Animal Component, solo en la última sección */}
    {sectionIndex === totalSections - 1 && ( // Comprueba si es la última sección antes de renderizar el componente.
      <motion.div
        initial={{ opacity: 0 }} // Inicia la animación con opacidad 0 (invisible).
        animate={{ opacity: 1 }} // Termina la animación con opacidad 1 (visible) y en su posición original.
        exit={{ opacity: 0 }} // Desaparece con opacidad 0 al salir.
        transition={{ duration: 0.5 }} // Define una transición de 0.5 segundos para suavizar la animación.
        style={{
          display: 'flex', // Usa Flexbox para alinear contenido interno.
          justifyContent: 'center', // Centra el contenido horizontalmente.
          alignItems: 'center', // Centra el contenido verticalmente.
        }}
      >
        <a
          href="https://sensibilizacion.ciberpaz.gov.co/#/data-ciberpaz/response/64?type=public" // URL del módulo de sensibilización de Ciberpaz.
          rel="noopener noreferrer" // Mejora la seguridad al abrir enlaces en nuevas pestañas.
          aria-label="Ir al módulo de sensibilización de Ciberpaz" // Proporciona una descripción accesible para lectores de pantalla.
          style={{
            display: 'flex', // Permite que el contenido interno sea flexible y centrado.
            width: '400px', // Ancho deseado para el contenedor del enlace.
            height: '400px', // Altura deseada para el contenedor del enlace.
          }}
        >
          <Animal
            style={{
              width: '250px', // Define el ancho del componente Animal para mantener una proporción adecuada.
              height: '250px', // Define la altura del componente Animal.
              display: 'block', // Asegura que el componente Animal no se comporte como inline.
              margin: '0 auto', // Centra el componente Animal dentro del contenedor.
            }}
          />
        </a>
      </motion.div>
    )}

    {/* Card y Checkbox con animación, solo en la primera sección */}
    <AnimatePresence> 
      {/* Comprueba si es la primera sección antes de renderizar Card y Checkbox */}
      {sectionIndex === 0 && ( 
        <motion.div
          key="card-checkbox" // Clave única para identificar este elemento durante el ciclo de vida de React.
          initial={{ opacity: 0 }} // Inicia la animación con opacidad 0 (invisible).
          animate={{ opacity: 1 }} // Finaliza la animación con opacidad 1 (visible).
          exit={{ opacity: 0 }} // Desaparece con opacidad 0 al salir.
          transition={{ duration: 0.5 }} // Suaviza la transición con una duración de 0.5 segundos.
          style={{
            width: '80%', // Define el ancho del contenedor.
            display: 'flex', // Aplica un diseño flexible al contenedor.
            flexDirection: 'column', // Coloca los elementos (Card y Checkbox) en una columna.
            alignItems: 'center', // Centra los elementos horizontalmente.
            gap: '20px', // Espaciado entre los elementos.
            marginBottom: '20px', // Margen inferior para separar del siguiente contenido.
          }}
        >
          {/* Renderiza el componente Card para mostrar los términos y condiciones */}
          <Card /> 
          {/* Renderiza el componente Checkbox para permitir la aceptación de los términos */}
          <Checkbox /> 
        </motion.div>
      )}
    </AnimatePresence>


    {/* Botones redes sociales */}
    <div
      style={{
        position: 'absolute', // Posiciona el contenedor de manera absoluta dentro del contenedor principal.
        bottom: '2%', // Coloca el contenedor al 2% desde la parte inferior del viewport.
        display: 'flex', // Utiliza diseño flexible para alinear los elementos internos.
        justifyContent: 'center', // Centra el componente `Social` horizontalmente.
        width: '100%', // Asegura que el contenedor abarque el ancho completo de la pantalla.
        zIndex: 2, // Coloca este contenedor por encima de elementos con un z-index menor.
      }}
    >
      {/* Renderiza el componente Social, que incluye los botones de redes sociales */}
      <Social /> 
    </div>


    {/* Contenedor principal de botones de navegación */}
    <div
      style={{
        position: 'absolute', // Posiciona el contenedor en relación al contenedor principal.
        bottom: '2%', // Coloca el contenedor ligeramente por encima del borde inferior del viewport.
        width: '100%', // Asegura que el contenedor abarque todo el ancho de la pantalla.
        display: 'flex', // Habilita un diseño flexible para manejar el alineamiento de los botones.
        justifyContent: 'space-between', // Distribuye los botones "Siguiente" y "Anterior" en los extremos.
        padding: '0 5%', // Añade espacio desde los bordes laterales para mejorar la estética.
        zIndex: 2, // Coloca este contenedor por encima de elementos con un índice de apilamiento menor.
      }}
    >
      {/* Contenedor del botón "Siguiente", aparece solo si no es la última sección */}
      <div
        style={{
          visibility: sectionIndex < totalSections - 1 ? 'visible' : 'hidden', // Muestra el botón solo si hay una sección siguiente.
        }}
      >
        <Button
          onClick={onNext} // Controla la acción para avanzar a la siguiente sección.
          style={{ fontSize: '1.5rem' }} // Ajusta el tamaño del texto dentro del botón.
          aria-label="Ir a la siguiente sección" // Mejora la accesibilidad para lectores de pantalla.
        >
          Siguiente
        </Button>
      </div>

      {/* Contenedor del botón "Anterior", aparece solo si no es la primera sección */}
      <div
        style={{
          visibility: sectionIndex > 0 ? 'visible' : 'hidden', // Muestra el botón solo si hay una sección anterior.
        }}
      >
        <Button
          onClick={onPrev} // Controla la acción para regresar a la sección anterior.
          style={{ fontSize: '1.5rem' }} // Ajusta el tamaño del texto dentro del botón.
          aria-label="Ir a la sección anterior" // Mejora la accesibilidad para lectores de pantalla.
        >
          Anterior
        </Button>
      </div>
    </div>


      
    {/* Footer */}
    <AnimatePresence mode="wait">
      {/* 
        Componente de animación de entrada y salida para el pie de página. 
        "mode=wait" garantiza que las animaciones de salida se completen 
        antes de que se inicien las de entrada.
      */}
      <Footer 
        key={footerImage} 
        images={footerImage} 
        /* 
          El componente Footer recibe dos props importantes:
          - key: Garantiza la re-montura del componente cuando cambia la imagen.
          - images: Pasa la URL de la imagen de fondo dinámica del footer.
        */
      />
    </AnimatePresence>

  </div>
  );
}

// Define la validación de props con PropTypes
Section.propTypes = {
  title: PropTypes.string.isRequired, 
  /* 
    Propiedad requerida que define el título de la sección. 
    Es un string que se muestra en la cabecera de cada sección.
  */
  
  content: PropTypes.string.isRequired, 
  /* 
    Propiedad requerida que contiene el contenido principal de la sección. 
    Este texto aparece como descripción en cada sección.
  */
  
  onNext: PropTypes.func.isRequired, 
  /* 
    Propiedad requerida que define la función a ejecutar al hacer clic en el botón "Siguiente". 
    Permite navegar a la siguiente sección.
  */
  
  onPrev: PropTypes.func.isRequired, 
  /* 
    Propiedad requerida que define la función a ejecutar al hacer clic en el botón "Anterior". 
    Permite volver a la sección anterior.
  */
  
  footerImage: PropTypes.string.isRequired, 
  /* 
    Propiedad requerida que contiene la URL o el nombre de la imagen del footer.
    Se pasa dinámicamente según la sección actual.
  */
  
  sectionIndex: PropTypes.number.isRequired,    
  /* 
    Propiedad requerida que representa el índice numérico de la sección actual. 
    Ayuda a condicionar qué componentes o elementos deben mostrarse.
  */
  
  totalSections: PropTypes.number.isRequired,   
  /* 
    Propiedad requerida que especifica el número total de secciones disponibles.
    Permite calcular la lógica de navegación y personalización por sección.
  */
};


export default Section;

