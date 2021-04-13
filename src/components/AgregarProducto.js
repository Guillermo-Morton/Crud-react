import React, { Fragment, useState } from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";

const AgregarProducto = () => {
  const URL = process.env.REACT_APP_API_URL;
  // states
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [error, setError]= useState(false);
  // funcion para cambiar categoria en el state
  const cambiarCategoria = (e) => {
    setCategoria(e.target.value);
  };
  // funcion handleSubmit
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (
      // validamos el formulario
      nombreProducto.trim() === "" ||
      precioProducto.trim() === "" ||
      categoria === ""
    ) {
      // mostrar error si falla la validacion
      setError(true);
      return;
    } else {
      // enviamos el objeto a la api
      setError(false)
      // crear el objeto  a enviar
      const datos={
        nombreProducto: nombreProducto,
        precioProducto: precioProducto,
        categoria: categoria
        // si coinciden los nombres con los nombres en el backend
        // nombreProducto,
        // precioProducto,
        // categoria
      };
      console.log(datos);
      // enviar objeto a la api, operacion POST
      try{
        const parametros ={
          // si o si en ingles, cuidado con la sintaxis
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(datos)

        };

        // ejecutar la solicitud o request
        const respuesta= await fetch(URL, parametros);
        console.log(respuesta);

      }catch(error){
        console.log(error);
      }
    }
  };

  return (
    <Fragment>
      <Container>
        <Form onSubmit={handleSubmit} className="my-4">
          <h1 className="display-4 my-3">Agregar nuevo producto</h1>
          <Form.Group>
            {(error === true)?(<Alert variant={'danger'}>Todos los campos son obligatorios</Alert>):null}
            <Form.Label>Nombre del producto *</Form.Label>
            <Form.Control
              onChange={(e) => setNombreProducto(e.target.value)}
              type="text"
              placeholder="Submarino.."
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio *</Form.Label>
            <Form.Control
              onChange={(e) => setPrecioProducto(e.target.value)}
              type="number"
              placeholder="$50"
            ></Form.Control>
          </Form.Group>
          <div className="text-center my-4">
            <h3>Categoria *</h3>
            <Form.Check
              inline
              type="radio"
              name="categoria"
              value="bebida-caliente"
              label="Bebida caliente"
              onChange={(e) => setCategoria(e.target.value)}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              name="categoria"
              value="bebida-fria"
              label="Bebida fria"
              onChange={(e) => setCategoria(e.target.value)}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              name="categoria"
              value="sandwitch"
              label="Sandwitch"
              onChange={(e) => setCategoria(e.target.value)}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              name="categoria"
              value="dulce"
              label="Dulce"
              onChange={(e) => setCategoria(e.target.value)}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              name="categoria"
              value="salado"
              label="Salado"
              onChange={cambiarCategoria}
            ></Form.Check>
          </div>
          <Button type="submit" className="w-100" variant="danger">
            Agregar Producto
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default AgregarProducto;
