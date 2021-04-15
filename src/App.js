import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Inicio from './components/Inicio';
import AgregarProducto from './components/Productos/AgregarProducto';
import ListaProductos from './components/Productos/ListaProductos';
import NavB from './components/common/NavB';
import Footer from './components/common/Footer';

function App() {
  const URL = process.env.REACT_APP_API_URL;
  const [productos, setProductos]=useState([]);

  useEffect(()=>{
    consultarAPI();
  },[])

  const consultarAPI = async()=>{
    try{
      const consulta = await fetch(URL);
      const respuesta = await consulta.json();
      console.log(respuesta);
      setProductos(respuesta);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div>
      <Router>
        <NavB></NavB>
        <Switch>
          <Route exact path='/'>
            <Inicio>
            </Inicio>
          </Route>
          <Route exact path='/productos'>
            <ListaProductos productos={productos}></ListaProductos>
          </Route>
          <Route exact path='/productos/nuevo'>
            <AgregarProducto></AgregarProducto>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
