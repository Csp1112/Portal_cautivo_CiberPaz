// Importa styled-components para definir estilos personalizados y reutilizables para el componente.
import styled from 'styled-components';

// Importa PropTypes para realizar validaciones de los props recibidos por el componente.
import PropTypes from 'prop-types';

// Definición del componente funcional Button.
const Button = ({ onClick, children }) => {
  return (
    <StyledWrapper>
      {/* 
        Botón interactivo.
        - onClick: Función que se ejecuta cuando el botón es clicado.
        - aria-label: Proporciona una descripción accesible para usuarios con lectores de pantalla.
        - children: Contenido dinámico dentro del botón, como texto o elementos anidados.
      */}
      <button 
        className="button" 
        onClick={onClick}
        aria-label={'Botón interactivo para avanzar y retroceder en el portal'}
      >
        {children}
      </button>
    </StyledWrapper>
  );
};

// Validación de los props recibidos por el componente con PropTypes.
Button.propTypes = {
  onClick: PropTypes.func, // Valida que onClick sea una función.
  children: PropTypes.node, // Valida que children sea un nodo React (texto, elementos, etc.).
};

// Estilos personalizados para el botón utilizando styled-components.
const StyledWrapper = styled.div`
  .button {
    cursor: pointer; /* Cambia el puntero al pasar sobre el botón. */
    position: relative; /* Permite posicionar elementos secundarios dentro del botón. */
    padding: 10px 24px; /* Espaciado interno del botón. */
    font-size: 120%; /* Tamaño del texto relativo al tamaño base. */
    color: #7EE081; /* Color principal del texto. */
    border: 2px solid #7EE081; /* Borde sólido con el mismo color del texto. */
    border-radius: 34px; /* Bordes redondeados para un diseño amigable. */
    background-color: transparent; /* Fondo transparente para resaltar el borde. */
    font-weight: 600; /* Grosor del texto. */
    transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1); /* Transición suave para interacciones. */
    overflow: hidden; /* Oculta elementos secundarios que se desborden del botón. */
  }

  .button::before {
    content: ''; /* Elemento decorativo sin contenido. */
    position: absolute; /* Posiciona el decorativo relativo al botón. */
    inset: 0; /* Alinea al centro del botón. */
    margin: auto; /* Centra horizontal y verticalmente. */
    width: 60px; /* Ancho inicial del decorativo. */
    height: 60px; /* Altura inicial del decorativo. */
    border-radius: inherit; /* Hereda el radio de borde del botón. */
    scale: 0; /* Escala inicial (invisible). */
    z-index: -1; /* Envía el decorativo detrás del contenido del botón. */
    background-color: #7EE081; /* Color de fondo del decorativo. */
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1); /* Transición suave del decorativo. */
  }

  .button:hover::before {
    scale: 5; /* Aumenta el tamaño del decorativo al pasar el cursor. */
  }

  .button:hover {
    color: #462255; /* Cambia el color del texto al pasar el cursor. */
    scale: 1.1; /* Incrementa el tamaño del botón ligeramente. */
    box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4); /* Agrega un efecto de sombra. */
  }

  .button:active {
    scale: 1; /* Restaura el tamaño del botón al hacer clic. */
  }
  
  /* Estilos responsivos para adaptar el botón a diferentes tamaños de pantalla. */
  @media (max-width: 1024px) { /* Tablet */
    .button {
      font-size: 22px; /* Reduce el tamaño del texto. */
      padding: 8px 20px; /* Ajusta el espaciado interno. */
    }
  }

  @media (max-width: 768px) { /* Pantallas pequeñas */
    .button {
      font-size: 20px;
      padding: 6px 16px;
    }
  }

  @media (max-width: 480px) { /* Móviles */
    .button {
      font-size: 18px;
      padding: 4px 12px;
    }
  }
`;

export default Button;
