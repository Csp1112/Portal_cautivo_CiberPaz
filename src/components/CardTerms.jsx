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
          Al acceder y utilizar nuestro sitio web, aceptas los siguientes Términos y Condiciones de 
          Uso. Estos términos regulan tu acceso y uso de los servicios que ofrecemos a través de nuestra 
          plataforma, incluyendo la recopilación, almacenamiento y tratamiento de tus datos 
          personales. Es importante que leas atentamente esta sección antes de interactuar con nuestro 
          sitio. La privacidad y seguridad de tu información son fundamentales para nosotros. A través 
          de estos términos, te explicamos cómo recopilamos y utilizamos tus datos, así como tus 
          derechos respecto a los mismos.
        </p>
        <p>
          Al continuar navegando en nuestro portal cautivo, confirmas tu aceptación de estos términos. 
          Si no estás de acuerdo con alguna de las condiciones descritas, te invitamos a no utilizar 
          nuestros servicios.
        </p>
        <p>
          Si cambiamos nuestras condiciones de uso, publicaremos el nuevo texto en este sitio web, 
          con una fecha de revisión actualizada. Podemos modificar este documento en cualquier 
          momento. Si hay un cambio significativo en los términos de este acuerdo, podemos 
          informarle utilizando la información de contacto que tenemos en nuestra base de datos o 
          mediante una notificación.
        </p>
        <p>
          El uso de este sitio web después de los cambios significa que usted acepta las condiciones de 
          uso revisadas. Si, después de leer la versión revisada, no está de acuerdo con sus términos, 
          por favor, termine su acceso.
        </p>
        <p>
          El uso de este sitio web le otorga automáticamente la condición de Usuario e implica su 
          plena aceptación de todas las directrices y condiciones incluidas en estas Condiciones.
        </p>
        <p>
          El uso de este sitio web implica la adhesión a estas Condiciones de Uso y a la versión más 
          actualizada de la Política de Privacidad de portal.
        </p>
        <p>
          En general, el acceso al sitio web de portal es gratuito y no requiere registro previo. Sin 
          embargo, para hacer uso de algunas funcionalidades, el usuario puede necesitar registrarse, 
          creando una cuenta de usuario con un nombre de usuario y una contraseña de acceso.
        </p>
        <p>
          Es responsabilidad del usuario proporcionar únicamente información correcta, auténtica, 
          válida, completa y actualizada, así como no revelar su nombre de usuario y contraseña a 
          terceros.
        </p>
        <p>
          Algunas partes de este sitio web ofrecen al usuario la opción de publicar comentarios en 
          determinadas áreas. Portal no consiente la publicación de contenidos de carácter 
          discriminatorio, ofensivo o ilícito, o que infrinjan los derechos de autor o cualquier otro 
          derecho de terceros.
        </p>
        <p>
          La publicación de cualquier contenido por parte del usuario de este sitio web, incluidos los 
          mensajes y comentarios, implica una licencia no exclusiva, irrevocable e irreversible para su 
          uso, reproducción y publicación por parte de portal en su sitio web, plataformas de internet 
          y aplicaciones, o incluso en otras plataformas, sin ninguna restricción o limitación.
        </p>
        <p>
          La información sobre el uso que usted hace de este sitio web puede recogerse a través de las 
          cookies. Las cookies son piezas de información que se almacenan directamente en el equipo 
          que está utilizando. Las cookies permiten recoger información como el tipo de navegador, el 
          tiempo de permanencia en el sitio web, las páginas visitadas, las preferencias de idioma y 
          otros datos de tráfico anónimos. Nosotros y nuestros proveedores de servicios utilizamos la 
          información para la protección de la seguridad, para facilitar la navegación, mostrar la 
          información de manera más eficiente y personalizar su experiencia al utilizar este sitio web, 
          así como para el seguimiento en línea. También recopilamos información estadística sobre 
          el uso del sitio web para mejorar continuamente nuestro diseño y funcionalidad, para 
          entender cómo se utiliza el sitio web y para ayudarle a resolver problemas relevantes.
        </p>
        <p>
          Si no desea que se recoja su información a través de las cookies, existe un procedimiento 
          sencillo en la mayoría de los navegadores que permite rechazar automáticamente las cookies, 
          o le da la opción de aceptar o rechazar la transferencia de una cookie específica (o varias) de 
          un sitio web concreto a su ordenador. Sin embargo, esto puede crear inconvenientes en su 
          uso del sitio web.
        </p>
        <p>
          La configuración que elija puede afectar a su experiencia de navegación y al funcionamiento 
          que requiere el uso de cookies. En este sentido, rechazamos cualquier responsabilidad por las 
          consecuencias derivadas del funcionamiento limitado de este sitio web causado por la 
          desactivación de las cookies en su dispositivo (incapacidad para establecer o leer una cookie).
        </p>
        <p>
          Todos los elementos de portal son propiedad intelectual de la misma o de sus licenciantes. 
          Estos términos o el uso del sitio web no le otorgan ninguna licencia o derecho de uso de los 
          derechos de propiedad intelectual de portal o de cualquier tercero.
        </p>
        <p>
          Este sitio web puede contener, de vez en cuando, enlaces de hipertexto que le redirigirán a 
          sitios web de nuestros socios, anunciantes, proveedores, etc. Si hace clic en uno de estos 
          enlaces a cualquiera de estos sitios, recuerde que cada sitio tiene sus propias prácticas de 
          privacidad y que nosotros no somos responsables de estas políticas. Por favor, consulte esas 
          políticas antes de enviar cualquier dato personal a esos sitios.
        </p>
        <p>
          No somos responsables de las políticas y prácticas de recopilación, uso y divulgación 
          (incluidas las prácticas de protección de datos) de otras organizaciones, como Facebook, 
          Apple, Google, Microsoft, o cualquier otro desarrollador de software o proveedor de 
          aplicaciones, tienda de medios sociales, sistema operativo, proveedor de servicios de internet 
          o fabricante de dispositivos, incluidos los Datos Personales que usted divulgue a otras 
          organizaciones a través de las aplicaciones, en relación con dichas aplicaciones, o publicados 
          en nuestras redes sociales. Le recomendamos que se informe sobre la política de privacidad 
          y las condiciones de uso de cada sitio web visitado o proveedor de servicios utilizado.
        </p>
        <p>
          El funcionamiento de este sitio web es por tiempo indefinido. La totalidad del sitio web o 
          cada una de sus secciones podrá ser cerrada, suspendida o interrumpida unilateralmente por 
          portal, en cualquier momento y sin previo aviso.
        </p>
        <p>
          Durante el uso de este sitio web, ciertos datos personales serán recogidos y procesados por 
          portal y/o los Socios. Las normas relativas al tratamiento de los datos personales según la 
          Ley 1581 de 2012 de portal están estipuladas en la Política de Protección de datos.
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
