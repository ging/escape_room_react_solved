////////////////////////////////////////////////////////////////
//     _   _  _____     _____  _____  ___    _____  ___       //
//    ( ) ( )(  _  )   (_   _)(  _  )(  _`\ (  _  )|  _`\     //
//    | `\| || ( ) |     | |  | ( ) || ( (_)| (_) || (_) )    //
//    | , ` || | | |     | |  | | | || |  _ |  _  || ,  /     //
//    | |`\ || (_) |     | |  | (_) || (_( )| | | || |\ \     //
//    (_) (_)(_____)     (_)  (_____)(____/'(_) (_)(_) (_)    //
//                                                            //
////////////////////////////////////////////////////////////////


import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import ProgressBar from "../ProgressBar";

export default class Screen4 extends React.Component {
  render() {
    return (
      <div className="inside" id="screen4">
          <p>
            {"QWhvcmEgcXVlIHRpZW5lcyBlbCBj82RpZ28gZGViZXMgZW52aWFybG8gZW4gZm9ybWEgZGUgcGV0aWNp824gYXPtbmNyb25hIFBPU1QgYWwgbfNkdWxvIGRlIGNvbnRyb2wgZGUgdGVtcGVyYXR1cmEgZGVzZGUgbGEgY29uc29sYSBkZWwgbmF2ZWdhZG9yIChlbiBlc3RhIHBlc3Rh8WEpLiBMYSBVUkwgZXM=".unhashCode()}
          </p>
          <code>{"aHR0cDovL2JvbWIudXBtLmVzL3RlbXBlcmF0dXJl".unhashCode()}</code> 
          <p>enviando en el body un JSON como el que sigue   <a href="https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch">
             (Ayuda)
          </a> 
          :</p>
            
          <code> {` {  "action": "RESET" } `} </code>{" "}
          <div className="codeInputContainer" >
            <input type="number" className="codeInput" min="0" max="9999" maxLength="4" autoFocus id="inputTemperature" placeholder="****"/>
          </div>
           <div className="actions actions_left">
            <Link to={`/${"3".hashCode()}`}>
          <button className="btn secondary">ANTERIOR</button>
        </Link>
      </div>
        
        <ProgressBar progress={100} />
      </div>
    );
  }

}

Screen4.propTypes = {
  /**
   * Components of the bomb
   */
  components: propTypes.arrayOf(
    propTypes.shape({
      /**
       * Current status of the switch
       */
      status: propTypes.bool,
      /**
       * Name of the component to deactivate
       */
      id: propTypes.String
    })
  ),
  /**
   * Function to turn off the switch
   */
  deac: propTypes.func,
};
