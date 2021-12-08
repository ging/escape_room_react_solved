import PropTypes from "prop-types";
import BombComponent from "./BombComponent";

export default function BombComponentList(props) {

		return <ul className="list-group">
			{ /* MAP FUNCTION GOES HERE */
        /* BEGIN - MAP FUNCTION GOES HERE */ 
        props.components.map((c,index) =>{
          return <BombComponent key={index} status={c.status} index={index} id={c.id} toggleSwitch={props.turnOffComponent}/>
        })
        /* END - MAP FUNCTION GOES HERE */ 
      }	
      </ul>
}

BombComponentList.propTypes = {
  /**
   * Components of the bomb
   */
  components: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Current status of the switch
       */
      status: PropTypes.bool,
      /**
       * Name of the component to deactivate
       */
      id: PropTypes.String
    })
  ),
  /**
   * Function to turn off the switch
   */
  turnOffComponent: PropTypes.func
};
