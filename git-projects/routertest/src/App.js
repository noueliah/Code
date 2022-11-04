import {
  BrowserRouter as Router,
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
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>These are links:</h2>
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
            <Route exact path='/component/home' element={< Home />}></Route>

            <Route exact path='/component/login' element={< Login />}></Route>

            <Route exact path='/component/error' element={< Error />}></Route>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
