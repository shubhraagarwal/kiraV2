import SuperDetails from "../components/SuperDetails";
import Navbar from "../components/Navbar";
import ImpossibleModel from '../assets/04.glb';
const Impossible = () => {
    return (  
        <>
          <div className="navBox">
        <Navbar/>
        </div>
        <SuperDetails class="Impossible" title="IMPOSSIBLE" mod = 'ModelAlt' img={ImpossibleModel} para = "If you are KIRA, you don't believe in the impossible. Impossible is a word, and us KIRA know that actions defeat words. KIRA will become a PC and Console gaming staple to compete with the top in the industry. We already have Unity, Activision & Unreal Engine developers already working on production and believe that it is only a matter of time before we achieve this feat. This will not be easy and it will not be fast. It is forever in progress until complete. "/>
        </>
    );
}
 
export default Impossible;