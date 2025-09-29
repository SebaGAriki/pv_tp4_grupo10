import React, { useState } from 'react';
import '../css/Ejercicio02.css';

const colores = ['red', 'blue', 'green', 'yellow'];         //arreglo de colores

function getColorAleatorio() {
  return colores[Math.floor(Math.random() * colores.length)];
}

function BotonesColores() {
    const [mensaje, setMensaje] = useState('');
    const [intentos, setIntentos] = useState(0);
    const [botones, setBotones] = useState([ // cantidad de botones
    getColorAleatorio(),
    getColorAleatorio(),
    getColorAleatorio(),
    getColorAleatorio()
    ]);

  

  function handleClick() {
    const nuevosBotones = botones.map(() => getColorAleatorio());// Cambioo de color a los botones
    setBotones(nuevosBotones);
    setIntentos(intentos + 1);
    verificarVictoria(nuevosBotones);
  }

  
  function verificarVictoria(botonesActuales) {
    const contador = {};
    botonesActuales.forEach(color => {
      contador[color] = (contador[color] || 0) + 1;
    });

    const hayVictoria = Object.values(contador).some(cantidad => cantidad >= 3);
    if (hayVictoria) {
      setMensaje('Lo lograste!! con '+ intentos +' intentos');

      setIntentos(0); //  Reinicia el contador de intentos
    } else {
      setMensaje('');
    }
  }

  return (
    <div className="ejercicio02Contenedor">
      {botones.map((color, index) => (
        <button className='botones'
          key={index}
          onClick={handleClick}
          style={{
            backgroundColor: color,
            color: 'white',
            padding: '20px',
            margin: '10px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer' 
          }}
        >
          Botón {index + 1}
        </button>
      ))}
      <h2>{mensaje}</h2>
      <p>Intentos: {intentos}</p>
    </div>
  );
}

export default BotonesColores;