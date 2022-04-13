import Region from '../assets/Region.png'
import Clan from '../assets/Clan.png'
import InfoFrame from '../assets/InfoFrame.png'
// import InfoBar from '../assets/InfoBar.png'
const Invent = () => {
    return ( 
        <div className="Inventory">
        <div className="region">
        <div>
        <img src={Region} alt="" className='reg'/>
        </div>
        <div>
        <img src={Clan} alt="" className='clan'/>
        </div>
        <div className="info">
        <div className='InfoHead'>
        <h1>Info</h1>
        </div>
        <div>
        <img src={InfoFrame} alt="" />
        </div>
        </div>
        </div>
        </div>
     );
}
 
export default Invent;