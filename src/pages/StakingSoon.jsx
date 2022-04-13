import Navbar from "../components/Navbar";
import Preview from '../assets/Preview.png'
import Staking from "../assets/staking.png";
const StakingSoon = () => {
    return ( 

        <>
        <div className="navBox">
        <Navbar home = '' market ='' purpose = '' development = '' reserve = '' staking = {Staking} weapon = '' land = ''/>
        </div>
<div className="CommingSoon">
<img src={Preview} alt="" />
</div>
        </>
     );
}
 
export default StakingSoon;