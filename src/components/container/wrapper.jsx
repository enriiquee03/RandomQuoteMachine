import React, { useState } from 'react';
import useColorStore from '../../colorStore';
const messages = [
  {
      message:"Andábamos sin buscarnos pero sabiendo que andábamos para encontrarnos",
      author:"- J.K. Rowling"
},
  {
      message:"No somos ciudadanos de este mundo sino pasajeros en tránsito por la tierra prodigiosa e intolerable.",
      author:"- José Emilio Pacheco"
},
  {
      message:"El hombre que ha empezado a vivir más seriamente por dentro, empieza a vivir más sencillamente por fuera",
      author:"- Ernest Hemingway"
}
];
function randomNumber(array) {
  return Math.floor(Math.random() * array.length)
}

let bgcolor = '';
function colorHexadecimalAleatorio() {
  // Generar valores aleatorios para los componentes rojo, verde y azul
  const r = Math.floor(Math.random() * 256); // Valor entre 0 y 255 para el componente rojo
  const g = Math.floor(Math.random() * 256); // Valor entre 0 y 255 para el componente verde
  const b = Math.floor(Math.random() * 256); // Valor entre 0 y 255 para el componente azul

  // Convertir los valores a formato hexadecimal
  const rHex = r.toString(16).padStart(2, '0');
  const gHex = g.toString(16).padStart(2, '0');
  const bHex = b.toString(16).padStart(2, '0');

  // Formatear el color en notación hexadecimal
   bgcolor = `#${rHex}${gHex}${bHex}`;
}


function Counter() {
  // Define el estado y las funciones de manejo del estado aquí
  const [message, setMessage] = useState('Andábamos sin buscarnos pero sabiendo que andábamos para encontrarnos');
  const [author, setAuthor] = useState('- J.K. Rowling');
  // Agrega otros estados si es necesario

  const { color, setColor } = useColorStore();

  // Función para manejar el evento del botón
  const handleNewQuote = () => {
    // Coloca tu lógica actual para cambiar el mensaje aquí
    const rnumber = Math.floor(randomNumber(messages));
    setMessage(messages[rnumber].message);
    setAuthor(messages[rnumber].author)
    // Llama a la función para cambiar el color si es necesario
    colorHexadecimalAleatorio()
    setColor(bgcolor);
  };
  // Renderiza el componente como una función de componente
  return (
    <div className='container flex max-h-50 place-items-center flex-col w-2/6 items-end gap-5 p-4 bg-white rounded' id="quote-box">
      <p style={{ color : color }} className='m-auto text-center text-lg' id="text">{message}</p>
      <p style={{ color : color }} className='' id="author">{author}</p>
      <div className='flex justify-between w-full'>
      <div className="flex items-center space-x-2 justify-start w-full">
        <button style={{backgroundColor : color}} className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
          </button>

          <button style={{backgroundColor : color}} className=" p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
            <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
          </button>
        </div>
      <button style={{backgroundColor : color }} className='p-2 rounded text-white w-1/4' onClick={handleNewQuote}>New quote</button>
      </div>

    </div>
  );
}

export default Counter;