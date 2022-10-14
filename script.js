//String
var nombre = "Franco";
//String
var apellido = "Guerra";
//Number
var edad = 28;
//String
const fechaDeNacimiento = "28/03/1994";
//String
var direccion = "Calle falsa 123";
//String
var colorFavorito = "Azul";
//String
var comidaFavorita = "Bife con papas fritas";
//Boolean
var soltero = false;
//String
var musicaFavorita = "Rock";
//String
var peliculaFavorito = "Toy Story 2";
//Objeto
var compañeros = { 
    nombre: "Claudio",
    apellido: "Gonzalez",
    edad: 28,
    fechaDeNacimiento: "28/03/1994",
    //Array
    mascotas:[{nombre:"Manchitas",tipo:"Perro"},{nombre:"Mish",tipo:"gato"}],
    direccion: "Calle falsa 456"
    };
    
console.log(`Mi nombre completo es es ${nombre} ${apellido}, tengo ${edad}. Nací un ${fechaDeNacimiento}, actualmente vivo en ${direccion}, mi color favorito es el ${colorFavorito}, mi comida favorita es ${comidaFavorita}, estoy soltero ${soltero}, mi musica favorita es ${musicaFavorita}, mi pelicula favorita es ${peliculaFavorito}, y mis compañeros son ${compañeros.nombre} ${compañeros.apellido}, tiene ${compañeros.edad} años, nació un ${compañeros.fechaDeNacimiento}, vive en ${compañeros.direccion}, y tiene ${compañeros.mascotas[0].nombre} y ${compañeros.mascotas[1].nombre} como mascotas.`);