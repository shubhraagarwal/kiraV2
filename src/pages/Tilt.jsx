import SuperDetails from "../components/SuperDetails";
import Navbar from "../components/Navbar";
import TiltModel from '../assets/02.glb'
import Staking from "../assets/staking.png";
const Tilt = () => {
    return ( 
        <>
         <div className="navBox">
         <Navbar home = '' market ='' purpose = {Staking} development = '' reserve = '' staking = '' weapon = '' land = ''/>
        </div>
        <SuperDetails class="Tilt" title = 'TILT'  mod = 'Model' img={TiltModel} para = 'As our forces get stronger, KIRA will be known and relevant as well as appear strong and becoming. This will make the Shogun uneasy. Leave the Shogun on edge. And this is no time to get complacent. At this time we attack more aggressively through virtual experiences, metaverse and augmented reality, major  partnerships in the gaming industry, animation studios and more. We keep the Shogun guessing and restless, while leaving the space waiting for our next move, on Tilt. '/>
        </>
     );
}
 
export default Tilt;