import React, {Component} from "react"
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@alimariemac/test-p5js";

const mountId = 'observable-mount';

class ImportedNotebook2 extends Component {
  animationRef = React.createRef();

   componentDidMount() {
     const runtime = new Runtime();
     runtime.module(notebook, name => {
       if (name === "animation2") {
         return new Inspector(this.animationRef.current);
       }
     });
   }

   render() {
     return (
       <div className="App2">
         <div ref={this.animationRef}></div>
       </div>
     );
   }
 }
export default ImportedNotebook2;
