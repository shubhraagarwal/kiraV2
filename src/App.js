import "./App.css";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DefeatCat from "./pages/DefeatCat";
import Gallery from "./pages/Gallery";
import Metamask from "./pages/Metamask";
import Chart from "./pages/Chart";
import Development from "./pages/Development";
import { useEffect } from "react";
import Supernova from "./pages/Supernova";
import Assent from "./pages/Assent";
import Tilt from "./pages/Tilt";
import Impossible from "./pages/Impossible";
import StakingSoon from "./pages/StakingSoon";
import Team from "./pages/Team";
function App() {
  useEffect(() => {
    /* Storing user's device details in a variable*/
    let details = navigator.userAgent;

    /* Creating a regular expression 
        containing some mobile devices keywords 
        to search it in details string*/
    let regexp = /android|iphone|kindle|ipad/i;

    /* Using test() method to search regexp in details
        it returns boolean value*/
    let isMobileDevice = regexp.test(details);

    if (isMobileDevice) {
      alert("Please open the website in a desktop");
    }
  }, []);

  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/defeat" component={DefeatCat} />
      <Route exact path="/marketplace" component={Gallery} />
      <Route exact path="/connect" component={Metamask} />
      <Route exact path="/reserve" component={Chart} />
      <Route exact path="/development" component={Development} />
      <Route exact path="/staking" component={StakingSoon} />
      <Route exact path="/defeat/supernova" component={Supernova} />
      <Route exact path="/defeat/assent" component={Assent} />
      <Route exact path="/defeat/tilt" component={Tilt} />
      <Route exact path="/defeat/impossible" component={Impossible} />
      <Route exact path="/team" component={Team} />
    </Router>
  );
}

export default App;
