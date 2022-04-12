import Play from '../assets/PlaySound.png'
const StakeFoot = () => {
    return (
        <footer>
        <div className="StakeFoot">
        <div className="space">
        <button className="spaceBtn">Space</button>
        <p>Next</p>
        </div>
        <div className="info">
        <button className="infoBtn">I</button>
        <p>Info</p>
        </div>
        <div className="esc">
        <button className="escBtn">Esc</button>
        <p>Close</p>
        </div>
        <div className="Play">
        <img src={Play} className="playBtn" alt='play'/>
        <p>Play Sound</p>
        </div>
        </div>
        </footer>
      );
}
 
export default StakeFoot;