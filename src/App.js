import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Inicio from './components/Inicio';
import AgregarProducto from './components/AgregarProducto';
import ListaProductos from './components/ListaProductos';
import NavB from './components/common/NavB';
import Footer from './components/common/Footer';

function App() {
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
            <ListaProductos></ListaProductos>
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
