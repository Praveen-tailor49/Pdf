import React from 'react';
import Pdf from "react-to-pdf";
import '../App.css'

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      {/* <div className="Post" ref={ref}>
        <h1>{props.title}</h1>
        <img src={props.image} alt={props.title} />
        <p>{props.content}</p>
        <p>praveen</p>
      </div> */}
      <div class="Post container" ref={ref}>
        <div class="row" style={{border: "3px solid gray"}}>
          <div class="col-3 ">
            <div class="main">
              <img src="/asset/img/1image.jpg" class="img-fluid" alt="" />
            </div>
          </div>
          <div class="col-8 mt-5 py-3">
            <div class="main">
              <h4>Archonix Police Department test</h4>
              <p>30lake center Executive park</p>
              <p>marlton,Ny08053</p>
              <p>Ph:44458582255 <span>fax;556565665</span></p>
            </div>
          </div>
          <div class="col-12">
            <hr style={{ border:"2px solid rgb(3, 105, 184)"}} />
          </div>
          <div class="container">
            <table class="table table-bordered">
              <h2 class="text-center">Daily Event Log</h2>
              <p class="text-center text-white" style={{backgroundColor: "gray"}}>September 1,2014 to September 23, 2014</p>
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

            <table class="table table-bordered">

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
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;