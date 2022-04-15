
import { useHistory } from "react-router-dom";

const SuperDetails = (props) => {
    const history = useHistory();
    return (
        <>
        <div className="super_head">
        <h1>Defeat The Shogun</h1>
        </div>
        {/* <div className="superNova"> */}
        <div className={props.class}>
            <div className="supernova_content">
            <h1>{props.title}</h1>
            <p>{props.para}</p>
            </div>
            <model-viewer
            alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
            src={props.img}
          
           auto-rotate
            seamless-poster
            shadow-intensity="1"
          camera-controls
            enable-pan
          id={props.mod}></model-viewer>
          <span className="Cross" onClick={() => history.push("/defeat")}>X</span>
    {/*<span><img src={Cross} alt=""  className="cross" onClick={() => history.push("/defeat")}/></span> */}
        </div>
        </>
      );
}
 
export default SuperDetails;