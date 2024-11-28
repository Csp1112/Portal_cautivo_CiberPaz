// Importa el componente DotLottieReact desde la biblioteca @lottiefiles/dotlottie-react.
// Este componente se usa para reproducir animaciones Lottie, que son ligeras y basadas en vectores.
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// Definición del componente funcional Animal.
const Animal = () => {
  // Estilos CSS definidos como un objeto para aplicar directamente al componente DotLottieReact.
  const styles = {
    backgroundColor: 'rgba(169, 202, 181, 0.8)', // Fondo semitransparente con un tono verde claro.
    border: '1px', // Borde base para definir el contorno del elemento.
    borderRadius: '40px', // Bordes redondeados para un diseño más amigable.
  };

  return (
    // Contenedor principal del componente, que agrupa los elementos relacionados con la animación.
    <div>
      {/* 
        Div adicional con el rol "application" para indicar a los lectores de pantalla
        que este elemento tiene contenido interactivo o funcional.
      */}
      <div
        role="application" // Define el propósito del elemento como interactivo.
        aria-label="Video de una nutria conectada al internet. Dale click para acceder a la red wifi gratuita" 
        // Proporciona una descripción accesible para tecnologías de asistencia, explicando el propósito del contenido.
      ></div>

      {/* 
        Componente DotLottieReact para cargar y reproducir una animación Lottie.
        - src: URL de la animación Lottie.
        - loop: La animación se repite de forma indefinida.
        - autoplay: La animación comienza automáticamente al cargarse.
        - style: Aplica los estilos definidos al componente.
      */}
      <DotLottieReact
        style={styles}
        src="https://lottie.host/29625557-67a2-44f9-8b56-7d4563161488/C8v7UMzyAv.lottie"
        loop
        autoplay
      />
    </div>
  );
};

// Exporta el componente Animal como el valor predeterminado del módulo,
// para que pueda ser utilizado en otras partes de la aplicación.
export default Animal;
