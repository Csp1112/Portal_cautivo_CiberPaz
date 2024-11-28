// Importa styled-components para crear un contenedor estilizado y encapsular los estilos CSS
import styled from 'styled-components';

// Define el componente Social que renderiza un conjunto de iconos de redes sociales
const Social = () => {
  return (
    // Usa un contenedor estilizado para aplicar estilos específicos a los elementos dentro del componente
    <StyledWrapper>
      {/* Contenedor principal para los enlaces de redes sociales */}
      <div className="card">

        {/* Enlace a Instagram */}
        <a 
          href="https://www.instagram.com/ministerio_tic" // URL al perfil de Instagram
          target="_blank" // Abre el enlace en una nueva pestaña
          rel="noopener noreferrer" // Evita que la nueva pestaña tenga acceso a la página original por seguridad
          className="socialContainer containerOne" // Clase CSS para aplicar estilos específicos al contenedor
          aria-label="Enlace a Instagram del Ministerio TIC" // Proporciona un texto accesible para lectores de pantalla
        >
          {/* Icono SVG de Instagram */}
          <svg 
            className="socialSvg instagramSvg" // Clase CSS para estilizar el SVG
            viewBox="0 0 16 16" // Define las coordenadas y dimensiones del espacio de diseño del SVG
            aria-hidden="true" // Indica que el icono es decorativo y no necesita ser leído por lectores de pantalla
          >
            {/* Define la forma del icono de Instagram usando un elemento <path> */}
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
        </a>


      {/* TikTok */}
        <a 
          href="https://www.tiktok.com/@ministerio_tic" // Enlace al perfil oficial de TikTok del Ministerio TIC.
          target='_blank' // Configura el enlace para abrirse en una nueva pestaña del navegador.
          rel="noopener noreferrer" // Aumenta la seguridad evitando que la nueva pestaña acceda al origen.
          className="socialContainer containerTwo" // Clases CSS para estilizar el contenedor de TikTok.
          aria-label="Enlace a TikTok del Ministerio TIC" // Descripción accesible para lectores de pantalla.
        >
        <svg 
          className="socialSvg tiktokSvg largeIcon" // Clases CSS para estilizar el SVG y diferenciarlo como icono grande.
          viewBox="0 0 48 48" // Define un espacio de diseño de 48x48 unidades para el SVG.
          version="1.1" // Especifica la versión de SVG utilizada.
          xmlns="http://www.w3.org/2000/svg" // Espacio de nombres estándar para SVG.
          xmlnsXlink="http://www.w3.org/1999/xlink" // Espacio de nombres para habilitar referencias dentro del SVG.
          aria-hidden="true" // Indica que este SVG es decorativo y no será leído por lectores de pantalla.
        >
          <g 
            id="Icon/Social/tiktok-white" // Identificador único para el grupo de elementos dentro del SVG.
            stroke="none" // Desactiva cualquier borde en los elementos dentro del grupo.
            strokeWidth={1} // Define un ancho de trazo (aunque no se utiliza aquí porque stroke es "none").
            fill="none" // Desactiva el relleno predeterminado de los elementos.
            fillRule="evenodd" // Especifica cómo las áreas superpuestas se rellenan.
          >
              <path d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z" id="Fill-1" fill="#FFFFFF" />
            </g>
          </svg>
        </a>

      {/* Facebook */}
        <a 
          href="https://www.facebook.com/MinisterioTIC.Colombia/" // Enlace al perfil oficial de Facebook del Ministerio TIC.
          target='_blank' // Configura el enlace para abrirse en una nueva pestaña del navegador.
          rel="noopener noreferrer" // Mejora la seguridad, evita que la página de destino tenga acceso al origen.
          className="socialContainer containerThree" // Clases CSS que estilizan el contenedor del enlace de Facebook.
          aria-label="Enlace a Facebook del Ministerio TIC" // Descripción accesible para usuarios con lectores de pantalla.
        >
          <div>
            <svg 
              className="socialSvg tiktokSvg largeIcon" // Clases CSS que estilizan el icono SVG como parte del enlace.
              width="44px" // Define el ancho del SVG en 44 píxeles.
              height="44px" // Define la altura del SVG en 44 píxeles.
              viewBox="0 0 45 35" // Espacio de diseño del SVG, 45 de ancho y 35 de alto.
              version="1.1" // Especifica la versión de SVG utilizada.
              xmlns="http://www.w3.org/2000/svg" // Espacio de nombres estándar requerido para el SVG.
              xmlnsXlink="http://www.w3.org/1999/xlink" // Espacio de nombres utilizado para referencias internas en SVG.
              aria-hidden="true" // Indica que este SVG es decorativo y no necesita ser leído por lectores de pantalla.
            >
              <g 
                id="Icon/Social/facebook-black" // Identificador del grupo para el icono de Facebook en color negro.
                stroke="none" // Desactiva el trazo en todos los elementos del grupo.
                strokeWidth={1} // Especifica el grosor del trazo (aunque no se utiliza ya que stroke es "none").
                fill="none" // Desactiva cualquier color de relleno predeterminado.
                fillRule="evenodd" // Determina cómo se rellenan las áreas superpuestas en el SVG.
              >                
              <path d="M30.0793333,40 L30.0793333,27.608 L34.239,27.608 L34.8616667,22.7783333 L30.0793333,22.7783333 L30.0793333,19.695 C30.0793333,18.2966667 30.4676667,17.344 32.4726667,17.344 L35.0303333,17.3426667 L35.0303333,13.0233333 C34.5876667,12.9646667 33.0696667,12.833 31.3036667,12.833 C27.6163333,12.833 25.0923333,15.0836667 25.0923333,19.2166667 L25.0923333,22.7783333 L20.922,22.7783333 L20.922,27.608 L25.0923333,27.608 L25.0923333,40 L30.0793333,40 Z M9.766,40 C8.79033333,40 8,39.209 8,38.234 L8,9.766 C8,8.79033333 8.79033333,8 9.766,8 L38.2336667,8 C39.209,8 40,8.79033333 40,9.766 L40,38.234 C40,39.209 39.209,40 38.2336667,40 L9.766,40 Z" id="Shape" fill="#FFFFFF" />
              </g>
            </svg>
          </div>
        </a>

      {/* WhatsApp */}
        <a 
           href="https://api.whatsapp.com/send/?phone=573227234164&text&type=phone_number&app_absent=0" 
           // Enlace para iniciar un chat de WhatsApp con el número del Ministerio TIC.
           target='_blank' 
           // Abre el enlace en una nueva pestaña o ventana del navegador.
           rel="noopener noreferrer"
           // Mejora la seguridad al evitar que la página de destino tenga acceso al origen del enlace.
           className="socialContainer containerFour"
           // Clases CSS que definen el estilo del contenedor del botón de WhatsApp.
           aria-label="Enviar mensaje de WhatsApp al Ministerio TIC"
           // Proporciona una descripción accesible para lectores de pantalla.
        >
          <svg 
            className="socialSvg whatsappSvg"  
            // Clases CSS para aplicar estilos específicos al ícono de WhatsApp.
            viewBox="0 0 16 16"
            // Define un área de visualización para escalar correctamente el ícono.
            aria-hidden="true" 
            // Indica que el SVG es decorativo y no debe ser leído por lectores de pantalla.
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </a>
      </div>

    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

  /* Estilo para el contenedor principal de la tarjeta */
  .card {
    width: fit-content; /* Se ajusta automáticamente al contenido */
    height: fit-content; /* Se ajusta automáticamente al contenido */
    background-color: #C3F3C0; /* Color de fondo para la tarjeta */
    display: flex; /* Utiliza flexbox para alinear elementos */
    flex-direction: row; /* Los elementos se alinean en fila horizontal */
    align-items: center; /* Alinea elementos verticalmente al centro */
    justify-content: center; /* Centra los elementos horizontalmente */
    padding: 15px 10px; /* Espaciado interno de la tarjeta */
    align-content: center; /* Centra el contenido en múltiples líneas si es necesario */
    border-radius: 15px; /* Bordes redondeados */
    gap: 10px; /* Espaciado entre los elementos internos */
    box-shadow: 0px 0px 20px #C3F3C0; /* Sombra difusa para dar profundidad */
    opacity: 0.9; /* Hace el fondo ligeramente transparente */
  }

  /* Estilo base para todos los contenedores sociales */
  .socialContainer {
    width: 7vh; /* Ancho basado en el alto de la ventana para mantener proporción */
    height: 7vh; /* Alto basado en el alto de la ventana para mantener proporción */
    border-radius: 10px; /* Bordes redondeados */
    background-color: #462255; /* Color de fondo predeterminado */
    display: inline-flex; /* Mantén los elementos en línea y centrados */
    align-items: center; /* Alinea los íconos verticalmente al centro */
    justify-content: center; /* Alinea los íconos horizontalmente al centro */
    overflow: hidden; /* Oculta contenido que desborde el área del contenedor */
    transition-duration: 0.3s; /* Animación suave al cambiar estados */
    cursor: pointer; /* Cambia el cursor al pasar sobre el elemento */
    position: relative; /* Permite posicionar elementos hijos relativamente al contenedor */
  }

  /* Estilo específico para contenedores sociales individuales al pasar el cursor */
  .containerOne:hover {
    background-color: #d62976; /* Cambia a color de Instagram */
    transition-duration: 0.3s; /* Duración de la transición */
  }
  .containerTwo:hover {
    background-color: #25f4ee; /* Cambia a color de TikTok */
    transition-duration: 0.3s; /* Duración de la transición */
  }
  .containerThree:hover {
    background-color: #1877f2; /* Cambia a color de Facebook */
    transition-duration: 0.3s; /* Duración de la transición */
  }
  .containerFour:hover {
    background-color: green; /* Cambia a color de WhatsApp */
    transition-duration: 0.3s; /* Duración de la transición */
  }

  /* Efecto al hacer clic en cualquier contenedor social */
  .socialContainer:active {
    transform: scale(0.9); /* Reduce el tamaño del elemento */
    transition-duration: 0.3s; /* Duración de la animación */
  }

  /* Estilo para los íconos SVG dentro de los contenedores sociales */
  .socialSvg {
    width: 25px; /* Ancho predeterminado para los íconos */
    height: auto; /* Altura proporcional al ancho */
    z-index: 1; /* Asegura que el SVG esté sobre otros elementos */
    pointer-events: none; /* Previene la interacción con el SVG */
  }

  /* Estilo para íconos más grandes (por ejemplo, TikTok) */
  .largeIcon {
    width: 32px; /* Tamaño mayor para algunos íconos */
  }

  /* Estilo para las rutas de los SVG */
  .socialSvg path {
    fill: white; /* Los íconos se rellenan de color blanco */
  }

  /* Animación al pasar el cursor sobre los íconos sociales */
  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both; /* Aplica la animación definida abajo */
  }

  /* Definición de la animación para los íconos sociales */
  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px); /* El ícono comienza desplazado hacia arriba */
      opacity: 0; /* El ícono es completamente transparente */
    }
    100% {
      transform: translateY(0); /* El ícono vuelve a su posición original */
      opacity: 1; /* El ícono se vuelve completamente visible */
    }
  }
`;

export default Social;
