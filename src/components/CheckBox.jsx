// Importa styled-components para manejar estilos personalizados.
import styled from 'styled-components';

// Importa PropTypes para validar los props del componente.
import PropTypes from 'prop-types';

// Definición del componente funcional Checkbox.
const Checkbox = ({ onChange }) => {
  return (
    <StyledWrapper>
      {/* Contenedor principal del checkbox */}
      <div className="uv-checkbox-wrapper">
        {/* 
          Input tipo checkbox:
          - id: Identifica el checkbox para relacionarlo con su etiqueta asociada.
          - className: Aplica estilos personalizados.
          - onChange: Maneja el evento de cambio (check/uncheck) mediante una función pasada como prop.
          - aria-labelledby: Relaciona el texto accesible con el checkbox.
        */}
        <input
          type="checkbox"
          id="uv-checkbox"
          className="uv-checkbox"
          onChange={onChange}
          aria-labelledby="uv-checkbox-text"
        />

        {/* 
          Etiqueta asociada al checkbox:
          - htmlFor: Relaciona esta etiqueta con el checkbox mediante su ID.
          - className: Aplica estilos personalizados.
        */}
        <label htmlFor="uv-checkbox" className="uv-checkbox-label">
          {/* 
            Icono decorativo del checkbox:
            - SVG: Gráfico vectorial para representar un checkmark animado.
            - aria-hidden: Indica que este elemento es decorativo y no debe ser leído por los lectores de pantalla.
          */}
          <div className="uv-checkbox-icon">
            <svg viewBox="0 0 24 24" className="uv-checkmark" aria-hidden="true">
              <path d="M4.1,12.7 9,17.6 20.3,6.3" fill="none" />
            </svg>
          </div>

          {/* 
            Texto accesible relacionado con el checkbox:
            - className: Aplica estilos al texto.
            - Este texto explica el propósito del checkbox, como aceptar términos y condiciones.
          */}
          <span id="uv-checkbox-text" className="uv-checkbox-text">
            Acepto los términos y condiciones
          </span>
        </label>
      </div>
    </StyledWrapper>
  );
};

// PropTypes para validar que la función onChange es obligatoria.
Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired, // Propiedad requerida para manejar cambios en el estado del checkbox.
};

// Estilos personalizados utilizando styled-components.
const StyledWrapper = styled.div`
  /* Contenedor principal del checkbox */
  .uv-checkbox-wrapper {
    display: flex; /* Configura el contenedor como un elemento flexible. */
    align-items: center; /* Alinea los elementos verticalmente al centro. */
  }

  /* Oculta el checkbox original para personalizar su diseño. */
  .uv-checkbox {
    display: none;
  }

  /* Estilos para la etiqueta que actúa como diseño del checkbox. */
  .uv-checkbox-label {
    display: flex;
    align-items: center; /* Centra el contenido verticalmente. */
    cursor: pointer; /* Cambia el cursor a un puntero al pasar sobre el checkbox. */
    background-color: #7EE081; /* Color de fondo del checkbox no seleccionado. */
    border-radius: 30px; /* Bordes redondeados para un diseño amigable. */
    padding: 0.5em 1em; /* Espaciado interno para mayor interacción. */
    opacity: 0.86; /* Añade un efecto de transparencia. */
  }

  /* Estilos para el icono decorativo del checkbox. */
  .uv-checkbox-icon {
    position: relative;
    width: 2em; /* Ancho del icono. */
    height: 2em; /* Altura del icono. */
    border: 2px solid #462255; /* Borde inicial del icono. */
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; /* Forma personalizada del borde. */
    transition: border-color 0.3s ease, border-radius 0.3s ease; /* Transiciones suaves en cambios. */
  }

  /* Estilos para el checkmark SVG dentro del icono. */
  .uv-checkmark {
    position: absolute;
    top: 0.1em;
    left: 0.1em;
    width: 1.6em;
    height: 1.6em;
    fill: none; /* Sin relleno interno. */
    stroke: #7EE081; /* Color de la línea del checkmark. */
    stroke-width: 3; /* Grosor de la línea. */
    stroke-linecap: round; /* Extremos redondeados. */
    stroke-linejoin: round; /* Unión redondeada entre líneas. */
    stroke-dasharray: 24; /* Define el trazo para animación. */
    stroke-dashoffset: 24; /* Oculta el trazo inicialmente. */
    transition: stroke-dashoffset 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95); /* Animación suave. */
  }

  /* Estilos para el texto accesible del checkbox. */
  .uv-checkbox-text {
    margin-left: 0.5em; /* Espaciado entre el texto y el icono. */
    transition: color 0.3s ease; /* Transición de color suave. */
    font-family: "Titillium Web", sans-serif; /* Fuente personalizada. */
    font-weight: 700; /* Grosor del texto. */
    font-size: 1.4vw; /* Tamaño relativo para adaptarse a la pantalla. */
  }

  /* Estilos aplicados al checkbox cuando está seleccionado. */
  .uv-checkbox:checked + .uv-checkbox-label .uv-checkbox-icon {
    border-color: #462255; /* Cambia el color del borde. */
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; /* Cambia la forma del icono. */
    background-color: #462255; /* Añade color de fondo al icono. */
  }

  .uv-checkbox:checked + .uv-checkbox-label .uv-checkmark {
    stroke-dashoffset: 0; /* Hace visible el checkmark animado. */
  }

  .uv-checkbox:checked + .uv-checkbox-label .uv-checkbox-text {
    color: #62A87C; /* Cambia el color del texto al seleccionarse. */
  }
`;

// Exporta el componente Checkbox como el valor predeterminado.
export default Checkbox;
