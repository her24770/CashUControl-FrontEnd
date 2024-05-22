import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user1,
    name: "Pedro Alvarado",
    email: "pablal12@gmail.com",
    project: "Viaje en Uber",
    status: "pending",
    weeks: "4/mes",
    budget: "Q25",
  },
  {
    avatar: user2,
    name: "Hanna Barcarcel",
    email: "HanaOwO@gmail.com",
    project: "Macdonald",
    status: "done",
    weeks: "10/mes",
    budget: "Q50",
  },
  {
    avatar: user3,
    name: "Emilio Jouse",
    email: "EmilioPilin@gmail.com",
    project: "Dollarcity",
    status: "holt",
    weeks: "2/mes",
    budget: "Q200",
  },
  {
    avatar: user4,
    name: "Gabriel Molina",
    email: "GabrielFlores@gmail.com",
    project: "Hosting",
    status: "pending",
    weeks: "1/mes",
    budget: "Q150",
  },
  {
    avatar: user5,
    name: "Pedro Pablo",
    email: "Pedro&Pablo@gmail.com",
    project: "iShop",
    status: "done",
    weeks: "1/mes",
    budget: "Q3700",
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Ultimas Compras</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Aqui veras tus ultimas Compras
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>descripcion</th>

                <th>Estado</th>
                <th>Frec</th>
                <th>Monto</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.project}</td>
                  <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{tdata.weeks}</td>
                  <td>{tdata.budget}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
