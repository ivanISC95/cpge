import cpge from '../../Assets/Img/CPGE.png';
export default function Nosotros() {
    return (
        <div className="App-header">
            <h1 className='App-Titulos'>¿Quiénes somos?</h1>
            <br />
            <div className="App-Dialogo">
                <div>
                    <img src={cpge} alt="CPGE" className="App-logo" />
                </div>
                <div >
                    Somos la Empresa de gestoría con mayor reconocimiento en el
                    Estado de Querétaro, por sus diversos Municipios y Gobierno del estado en las 5 ultimas administraciones.
                </div>
            </div>
        </div>
    )
}