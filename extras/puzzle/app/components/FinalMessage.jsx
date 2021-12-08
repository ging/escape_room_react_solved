import React from "react";
import {Modal, Button} from 'react-bootstrap';
import {objectiveAccomplished} from "../reducers/actions";
import ReactPlayer from "react-player";
import ReactCardFlip from 'react-card-flip';
let GLOBAL_CONFIG = require('../config/config.js');

export default class FinalMessage extends React.Component
{
  constructor(props){
    super(props);
    this.props.dispatch(objectiveAccomplished(1, 1));
    this.state = {
      showModal:true,
      isFlipped:false,
    };
    this.close = this.close.bind(this);
    this.hide = this.hide.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  close(){
    this.setState({showModal:false});
  }

  hide(){
    this.close();
    this.props.hide();
  }
  render()
  {

    let endImage;
    if(this.props.puzzleCompleto){
      (GLOBAL_CONFIG.endImageSuccess === "" || GLOBAL_CONFIG.endImageSuccess === undefined) ? endImage = "" : endImage =
          (
            <img
              src={GLOBAL_CONFIG.endImageSuccess}
              className="endImage"
              alt={"Success Image"}/>

          );
    }
    else {
      (GLOBAL_CONFIG.endImageFail === "" || GLOBAL_CONFIG.endImageFail === undefined) ? endImage = "" : endImage =
          (
            <img
              src={GLOBAL_CONFIG.endImageFail}
              className="endImage"
              alt={"Failed Image"}/>
          );
    }

    let title = this.props.puzzleCompleto ? "Puzzle completado" : "Puzzle incorrecto";

    let cardFlip = (

      <ReactCardFlip flipSpeedBackToFront={0.8} flipSpeedFrontToBack={0.8} isFlipped={this.state.isFlipped} flipDirection="horizontal" flipSpeedBackToFront={this.state.backToFront} flipSpeedFrontToBack={this.state.frontToBack}>

        {/* Contenedor de la pieza frontal*/}

        <div onDoubleClick={this.handleClick} title="Doble click para girar" >
          <img
            src={GLOBAL_CONFIG.endImageSuccess}
            className="endImage"
            alt={"Success Image"}/>
        </div>

        {/* Contenedor de la pieza trasera*/}
        <div onDoubleClick={this.handleClick} title="Doble click para girar" >
          <img
            src={GLOBAL_CONFIG.endImageSuccessReverse}
            className="endImage"
            alt={"Success Image reverse"}/>
        </div>
      </ReactCardFlip>);

    let msg = this.props.puzzleCompleto ? cardFlip : GLOBAL_CONFIG.endMessageFail;

    let continueButton;
    (!this.props.timeFinished && !this.props.puzzleCompleto) ? continueButton = <Button className={"btn btn-dark"} onClick={this.hide}>Seguir jugando</Button> : continueButton = "";

    if(!this.props.puzzleCompleto){
      msg = GLOBAL_CONFIG.endMessageFail;
    }
    return (
      <React.Fragment>
        <Modal show={this.state.showModal} animation={false} size="lg" onHide={() => false}>
          <Modal.Body>
            <br/>
            <p className="endMessage">{msg}</p>
          </Modal.Body>
          <Modal.Footer>
            {continueButton}
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }

  handleClick(e){
    e.preventDefault();
    this.setState(prevState => ({isFlipped:!prevState.isFlipped}));

  }

  componentDidMount(){
    if(this.props.puzzleCompleto){
      setTimeout(()=>{
        this.setState(prevState => ({isFlipped:!prevState.isFlipped}));
      }, 2000);
    }
  }
}