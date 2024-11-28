// Importa el componente motion de Framer Motion para animaciones fluidas.
import { motion } from 'framer-motion';
// Importa PropTypes para validar los props del componente.
import PropTypes from 'prop-types';

// Definición del componente funcional Footer.
function Footer({ images }) {
  // Estilos personalizados para el contenedor del footer.
  const styles = {
    width: '100vw', // El footer ocupa todo el ancho de la pantalla.
    height: '60vh', // Usa un 60% de la altura de la pantalla para adaptarse a diferentes tamaños.
    backgroundImage: `url(/${images})`, // Define la imagen de fondo dinámica recibida como prop.
    backgroundPosition: 'center bottom', // Alinea la imagen al centro y parte inferior del contenedor.
    backgroundRepeat: 'no-repeat', // Evita que la imagen se repita.
    backgroundSize: 'cover', // Escala la imagen para que ocupe todo el espacio disponible sin distorsión.
  };

  return (
    // 
    // Contenedor del footer animado:
    // - style: Aplica los estilos definidos anteriormente para el diseño visual.
    // - initial, animate, exit: Define los estados inicial, animado y de salida del componente para crear una transición suave.
    // - transition: Controla la duración de la animación.
    // - aria-hidden: Indica que este elemento es decorativo y no debe ser leído por los lectores de pantalla.
    //
    <motion.div
      style={styles}
      initial={{ opacity: 0, y: 50 }} // Comienza invisible y desplazado hacia abajo.
      animate={{ opacity: 1, y: 0 }} // Aparece completamente visible en su posición original.
      exit={{ opacity: 0, y: 50 }} // Se desvanece y se desplaza hacia abajo al salir.
      transition={{ duration: 0.5 }} // Define una transición de medio segundo.
      aria-hidden="true" // Excluye este elemento de los lectores de pantalla ya que es decorativo.
    />
  );
}

// Validación de los props con PropTypes.
// - images: Se asegura de que se pase un string válido y que sea obligatorio.
Footer.propTypes = {
  images: PropTypes.string.isRequired, // Propiedad requerida para la URL de la imagen de fondo.
};

// Exporta el componente Footer como el valor predeterminado.
export default Footer;
