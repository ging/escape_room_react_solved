import React, {useState, useEffect} from "react";
import {Modal, Button, CardGroup, Card, Tab, Tabs, Sonnet} from 'react-bootstrap';
import Timer from "./Timer";
import CardInstructions from "./CardInstructions";

import './../assets/scss/main.scss';
let GLOBAL_CONFIG = require('../config/config.js');

export default function InitialMessage(props){
  const [enable, setEnable] = useState(GLOBAL_CONFIG.timeToReadInstructions === undefined || GLOBAL_CONFIG.timeToReadInstructions < 1);
  const show = props.mostrarMsgInicial;
  let timeToReadInstructions;
  (GLOBAL_CONFIG.timeToReadInstructions === undefined || GLOBAL_CONFIG.timeToReadInstructions < 1) ?
    timeToReadInstructions = "" : timeToReadInstructions = GLOBAL_CONFIG.timeToReadInstructions;

  let timer;
  (props.temporizador && timeToReadInstructions !== "") ?
    timer = (
      <div style={{display:!enable ? 'block' : 'none'}}>
        <Timer time={timeToReadInstructions} showMinutes={false} onStartTime onFinishTime={()=>{setEnable(true);}} />
      </div>
    ) : timer = "";

  let initialImage;
  (GLOBAL_CONFIG.initialImage === "" || GLOBAL_CONFIG.initialImage === undefined) ? initialImage = "" : initialImage =
      (
        <img src={GLOBAL_CONFIG.initialImage} className="initialImage" alt={"Imagen de mensaje inicial."}/>

      );

  let titulo = "";
  if(GLOBAL_CONFIG.title !== undefined){
    titulo = GLOBAL_CONFIG.title;
  }

  let cards = [];
  // Fixed cards
  cards.push(
    {
      pathImage:"./assets/icons/goal.svg",
      title:"Objetivo",
      text:"Ordenar las piezas para dar con la solución.",
    },
    {
      pathImage:"./assets/icons/interchange.svg",
      title:"Intercambio de piezas",
      text:"Mediante un click se selecciona la pieza y se deposita con otro click en el lugar de destino.",
    }
  );

  // Optional card. Reverse.
  if(GLOBAL_CONFIG.reverseMode){
    cards.push(
      {
        pathImage:"./assets/icons/flip_piece.svg",
        title:"Piezas reversibles",
        text:"Para dar la vuelta a una pieza se debe hacer doble click sobre ella.",
      }
    );
  }

  // Optional card. Extra pieces.
  if(GLOBAL_CONFIG.fake_pieces > 0){
    cards.push({
      pathImage:"./assets/icons/extra.svg",
      title:"Piezas señuelo",
      text:"Las piezas que no pertenezcan al puzzle se depositarán en la parte derecha.",
    });
  }

  let iconCards = [];

  // Fixed icon cards (instructions and check solution)
  iconCards.push({
    pathImage:"./assets/icons/instructions.svg",
    title:"¿Cómo jugar?",
    text:"Volver a leer las instrucciones de juego",
  },
  {
    pathImage:"./assets/icons/solution.svg",
    title:"Comprobar solución",
    text:"Comprobar la solución del puzzle.",
  }
  );

  // Optional cards (flip pieces and zoom)
  if(GLOBAL_CONFIG.reverseMode){
    iconCards.push(
      {
        pathImage:"./assets/icons/flip.svg",
        title:"Revertir piezas",
        text:"Dar la vuelta a todas las piezas simultáneamente.",
      }
    );
  }

  if(GLOBAL_CONFIG.zoomMode){
    iconCards.push(
      {
        pathImage:"./assets/icons/zoom-in.svg",
        title:"Zoom",
        text:"Activar o desactivar la opción de Zoom sobre las piezas.",
      }
    );
  }

  return (
    <>
      <Modal backdrop="static" keyboard={false} show={show} onHide={props.ocultarInstrucciones} animation={false} size="lg">
        <Modal.Body className="tab">
          <p className="textTitleInstructions"><b>Instrucciones</b></p>
          <CardGroup>

            {cards.map((card, index)=>{
              return (
                <CardInstructions
                  key={index}
                  pathImage = {card.pathImage}
                  title = {card.title}
                  text = {card.text}
                />
              );
            })}

          </CardGroup>

          <p className="textTitleInstructions"><b>Iconos</b></p>

          <CardGroup>
            {iconCards.map((card, index)=>{
              return (
                <CardInstructions
                  key={index}
                  pathImage = {card.pathImage}
                  title = {card.title}
                  text = {card.text}
                />
              );
            })}
          </CardGroup>

        </Modal.Body>

        <Modal.Footer>
          <Button className={"btn btn-dark playButton"} variant="primary" disabled={!enable && props.temporizador} onClick={()=>{ props.ocultarInstrucciones(); props.onStartTime();}}>
            {props.buttonStart}
            {timer ? <p>{timer}</p> : null}
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  );
}