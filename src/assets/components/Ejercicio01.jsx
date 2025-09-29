import React, { useState, useEffect } from 'react';
import '../css/Ejercicio01.css';
function AdivinarNumero() {
  const [numeroObjetivo, setNumeroObjetivo] = useState(null);
  const [intento, setIntento] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [contadorIntentos, setContadorIntentos] = useState(0);

  useEffect(() => {
    // Genera el número al iniciar
    const numeroRandom = Math.floor(Math.random() * 100) + 1;
    setNumeroObjetivo(numeroRandom);
  }, []);

  const calcularIntento = () => {
    const numeroIngresado = parseInt(intento, 10); //numeros con base decimal
    setContadorIntentos(contadorIntentos + 1);
    if (isNaN(numeroIngresado)||numeroIngresado<1||numeroIngresado>100) {
      setRespuesta('Por favor ingresa un número válido.');
    } else if (numeroIngresado < numeroObjetivo) {
      setRespuesta('Numero demasiado bajo');
    } else if (numeroIngresado > numeroObjetivo) {
      setRespuesta('Numero demasiado alto');
    } else {
      setRespuesta('Felicidades, adivinaste el numero '+numeroObjetivo);
    }
  };

  return (
    <div className='ejercicio01contenedor'>
      <h1>Adivina un numero del 1 al 100</h1>
      
      <input
        type="number"
        value={intento}
        onChange={(e) => setIntento(e.target.value)}
        placeholder="Tu número"
      />
      <button className='boton'
       onClick={calcularIntento} >
        Adivinar
      </button>
      <button className='boton' 
      onClick={() => setRespuesta(`Te rendiste el numero era: ${numeroObjetivo}`)} >
        Rendirse
      </button>

      <p>{respuesta}</p>
      <p className='mensajeIntentos'>Intentos: {contadorIntentos}</p>
    </div>
  );
}

export default AdivinarNumero;