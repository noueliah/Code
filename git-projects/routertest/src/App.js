import {
  BrowserRouter as Router, // BroserRouter (alias Router) es un react context 
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import Error from './component/Error';

function App() {
  return (
    <Router> {/* Wrappeamos toda la app adentro de este component, que es el que va a dar info sobre routing a todos los otros components de la aplicacióncd */}
      <div className="App">
        <header className="App-header">
          <h2>These are links:</h2>
          {/*  Esto no se re-renderea ni cambia cuando hacés clic en los links,
          lo único que cambia es lo que está adentro de Routes */}
          <ul>
            <li>
              <Link to="/component/home">Home</Link>
            </li>
            <li>
              <Link to="/component/login">Login</Link>
            </li>
            <li>
              <Link to="/component/error">Error</Link>
            </li>
          </ul>
          <Routes>
            {/* Adentro de acá ponemos cada Route, esto define qué se renderea en cada URL */}
            <Route exact path='/component/home' element={< Home />}></Route>
            {/*  element puede ser un componente o un elemento de html o whatever */}
            <Route exact path='/component/login' element={< Login />}></Route>

            <Route exact path='/component/error' element={< Error />}></Route>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
