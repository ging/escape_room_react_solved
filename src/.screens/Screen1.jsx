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

export default class Screen1 extends React.Component {
  render() {
    return (
      <div className="inside" id="screen1">
        <p>
          {"RXN0YSBlcyBsYSBhcGxpY2FjafNuIGRlIGRlc2FjdGl2YWNp824gZGUgbGEgYm9tYmEuIFBhcmEgZXZpdGFyIHF1ZSAgY3VhbHF1aWVyIHBlcnNvbmEgYWNjZWRhIGEgbGEgaW50ZXJmYXogZGUgY29udHJvbCwgc/NsbyBlbnRyYW5kbyBlbiBsYSBjb25zb2xhIGRlbCBuYXZlZ2Fkb3IgeSBlamVjdXRhbmRvIGxhIGZ1bmNp824gcXVlIHNlIGluZGljYSBlbiBlbCBtZW5zYWplIGRlIGF1ZGlvIHBvZHLhcyBwYXNhciBhbCBzaWd1aWVudGUgcGFzby4=".unhashCode()}
        </p>
        <div className="text-center">
          <audio controls src="/morse.wav" />
        </div>
        <div className="actions actions_right">
        </div>
        <ProgressBar progress={25} />
      </div>
    );
  }
}

Screen1.propTypes = {
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
 