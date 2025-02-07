import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    let { userid } = useParams();
    let [title, pickTitle] = useState("");
    let [content, pickContent] = useState("");
    let [date, pickDate] = useState("");

    const getuserinfo = () => {
        let url = "https://note-management-system-backend-okgy.onrender.com/note/" + userid;
        fetch(url)
            .then(response => response.json())
            .then(empinfo => {
                pickTitle(empinfo.title);
                pickContent(empinfo.content);
                pickDate(empinfo.date);
            });
    };

    useEffect(() => {
        getuserinfo();
    }, []);

    const back = () => {
        window.location.href = "#/";
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center text-primary mb-3">Note Details</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Title:</label>
                        <input type="text" className="form-control" value={title} disabled />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Content:</label>
                        <textarea className="form-control" value={content} disabled></textarea>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Last Modified:</label>
                        <div className="form-control bg-light">{date}</div>
                    </div>

                    <button className="btn btn-primary w-100" onClick={back}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;


// import  {useState, useEffect} from 'react';
// import { useParams } from 'react-router-dom';


// const Details = () =>{
//     let{userid} = useParams();
//     // it use to capture value from browser url in react
//     let[title, pickTitle] = useState("");
//     let[content, pickcontent] = useState("");
//     let[date, pickdate] = useState("");
   

//     const getuserinfo = () =>{
//         let url = "https://note-management-system-backend-okgy.onrender.com/note/"+userid;
//         fetch(url)
//         .then(response => response.json())
//         .then(empinfo =>{
//             pickTitle(empinfo.title);
//             pickcontent(empinfo.content);
//             pickdate(empinfo.date);
//         })
//     }

//      useEffect(() =>{
//         getuserinfo();
//      },[1]);

//     const back = () =>{
//         window.location.href = "#/";
//        };
     
       

//    return(
//      <div className="container mt-4">
//         <div className="row">
//             <div className="col-lg-3"> </div>
//             <div className="col-lg-6 text-center border bg-light text-dark p-5 rounded mt-5"> 
//               <h1 className=" text-primary mb-3"> Note details </h1>

//                <table className=' table '>
//                    <thead>
//                     <tr>
//                     <th>Title:</th>
//                     <td colSpan={2}><input type="text" className="form-control" onChange={obj => pickTitle(obj.target.value)} value={title} disabled/> </td>
//                     </tr>

//                     <tr>
//                     <th>Content :</th>
//                     <td colSpan={2}><textarea className="form-control" onChange={obj=> pickcontent(obj.target.value)} value={content} disabled></textarea> </td>
//                     </tr>

//                     <tr>
//                     <th> Last modified :</th>
//                     <td colSpan={2}>{date} </td>
//                     </tr>

//                     <tr>
//                     <td colSpan={3}><button className="btn btn-danger" onClick={back}> Back </button></td>
//                     </tr>
//                    </thead>
//                </table>
//              </div> 

//              <div className="col-lg-3"> </div>
//              </div> 
//         </div>  
//    )
// }


// export default Details;
