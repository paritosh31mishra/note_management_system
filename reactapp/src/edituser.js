import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

const Edituser = () => {
    let { userid } = useParams();
    let [title, pickTitle] = useState("");
    let [content, pickContent] = useState("");

    const getuserinfo = () => {
        let url = "https://note-management-system-backend-okgy.onrender.com/note/" + userid;
        fetch(url)
            .then(response => response.json())
            .then(empinfo => {
                pickTitle(empinfo.title);
                pickContent(empinfo.content);
            });
    };

    useEffect(() => {
        getuserinfo();
    }, []);

    const update = () => {
        let finaldata = new Date().toLocaleString();
        let userdata = {
            "title": title,
            "content": content,
            "date": finaldata,
            "id": userid
        };

        let url = "https://note-management-system-backend-okgy.onrender.com/editnote";
        let postoption = {
            headers: { 'Content-Type': 'application/json' },
            method: "PUT",
            body: JSON.stringify(userdata)
        };

        fetch(url, postoption)
            .then(response => response.json())
            .then(userinfo => {
                swal("Updated Successfully!", "", "success");
                window.location.href = "#/";
            });
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-3">Edit Note</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Title:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => pickTitle(e.target.value)}
                            value={title}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Content:</label>
                        <textarea
                            className="form-control"
                            onChange={(e) => pickContent(e.target.value)}
                            value={content}
                        ></textarea>
                    </div>

                    <button className="btn btn-primary w-100" onClick={update}>
                        Update Note
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Edituser;




// import  {useState, useEffect} from 'react';
// import { useParams } from 'react-router-dom';
// import swal from 'sweetalert';

// const Edituser = () =>{
//     let{userid} = useParams();
//     // it use to capture value from browser url in react
//     let[title, pickTitle] = useState("");
//     let[content, pickcontent] = useState("");
    
   

//     const getuserinfo = () =>{
//         let url = "https://note-management-system-backend-okgy.onrender.com/note/"+userid;
//         fetch(url)
//         .then(response => response.json())
//         .then(empinfo =>{
//             pickTitle(empinfo.title);
//             pickcontent(empinfo.content);
           
//         })
//     }

//      useEffect(() =>{
//         getuserinfo();
//      },[1]);

//     const update = () =>{
//         let finaldata = new Date().toLocaleString() ;
//        let userdata = {
//         "title": title,
//         "content": content,
//         "date": finaldata,
//         "id" : userid
//        };
     
//        let url= "https://note-management-system-backend-okgy.onrender.com/editnote";
//        let postoption= {
//         headers:{'Content-Type':'application/json'},
//         method: "PUT",
//         body: JSON.stringify(userdata)
//        }
           
//        fetch(url,postoption)
//        .then(response => response.json())
//        .then(userinfo =>{
//         swal(title+"", "Updated Successfully !!", "success");
//         window.location.href = "#/";
//        })
//     }

//    return(

//    <div className="container mt-4">
//    <div className="row">
//        <div className="col-lg-3"> </div>
//        <div className="col-lg-6 text-center border bg-light text-dark p-5 rounded mt-5"> 
//          <h1 className=" text-primary mb-3"> Edit Note Details </h1>

//           <table className=' table '>
//               <thead>
//                <tr>
//                <th>Title :</th>
//                <td colSpan={2}>  <input type="text" className="form-control" onChange={obj => pickTitle(obj.target.value)} value={title}/>   </td>
//                </tr>

//                <tr>
//                <th>Content :</th>
//                <td colSpan={2}><textarea className="form-control" onChange={obj=> pickcontent(obj.target.value)} value={content}></textarea> </td>
//                </tr>

//                <tr>
//                <td colSpan={3}><button className="btn btn-danger" onClick={update}> update note </button></td>
//                </tr>
//               </thead>
//           </table>
//         </div> 

//         <div className="col-lg-3"> </div>
//         </div> 
//    </div>  
// )
// }


// export default Edituser;
