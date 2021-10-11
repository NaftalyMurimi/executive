

import Home from './Components/Home';
import Navbar from './Components/Navbar';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
function App() {
  return (
    <Router>
    <div className="App">
      
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/About"  component={About}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/Contacts"  component={Contacts}/>
      </Switch>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
