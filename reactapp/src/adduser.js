import {useState} from 'react';
import swal from 'sweetalert';

const Adduser = () =>{
let [notetitle, pickTitle] = useState("");
let [notecontent, pickcontent] = useState("");


const validate = () => {
    let status = true;

   //title check
    if(notetitle == "") {
    status = false;
      document.getElementById("titleerror").innerText =
        "Please fill title field ! ";
    } else {
      document.getElementById("titleerror").innerText = "";
    }


       //contentcheck
       if(notecontent.length < 50) {
          status = false;
            document.getElementById("contenterror").innerText =
              "Please fill content field ! ";
          } else {
            document.getElementById("contenterror").innerText = "";
          }

    if(status) {Add();}
   
  };

   const Add = () => {
    let url = "http://localhost:4444/addnote";
    let finaldata =  new Date().toLocaleString() ;
    let notedata = 
    {
       title: notetitle,
       content : notecontent,
       date: finaldata
    } 

    let postdata = 
    {
     headers : {'Content-type' : 'application/json'},
     method: "POST",
     body : JSON.stringify(notedata)
    }

    fetch(url, postdata)
    .then(responsedata => responsedata.json())
    .then(data => {
     swal("Note Added Successfully !!", "", "success");
     window.location.href = "http://localhost:3000/#/";
   })
}

    return (
    <div className="container mt-4">
    <div className="row">
        <div className="col-lg-3"> </div>
        <div className="col-lg-6 text-center border bg-light text-dark p-5 rounded mt-5"> 
          <h1 className=" text-primary mb-3"> Add Note </h1>

           <table className=' table '>
               <thead>
                <tr >
                <th>Note title :</th>
                <td colSpan={2} className='text-center'> <input type="text" placeholder="Enter Note title" className="form-control" value={notetitle} onChange={obj=> pickTitle(obj.target.value)}/>  </td>
                </tr>
                <i id='titleerror' className='error'></i>

                <tr>
                <th>Note content :</th>
                <td colSpan={2}> 
                <textarea className="form-control" placeholder="Enter Note content in more than 50 characters" value={notecontent} onChange={obj=> pickcontent(obj.target.value)}></textarea> </td>
                </tr>
                <i id='contenterror' className='error'></i>

                <tr className='mb-3'>
                <td colSpan={3}> <button className="btn btn-danger" onClick={validate}>Add</button></td>
                </tr>
               </thead>
           </table>
         </div> 

         <div className="col-lg-3"> </div>
         </div> 
    </div>  
    )
}

export default Adduser;