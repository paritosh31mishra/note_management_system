import {useState, useEffect } from 'react';
import React from 'react';
import {  Link} from "react-router-dom";

const Userlist = () =>{
    let [notelist, picklist] = useState([]);
     let [keyword, updatekeyword] = useState("");



    const getusers = () =>{
        let url = "https://note-management-system-backend-okgy.onrender.com/retrievenote";
        fetch(url)
        .then(responsedata => responsedata.json())
        .then(data => {    
            if(data.length == 0)
              {
                document.getElementById("message").innerHTML = "<h1>No Data Found !! </h1>";
              }
              else{
                const sortedData = () =>{
                     data.sort((a,b)=> new Date(b.date) - new Date(a.date));
                     picklist(data);
                 }
                 sortedData();
              }
        })
     }

     const deletenote = (id) =>{
            let url = "https://note-management-system-backend-okgy.onrender.com/deletenote/"+id;
            let postoption = {method: "DELETE"};
            fetch(url, postoption)
            .then(response => response.json())
            .then(Array =>{
               alert(Array.message);
               window.location.reload();
                 })    
     }

    
     

    useEffect(()=>{
        getusers();

    },[1])

    return(  
    <div className='container mt-4'>
      <div className="row mb-4">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
               <input type="text" className="form-control" placeholder="Search" onChange={obj=> updatekeyword(obj.target.value)}/>
          </div>
          <div className="col-lg-3"></div>
        </div>

    <div className="row text-center" id="message">
        <div className='col-lg-12'>
            <table className='table mt-4 table-hover table-bordered rounded'>
               <thead>
                <tr>
                    <th>  S.No. </th>
                    <th>  Title </th>
                    <th>  Content </th>
                    <th> Delete </th>
                    <th> Edit </th>
                    <th> View </th>
                    <th>Last modified</th>
                </tr>
               </thead>
               <tbody>
                {
                     notelist.map((user, index) =>{     
                    if(user.title.toLowerCase().includes(keyword.toLowerCase()))
                    {
                        return(
                            <tr key={index} >
                               <td> {++index} </td>
                               <td> {user.title} </td>
                               <td> {user.content.substring(0,10) + "..."} </td>
                               <td>  <i className="fa fa-trash text-dark  m-2" onClick={deletenote.bind(this, user._id)}></i> </td>
                               <td>   <Link to={`/edituser/${user._id}`}> <i className='fa fa-pencil text-dark '></i> </Link> </td>
                               <td>   <Link to={`/details/${user._id}`} className='text-info'> <b>view details</b></Link> </td>
                                <td className="mb-3 text-secondary font-italic">  {user.date} </td>
                            </tr>



                        )
                     }
                  })
                }
               </tbody>
            </table>
        </div>

    </div>
</div>
    )
}

export default Userlist;
