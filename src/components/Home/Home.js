import "./styles.css";
import React from 'react';
import { Card, Button, CardGroup } from "react-bootstrap";
import blockc from "/Users/analuciarojas/Desktop/projects/proyecto-final/src/assets/block.ong.png";


function Home() {



  return (
    <div className="container2">
      <CardGroup>

    <Card className="card2">
    <Card.Img variant="top" src={blockc} />
  </Card>
  <Card>
  <Card.Header className="block" as="h5">USANDO SISTEMA <br></br><p id="n">BLOCKCHAIN</p> </Card.Header>
    <Card.Body>
      <Card.Text>
      Un detector de medicinas o productos falsos que por medio de un qr code determine si el producto es original o no. Para evitar una repetición o falsificacion de códigos, el id utilizara el sistema de blockchain de forma que cada transaccion en el "supply chain" queda grabado de manera distribuida.
      </Card.Text>
      <Button variant="primary">EMPEZAR</Button>
    </Card.Body>
  
</Card>
  </CardGroup>
</div>

  );
}

export default Home;