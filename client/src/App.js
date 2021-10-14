import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './containers/LandingPage/LandingPage';
import Home from './containers/Home/Home';
import CreateBreed from './containers/CreateBreed/CreateBreed';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route
        exact path="/"
        component={LandingPage}
      />
      <Route path='/'>
        <Navbar/>
      <Route 
        path="/home"
        component={Home}
      />
      <Route
        path="/dogs/:id"
        component={Detail}
      />
      <Route
        exact path="/dogs"
        component={CreateBreed}
      />
      </Route>
        <h1>Henry Dogs</h1>
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
