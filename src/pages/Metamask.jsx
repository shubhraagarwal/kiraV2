import Navbar from "../components/Navbar";
import "../components/components.css";
import meta from "../assets/metamask.png"

const Metamask = () => {
    return (
        // <>
        <>
         <div className="META">  
         <div className="navBox">
         <Navbar/>
         </div>
        
        <div className="metamask">
            <img src={meta} alt="" />
            <p>Connect Metamask to Continue</p>
        </div>
       
        {/* </> */}
         </div>
         <div className='res'>
         <h1>Please open the site in a Desktop</h1>
         </div>
         </>
   );

}
export default Metamask;