import Navbar from "../components/Navbar";
import PurposeBanner from '../assets/PurposeBanner.png'
import KiraBanner from '../assets/KiraBanner.png'
import Progess from '../assets/Progress.png'
import RD from '../assets/R &D.png'
import Running from '../assets/Running.png'
import Development from '../assets/Development.png'
const Purpose = () => {
    return ( 
        <>
        <Navbar/>
        <div className="Purpose">
        <div className="pur_banner">
        <img src={PurposeBanner} alt="" />
        </div>
        <div className="pur_wrap">
        <div className="Banner_logo">
        <img src={KiraBanner} alt="" />
        </div>
        <div className="pur_stats">
        <div>
        <span><img src={Progess} alt="" /> <span className="stats_pos"> = &nbsp;In Progress</span></span>
        </div>
        <div>
        <span><img src={RD} alt="" /> <span className="stats_pos">= &nbsp;R & D</span></span>
        </div>
        <div>
        <span><img src={Running} alt="" /> <span className="stats_pos">= &nbsp;Always Running</span></span>
        </div>
        <div>
        <span><img src={Development} alt="" /><span className="stats_pos"> = &nbsp;In Development</span></span>
        </div>
        </div>
        </div>
        </div>
        </>
     );
}
 
export default Purpose;