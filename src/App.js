
import './App.css';
import Landing from './pages/Landing'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import DefeatCat from './pages/DefeatCat';
import Gallery from './pages/Gallery';
import Metamask from './pages/Metamask';
import Chart from './pages/Chart';
import Purpose from './pages/Purpose';
import Staking from './pages/Staking';
import Supernova from './pages/Supernova';
import Assent from './pages/Assent';
import Tilt from './pages/Tilt';
import Impossible from './pages/Impossible';
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
  <Route exact path='/defeat/supernova' component={Supernova}/>
  <Route exact path='/defeat/assent' component={Assent}/>
  <Route exact path='/defeat/tilt' component={Tilt}/>
  <Route exact path='/defeat/impossible' component={Impossible}/>
  </Router>
  
  );
}

export default App;
