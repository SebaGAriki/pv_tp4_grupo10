import '../css/Saludo.css';
function Saludo({ nA, aA }) {
    
  return (
    <div class="saludo-container">
      <h1 class="saludo-texto">Este es el componente</h1>
      <h2 class="saludo-texto">Saludo a {nA} {aA}</h2>
    </div>
  )
}
export default Saludo;