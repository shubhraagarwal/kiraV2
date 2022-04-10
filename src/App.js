
import './App.css';
import Landing from './pages/Landing'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import DefeatCat from './pages/DefeatCat';
import Gallery from './pages/Gallery';
import Metamask from './pages/Metamask';
import Chart from './pages/Chart';
import Purpose from './pages/Purpose';
import Staking from './pages/Staking';
function App() {
  return (
 
  <Router>
 <Route exact path='/' component={Landing}/>
  <Route exact path='/defeat' component={DefeatCat}/>
  <Route exact path='/characters' component={Gallery}/>
  <Route exact path='/connect' component={Metamask}/>
  <Route exact path='/chart' component={Chart}/>
  <Route exact path='/purpose' component={Purpose}/>
  <Route exact path='/staking' component={Staking}/>
  </Router>
  
  );
}

export default App;
