// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React, { useRef } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";

class ComponentToPrint extends React.Component {
  render() {
    return (
      <>
        <div className="container mt-1" >
          <div className="row m-2 mt-4" style={{ border: "3px solid gray" }}>
            <div className="col-3 ">
              <div className="main mt-5">
                <img src="https://media.istockphoto.com/photos/handcuffs-and-fingerprints-picture-id156001749?b=1&k=20&m=156001749&s=170667a&w=0&h=8zTxvA7M5NKCZ32Jw90ohnDi-xJIAnyJiqfMI_cPzoc=" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-8 mt-5 py-3">
              <div className="main">
                <h4>Archonix Police Department test</h4>
                <p>30lake center Executive park</p>
                <p>marlton,Ny08053</p>
                <p>Ph:44458582255 <span>fax;556565665</span></p>
              </div>
            </div>
            <div className="col-12">
              <hr style={{ border: "2px solid rgb(3, 105, 184)" }} />
            </div>
            <div className="container">
              <table className="table table-bordered">
                {/* <h2 className="text-center">Daily Event Log</h2>
              <p className="text-center text-white" style={{backgroundColor: "gray"}}>September 1,2014 to September 23, 2014</p> */}
                <thead>
                  <tr>
                    <th >Incident</th>
                    <th >description</th>
                    <th >reported date & time</th>
                    <th >status</th>
                    <th>location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>14-5565665</td>
                    <td>murder-knife</td>
                    <td>09-09-2022</td>
                    <td>&nbsp;</td>
                    <td>ford leondard tower</td>
                  </tr>

                  <tr>
                    <td>14-5565665</td>
                    <td>murder-knife</td>
                    <td>09-09-2022</td>
                    <td>&nbsp;</td>
                    <td>ford leondard tower</td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th >Incident</th>
                    <th >description</th>
                    <th >reported date & time</th>
                    <th >status</th>
                    <th>location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>14-5565665</td>
                    <td>murder-knife</td>
                    <td>09-09-2022</td>
                    <td>&nbsp;</td>
                    <td>ford leondard tower</td>
                  </tr>

                  <tr>
                    <td>14-5565665</td>
                    <td>murder-knife</td>
                    <td>09-09-2022</td>
                    <td>&nbsp;</td>
                    <td>ford leondard tower</td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>
        </div>
      </>
    );
  }
}

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

render(<Example />, document.querySelector("#root"));
