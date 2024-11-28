// Importa styled-components para definir estilos personalizados reutilizables para el componente.
import styled from 'styled-components';

// Definición del componente funcional Card.
const Card = () => {
  return (
    <StyledWrapper>
      {/* 
        Contenedor principal de la tarjeta. 
        - role="region": Define que esta tarjeta es una región significativa para usuarios de lectores de pantalla.
        - aria-labelledby: Relaciona el ID "title" como el título de esta región.
        - aria-describedby: Relaciona el ID "card__tags" para proporcionar una descripción adicional de esta región.
      */}
      <div
        className="card"
        role="region"
        aria-labelledby="title"
        aria-describedby="card__tags"
      >
        {/* Título de la tarjeta, etiquetado con el ID "title" para asociarlo semánticamente con la región. */}
        <span id="title" className="title">
          Términos y condiciones
        </span>
        {/* Contenedor del contenido principal de la tarjeta. Asociado con el ID "card__tags". */}
        <div id="card__tags" className="card__tags">
          <p>
            {/* Texto extenso de los términos y condiciones, cuidadosamente estructurado para ser legible por lectores de pantalla. */}
            PORTAL CAUTIVO CIBERPAZ, persona natural de derecho privado describe, a través de este 
            documento, las normas de uso del sitio https://github.com/Csp1112/Portal_cautivo_CiberPaz y de 
            cualquier otro sitio web, tienda o aplicación operada por el titular. <br />
            Al navegar por este sitio web, consideramos que está de acuerdo con las condiciones de uso que 
            figuran a continuación:<br />
            - Si no está de acuerdo con los términos de este acuerdo, le pedimos que no haga ningún otro uso de 
            este sitio web, mucho menos que se registre o envíe sus datos personales.<br />
            - Si cambiamos nuestras condiciones de uso, publicaremos el nuevo texto en este sitio web, con una 
            fecha de revisión actualizada. Podemos modificar este documento en cualquier momento. Si hay un 
            cambio significativo en los términos de este acuerdo, podemos informarle utilizando la información 
            de contacto que tenemos en nuestra base de datos o mediante una notificación.<br />
            - El uso de este sitio web después de los cambios significa que usted acepta las condiciones de uso 
            revisadas. Si, después de leer la versión revisada, no está de acuerdo con sus términos, por favor, 
            termine su acceso.<br />
            - El uso de este sitio web le otorga automáticamente la condición de Usuario e implica su plena 
            aceptación de todas las directrices y condiciones incluidas en estas Condiciones. <br />
            {/* Resto del texto omitido por brevedad, pero estructurado de manera similar. */}
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};

// Estilos personalizados utilizando styled-components.
const StyledWrapper = styled.div`
  .card {
    width: 100%; /* La tarjeta ocupa el ancho completo del contenedor. */
    height: 300px; /* Altura fija para mantener consistencia visual. */
    margin: 30px; /* Espaciado externo alrededor de la tarjeta. */
    background: #7EE081; /* Color de fondo con un tono verde claro. */
    padding: 30px; /* Espaciado interno para separar el contenido de los bordes. */
    display: flex; /* Configura la disposición del contenido interno como un contenedor flex. */
    font-family: "Titillium Web", sans-serif; /* Familia de fuente utilizada. */
    font-weight: 400; /* Grosor del texto principal. */
    font-style: normal; /* Define el estilo del texto como normal. */
    flex-wrap: wrap; /* Permite que el contenido se ajuste si es necesario. */
    font-size: 1.3vw; /* Tamaño relativo del texto. */
    color: #313B72; /* Color del texto principal. */
    border-radius: 15px; /* Bordes redondeados para un diseño más amigable. */
    box-shadow: -20px 20px 0px -5px #62A87C; /* Sombra para un efecto de elevación. */
    z-index: 1; /* Controla la superposición del elemento. */
    opacity: 0.93; /* Transparencia para un efecto visual más suave. */
  }
  .card__tags {
    overflow: auto; /* Permite el desplazamiento si el contenido excede el contenedor. */
    height: 80%; /* Altura del área de contenido desplazable. */
  }
  .title {
    font-family: "Titillium Web", sans-serif; /* Estilo consistente con el resto de la tarjeta. */
    font-weight: 700; /* Grosor más pronunciado para resaltar el título. */
    font-size: 1.6vw; /* Tamaño relativo para destacar el título. */
  }
`;

// Exporta el componente Card como el valor predeterminado del módulo,
// para que pueda ser utilizado en otras partes de la aplicación.
export default Card;
