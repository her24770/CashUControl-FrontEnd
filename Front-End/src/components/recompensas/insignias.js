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
  import AhorradorﾠIncansable from "../../assets/images/insignias/AhorradorIncansable.png"
  import ÁngelﾠdeﾠlaﾠAsistencia from "../../assets/images/insignias/ÁngeldelaAsistencia.png"
  import CapitánﾠdeﾠControlﾠFinanciero from "../../assets/images/insignias/CapitándelControFinanciero.png"
  import EspecialistaﾠenﾠInversiones from "../../assets/images/insignias/EspecialistaenInversiones.png"
  import EstrellaﾠdelﾠAhorro from "../../assets/images/insignias/EstrelladelAhorro.png"
  import EliminaciónﾠdeﾠDeudas from "../../assets/images/insignias/Expertoen EliminacióndeDeudas.png"
  import GenioﾠdelﾠGasto from "../../assets/images/insignias/GeniodelGasto.png"
  import GuardiánﾠdelﾠTesoro from "../../assets/images/insignias/GuardiándeTesoro.png"
  import MaestroﾠdeﾠlaﾠModeración from "../../assets/images/insignias/MaestrodelaModeración.png"
  import MaestroﾠdelﾠMonitoreo from "../../assets/images/insignias/MaestrodelMonitoreo.png"
  import MásterﾠdeﾠMetas from "../../assets/images/insignias/MásterdeMetas.png"
  import NinjaﾠdelﾠNegocio from "../../assets/images/insignias/NinjadelNegocio.png"
  import ReyﾠdeﾠlaﾠReducciónﾠdeﾠGastos from "../../assets/images/insignias/ReydelaReduccióndeGastos.png"
  import GuruﾠdelﾠPresupuesto from "../../assets/images/insignias/GurudelPresupuesto.png"
  import HéroeﾠdelﾠHogar from "../../assets/images/insignias/HéroedelHogar.png"
  const BlogData = [
    {                                                       
      image: AhorradorﾠIncansable,
      nombre: "INSIGNIA DE AHORRO",
      descripcion: "Otorgada por mantener un hábito constante de ahorro durante varios meses consecutivos.",
      puntos: "Esta insignia vale: 100 puntos",
    },
    {                                                       
      image: GuruﾠdelﾠPresupuesto,
      nombre: "Gurú del Presupuesto",
      descripcion: "Otorgada por crear y mantener un presupuesto mensual de manera exitosa.",
      puntos: "Puntos: 150",
    },
    {                                                       
      image: MaestroﾠdeﾠlaﾠModeración,
      nombre: "Maestro de la Moderación",
      descripcion: "Otorgada por mantener gastos dentro del presupuesto establecido durante tres meses seguidos.",
      puntos: "Puntos: 200",
    },
    {                                                       
      image: GuardiánﾠdelﾠTesoro,
      nombre: "Guardián del Tesoro",
      descripcion: "Otorgada por mantener un saldo mínimo de ahorro durante un año completo.",
      puntos: "Puntos: 300",
    },
    {                                                       
      image: EstrellaﾠdelﾠAhorro,
      nombre: "Estrella del Ahorro",
      descripcion: "Otorgada por alcanzar un objetivo de ahorro específico dentro del plazo establecido.",
      puntos: "Puntos: 250",
    },
    {                                                       
      image: GenioﾠdelﾠGasto,
      nombre: "Genio del Gasto",
      descripcion: "Otorgada por reducir gastos en una categoría específica en un 20% durante un trimestre.",
      puntos: "Puntos: 200",
    },
    {                                                       
      image: EspecialistaﾠenﾠInversiones,
      nombre: "Especialista en Inversiones",
      descripcion: "Otorgada por realizar inversiones exitosas que generen un retorno positivo.",
      puntos: "Puntos: 300",
    },
    {                                                       
      image: MaestroﾠdelﾠMonitoreo,
      nombre: "Maestro del Monitoreo",
      descripcion: "Otorgada por revisar y actualizar el presupuesto semanalmente durante seis meses.",
      puntos: "Puntos: 200",
    },
    {                                                       
      image: HéroeﾠdelﾠHogar,
      nombre: "Héroe del Hogar",
      descripcion: "Otorgada por administrar con eficacia los gastos del hogar durante un año completo.",
      puntos: "Puntos: 300",
    },
    {                                                       
      image: EliminaciónﾠdeﾠDeudas,
      nombre: "Experto en Eliminación de Deudas",
      descripcion: "Otorgada por pagar completamente una deuda importante, como un préstamo estudiantil o un automóvil.",
      puntos: "Puntos: 350",
    },
    {                                                       
      image: NinjaﾠdelﾠNegocio,
      nombre: "Ninja del Negocio",
      descripcion: "Otorgada por establecer y mantener un negocio secundario rentable mientras se administra adecuadamente el presupuesto personal.",
      puntos: "Puntos: 400",
    },
    {                                                       
      image: CapitánﾠdeﾠControlﾠFinanciero,
      nombre: "Capitán del Control Financiero",
      descripcion: "Otorgada por evitar los gastos impulsivos durante seis meses consecutivos.",
      puntos: "Puntos: 200",
    },
    {                                                       
      image: MásterﾠdeﾠMetas,
      nombre: "Máster de Metas",
      descripcion: "Otorgada por alcanzar todas las metas financieras establecidas para el año.",
      puntos: "Puntos: 400",
    },
    {                                                       
      image: ÁngelﾠdeﾠlaﾠAsistencia,
      nombre: "Ángel de la Asistencia",
      descripcion: "Otorgada por proporcionar ayuda financiera significativa a un amigo o familiar en necesidad.",
      puntos: "Puntos: 250",
    },
    {                                                       
      image: ReyﾠdeﾠlaﾠReducciónﾠdeﾠGastos,
      nombre: "Rey de la Reducción de Gastos",
      descripcion: "Otorgada por reducir gastos totales en un 30% durante un período de seis.",
      puntos: "Puntos: 300",
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