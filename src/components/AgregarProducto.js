import React, { Fragment } from "react";
import { Button, Container, Form } from "react-bootstrap";


const AgregarProducto = () => {
  return (
    <Fragment>
        <Container>
            <Form className='my-4'>
                <h1 className='display-4 my-3'>Agregar nuevo producto</h1>
                <Form.Group>
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control type='text' placeholder='Submarino..'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type='text' placeholder='$50'></Form.Control>
                </Form.Group>
                <div className='text-center my-4'>
                <h3>Categoria</h3>
                    <Form.Check inline type='radio' name='categoria' label='Bebida caliente'></Form.Check>
                    <Form.Check inline type='radio' name='categoria' label='Bebida fria'></Form.Check>
                    <Form.Check inline type='radio' name='categoria' label='Sandwitch'></Form.Check>
                    <Form.Check inline type='radio' name='categoria' label='Dulce'></Form.Check>
                    <Form.Check inline type='radio' name='categoria' label='Salado'></Form.Check>
                </div>
                <Button type='submit' className='w-100' variant='danger'>Agregar Producto</Button>
            </Form>
        </Container>
    </Fragment>
  );
};

export default AgregarProducto;
