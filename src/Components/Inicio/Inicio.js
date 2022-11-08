import cpge from '../../Assets/Img/CPGE.png';
export default function Inicio() {
  return (
    <div className="App-header">
      <div className="App-Dialogo">
        <div>
          <img src={cpge} alt="CPGE" className="App-logo" />
        </div>
        <div >
          Consultoría de Proyectos y Gestiones Empresariales.
          <br />
          Gestionamos en todo el Estado de Querétaro Únicamente.
        </div>
      </div>   
    </div>
  )
}