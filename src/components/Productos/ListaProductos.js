import React from "react";
import { Container } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import ItemProducto from "./ItemProducto";


const ListaProductos = (props) => {
  return (
    <div>
    <Container className='my-4'>
        <h1 className="display-4">Lista de productos</h1>
      <ListGroup>
          {
            //   Primer parametro es una palabra inventada que representa el dato de un elemento en el arreglo
            //   El segundo parametro es la posicion en la que estara situada
              props.productos.map((producto)=><ItemProducto producto={producto} key={producto.id}></ItemProducto>)
          }
        <ItemProducto></ItemProducto>
      </ListGroup>
    </Container>
    </div>
  );
};

export default ListaProductos;
