import React from "react";
import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/CapitándelControFinanciero.png";
import bg2 from "../assets/images/bg/EspecialistaenInversiones.png";
import bg3 from "../assets/images/bg/EstrelladelAhorro.png";
import bg4 from "../assets/images/bg/GeniodelGasto.png";
import bg5 from "../assets/images/bg/HéroedelHogar.png";
import bg6 from "../assets/images/bg/GurudelPresupuesto.png";
import bg7 from "../assets/images/bg/Expertoen EliminacióndeDeudas.png";
import bg8 from "../assets/images/bg/GeniodelGasto.png";
import bg9 from "../assets/images/bg/GuardiándeTesoro.png";
import bg10 from "../assets/images/bg/HéroedelHogar.png";
import logoDark from "../assets/images/insignias/cha.jpeg";

const BlogData = [
{
    image: bg1,
    description: "Cada ahorro te acerca un poco más a tus metas financieras.",
  },
  {
    image: bg2,
    description: "El control de tus gastos hoy te da libertad financiera mañana.",
  },
  {
    image: bg3,
    description: "Cada gasto innecesario es una oportunidad perdida de invertir en tu futuro.",
  },
  {
    image: bg4,
    description: "Piensa dos veces antes de gastar, y verás crecer tu patrimonio.",
  },
  {
    image: bg5,
    description: "Cada centavo ahorrado es un paso hacia la tranquilidad financiera.",
  },
  {
    image: bg6,
    description: "El ahorro constante es la clave para construir la vida que deseas.",
  },
  {
    image: bg7,
    description: "Gastar menos hoy te permite disfrutar más mañana sin preocupaciones.",
  },
  {
    image: bg8,
    description: "Cada compra consciente te acerca a una vida más próspera y equilibrada.",
  },
  {
    image: bg9,
    description: "El dinero que no gastas hoy es una semilla para un futuro más próspero.",
  },
  {
    image: bg10,
    description: "La disciplina financiera te lleva más lejos que cualquier compra impulsiva.",
  },
];

const Starter = () => {
  return (
    <div>
      {/***Top Cards***/}
      {/*Sales & Feed***/}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
        <img src={logoDark} alt="Logo" style={{ width: "500px", height: "auto" }} />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          
        </Col>
      </Row>
      {/***Blog Cards***/}
      <Row>
        {BlogData.map((blogItem, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blogItem.image}
              title={blogItem.title}
              subtitle={blogItem.subtitle}  
              text={blogItem.description}
              color={blogItem.btnbg}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Starter;