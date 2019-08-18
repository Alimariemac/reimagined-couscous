import React, {Component} from "react"
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@alimariemac/test-p5js";

const mountId = 'observable-mount';

class ImportedNotebook extends Component {
  animationRef = React.createRef();

   componentDidMount() {
     const runtime = new Runtime();
     runtime.module(notebook, name => {
       if (name === "animation") {
         return new Inspector(this.animationRef.current);
       }
     });
   }

   render() {
     return (
       <div className="App">
         <div ref={this.animationRef}></div>
       </div>
     );
   }
 }
export default ImportedNotebook;
