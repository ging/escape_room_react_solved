////////////////////////////////////////////////////////////////
//     _   _  _____     _____  _____  ___    _____  ___       //
//    ( ) ( )(  _  )   (_   _)(  _  )(  _`\ (  _  )|  _`\     //
//    | `\| || ( ) |     | |  | ( ) || ( (_)| (_) || (_) )    //
//    | , ` || | | |     | |  | | | || |  _ |  _  || ,  /     //
//    | |`\ || (_) |     | |  | (_) || (_( )| | | || |\ \     //
//    (_) (_)(_____)     (_)  (_____)(____/'(_) (_)(_) (_)    //
//                                                            //
////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import  screensAvailable from './.screens/Screens';
 
import "./assets/scss/main.scss";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
const supportsHistory = "pushState" in window.history;

const path = `/:index`;

export default function App() {
  const [components, setComponents] = useState([
    {
      id: "Proyectil",
      status: true
    },
    {
      id: "Detonador",
      status: true
    },
    {
      id: "Iniciador de neutrones",
      status: true
    },
    {
      id: "Batería",
      status: true
    }
  ]);

  const deac = (index, event) => {
    let newComponents = components.map((component, i)=>{return {...component, status: index === i? !component.status : component.status}})
    setComponents(newComponents);
  }

    const classD = components.filter(e => e.status).length > 0;
    const Comp = ({ match }) => {
      window.routerCallback(match);
      try {
        let index = match.params.index ? parseInt(match.params.index.unhashCode()) : 1;
        return React.createElement(screensAvailable[index - 1], { key: index, components: components, deac: deac });
      } catch(e) {
        return React.createElement(screensAvailable[0], { key: 1, components: components, deac: deac });
      }
    };

    const NoMatch = ({ location }) => (
      <div><h3>No match for <code>{location.pathname}</code></h3></div>
    );

    return (
      <div className={(classD ? "wrapper classD " : "wrapper ") }>
        <div className="container main-container">
          <div className="row">
            <div className="col col-lg-10 col-lg-push-2 col-xs-12">
              <div className="mainTitle">
                <img src="/logo03.png" alt=""/>
              </div>
              <Router forceRefresh={!supportsHistory} >
                <Switch>
                  <Route path={path} component={Comp} />
                  <Route path={"/"} component={Comp} />
                  <Route component={NoMatch} />
                </Switch>
              </Router>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  
}

