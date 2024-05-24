import { Card, CardBody, CardSubtitle, CardTitle, Row, Col } from "reactstrap";
import Chart from "react-apexcharts";
import axios from 'axios';
import React, { useEffect, useState } from 'react';



const SalesChart = () => {
  const id = localStorage.getItem('id');
  const [ingresos, setIngresos] = useState([]);
  const [egresos, setEgresos] = useState([]);
  const fechaActual = new Date();
const añoActual = fechaActual.getFullYear();




  // --------------------------------------------------------------


// Función para convertir la fecha en un formato manejable (mes-año)
function getMonthYear(dateStr) {
  const date = new Date(dateStr);
  const month = date.getUTCMonth() + 1; // Los meses en JS van de 0-11, por eso sumamos 1
  const year = date.getUTCFullYear();
  return `${year}-${month.toString().padStart(2, '0')}`;
}

// Función para calcular ingresos mensuales
function listGraficaIngresosMes(ingresos) {
  const ingresosMensuales = {};
  ingresos.forEach(ingreso => {
      const mesAno = getMonthYear(ingreso.date.$date);
      if (!ingresosMensuales[mesAno]) {
          ingresosMensuales[mesAno] = 0;
      }
      ingresosMensuales[mesAno] += ingreso.monto;
  });

  const totalIngresosPorMes = [];
  const meses = [`${añoActual}-01`, `${añoActual}-02`, `${añoActual}-03`, `${añoActual}-04`, `${añoActual}-05`, `${añoActual}-06`];
  meses.forEach(mes => {
      totalIngresosPorMes.push(ingresosMensuales[mes] || 0);
  });
  return totalIngresosPorMes;
}

// Función para calcular egresos mensuales
function obtenerEgresosMensuales(egresos) {
  const egresosMensuales = {};
  egresos.forEach(egreso => {
      const mesAno = getMonthYear(egreso.date.$date);
      if (!egresosMensuales[mesAno]) {
          egresosMensuales[mesAno] = 0;
      }
      egresosMensuales[mesAno] += egreso.monto;
  });

  const totalEgresosPorMes = [];
  const meses = [`${añoActual}-01`, `${añoActual}-02`, `${añoActual}-03`, `${añoActual}-04`, `${añoActual}-05`, `${añoActual}-06`];
  meses.forEach(mes => {
      totalEgresosPorMes.push(egresosMensuales[mes] || 0);
  });
  return totalEgresosPorMes;
}




// Ejecutar la función y obtener el array con los totales de egresos por mes de enero a junio
const listaGraficaIngresos = listGraficaIngresosMes(ingresos);
const listaGraficaEgresos = obtenerEgresosMensuales(egresos);


  // --------------------------------------------------------------

  

  //funcion listar egrsos
  const getEgresosList = async () => {
    try {
      const { data } = await axios.post(`http://localhost:5000/egresos/egresosBySemester/${id}`, {
        year: 2024,
        semestre: 1
      });
      setEgresos(data)
      console.log("egreso")
      console.log(data)
      
    } catch (error) {
      console.error(error);
    }
  };

  //funcion listar ingresos
  const getIngresosList = async () => {
    try {
      const { data } = await axios.post(`http://localhost:5000/ingresos/listSemestre/${id}`, {
        year: 2024,
        semestre: 1
      });
      console.log("ingreso")
      console.log(data)
      setIngresos(data)
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEgresosList()
    getIngresosList()
  }, []);


  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    legend: {
      show: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 2,
      },
    },
    colors: ["#0d6efd", "#009efb", "#6771dc"],
    xaxis: {
      categories: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio"
      ],
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "60%",
              borderRadius: 7,
            },
          },
        },
      },
    ],
  };
  const series = [
    {
      name: "Ingresos",
      data: listaGraficaIngresos
    },
    {
      name: "Egresos",
      data: listaGraficaEgresos
    }
  ];

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Promedio de finanzas</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Ingresos y egresos
        </CardSubtitle>
        <div className="bg-primary text-white my-3 p-3 rounded">
          {/* <Row>
            <Col md="4">
              <h6>Total Sales</h6>
              <h4 className="mb-0 fw-bold">$10,345</h4>
            </Col>
            <Col md="4">
              <h6>This Month</h6>
              <h4 className="mb-0 fw-bold">$7,545</h4>
            </Col>
            <Col md="4">
              <h6>This Week</h6>
              <h4 className="mb-0 fw-bold">$1,345</h4>
            </Col>
          </Row> */}
        </div>
        <Chart options={options} series={series} type="area" height="279" />
      </CardBody>
    </Card>
  );
};

export default SalesChart;
