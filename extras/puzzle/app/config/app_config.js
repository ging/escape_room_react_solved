let GLOBAL_CONFIG_DEVELOPMENT = {

  // Nombre de la prueba
  title:"Redux lifecycle",
  // Imagen de fondo
  opacityBackground:0.1, // opacidad de la imagen (por defecto sin opacidad)

  // Sonidos (por defecto, no hay música)
  // backgroundMusic:"./assets/sounds/backgroundMusic.mp3", // https://www.fesliyanstudios.com/royalty-free-music/downloads-c/mysterious-music/7
  // successMusic:"./assets/sounds/successMusic.mp3", // http://soundbible.com/1003-Ta-Da.html
  // failureMusic:"./assets/sounds/failureMusic.mp3", // http://soundbible.com/1830-Sad-Trombone.html
  // volume:1, // Volumen de 0 a 1 (defecto 1)

  // Dimensiones del puzzle
  M:1, // numero de columnas del puzzle (requerido)
  N:5, // numero de filas del puzzle (requerido)
  fake_pieces:4,

  // Reverse mode (defecto -> false)
  reverseMode:false,

  // Timer
  // time:"210", // tiempo en segundos para resolver el puzzle

  // Zoom
  // zoomMode:true, // activar modo zoom
  // zoomFactor:5, // factor de ampliación

  // Tiempo mínimo exigido para leer instrucciones (en segundos)
  timeToReadInstructions:0,

  // Mensaje inicial
  initialMessage:"__", // "¿Serás capaz de resolver los misterios de la anatomía ocular?", // mensaje inicial de bienvenida
  initialMessagePrint:false, // "(mensaje configurable por el autor del recurso)", // mensaje inicial de bienvenida para impresión
  // initialImage:"./assets/images/egipto_inicial.svg", // foto inicial de bienvenida
  endImageSuccess:"./assets/images/redux_height.png",
  endImageSuccessReverse:"./assets/images/cell_2.png",
  // Mensaje final
  endMessageSuccess:"¡Has dado con la solución!", // mensaje de exito
  endMessageFail:"Parece que el ciclo de vida de Redux que propones no es correcto.", // mensaje de fallo
  // endImageSuccess:"./assets/images/egipto_inicial.svg", // imagen de exito
  // endImageFail:"./assets/images/egipto_fallo.png", // imagen de fallo

  // Escapp configuraciones
  escapp:{
    endpoint:"https://escape.dit.upm.es/api/escapeRooms/353",
    localStorageKey:"ESCAPP_Puzzle",
    imagesPath:"assets/images/",
    I18n:{
      availableLocales:["es", "en"],
      locale:"es",
      defaultLocale:"es",
    },
    appPuzzleIds:[4],
    forceValidation:false,
  },
  solution:135476865719313303978963,

  // No tocar
  debug:true,
  debug_scorm_api:false,
  debug_scorm_api_window:false,
  available_locales:["es", "en"],
  // locale: "es",
  adaptive:true,
  finish_screen:true,
  scorm:{
    completion_threshold:0.5,
    score_threshold:0.6,
  },
};

module.exports = GLOBAL_CONFIG_DEVELOPMENT;