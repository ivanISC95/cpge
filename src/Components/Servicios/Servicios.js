import { useParams } from "react-router-dom"
import { Card, Col, Row, CardGroup } from "react-bootstrap";
import { data } from "../../Assets/Datas/Data";
import ModalContacto from "../ModalContacto/ModalContacto";
export default function Servicios() {
    let { id } = useParams();
    function FiltradoTipoServicio(id) {
        if(id === "Licencia"){
            return (id);
        }
        else if(id === "Dictamen"){
            return(id);
        }
        else{
            return(id = "");
        }
      };
      console.log(data)
    return (
        <div className="App-header">
            <h1 className="App-Titulos">Servicio {id}</h1>
            <br />
            <div className="App-Dialogo">
                <Row xs={1} md={4} >
                    {data.filter(service => service.tipo.includes(FiltradoTipoServicio(id))).map(
                        data => (
                            <Col>
                                <CardGroup>
                                    <Card border="primary" className="App-Card">
                                        <Card.Img variant="top" src={data.img} alt={data.descripcion}/>

                                        <Card.Body >
                                            <Card.Title>{data.nombre}</Card.Title>
                                            <Card.Text className="App-Card">
                                                {data.descripcion}
                                            </Card.Text>
                                        </Card.Body>
                                        <ModalContacto />
                                    </Card>                                    
                                </CardGroup>
                                <br />
                            </Col>
                        )
                    )}
                </Row>
            </div>
        </div>
    )
}