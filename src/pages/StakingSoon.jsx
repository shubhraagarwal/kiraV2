import Navbar from "../components/Navbar";
import Preview from '../assets/Preview.png'
import Staking from "../assets/staking.png";
const StakingSoon = () => {
    var window_size = window. matchMedia('(max-width: 991px)')
    console.log(window_size)
    
    
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