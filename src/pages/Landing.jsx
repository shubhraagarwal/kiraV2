import Navbar from "../components/Navbar";
import LandingBanner from '../assets/LandingBanner.png'
const Landing = () => {
    return ( 
        <>
        
        <Navbar/>
     <div className="LandBanner">
     <img src={LandingBanner} alt="" />
     </div>
        </>
     );
}
 
export default Landing;