import { Link } from 'react-router-dom';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardGroup,
    Button,
    Row,
    Col,
  } from "reactstrap";
  import Blog from "../../components/dashboard/insignias";
  import insiahorro from "../../assets/images/insignias/insiahorro.jpeg";
  import insiahorro2 from "../../assets/images/insignias/insi2.jpeg";
  import insiahorro3 from "../../assets/images/insignias/insi3.jpeg";
  
  const BlogData = [
    {                                                       
      image: insiahorro,
      nombre: "INSIGNIA DE AHORRO",
      descripcion: "Insignia que se otorgará al ahorrar Q 1000.00",
      puntos: "Esta insignia vale: 100 puntos",
    },
    {
        image: insiahorro2,
        nombre: "INSIGNIA DE AHORRO",
        descripcion: "Insignia que se otorgará al ahorrar Q 1000.00",
        puntos: "Esta insignia vale: 100 puntos",
      },
      {
        image: insiahorro3,
        nombre: "INSIGNIA DE AHORRO",
        descripcion: "Insignia que se otorgará al ahorrar Q 1000.00",
        puntos: "Esta insignia vale: 100 puntos",
      },
    
      
  ];
  
  const Insignias = () => {
    return (
      <div>
        <Button tag={Link} to="/home/profile" className="btn" color="primary" size="lg">
            Mis Insignias
        </Button>
        <br></br>
        <br></br>
        <h5 className="mb-3" style={{ fontWeight: 'bold' }}>Insignias Vigentes</h5>
        <Row>
          {BlogData.map((blg, index) => (
            <Col sm="1000" lg="6" xl="3" key={index}>
              <Blog
                image={blg.image}
                nombre={blg.nombre}
                descripcion={blg.descripcion}
                puntos={blg.puntos}
                
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  };
  
  export default Insignias;