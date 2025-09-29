import Saludo from './assets/components/Saludo'
import Ejercicio01 from './assets/components/Ejercicio01'
import Ejercicio02 from './assets/components/Ejercicio02'

function App() {

  // variables
  let nombre = 'Sebastian';
  let apellido= 'Gonzalez Ariki';

  // funciones


  return (
    <>
      <Saludo nA = {nombre} aA = {apellido} />
       <Ejercicio01/>
      <Ejercicio02/>
     
    </>
    )
}
export default App;