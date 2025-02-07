import { useState } from "react";
import swal from "sweetalert";

const MyRegister = () => {
  let [name, pickname] = useState("");
  let [mobile, pickmobile] = useState("");
  let [email, pickemail] = useState("");
  let [password, pickpassword] = useState("");
  let [gender, pickgender] = useState("");
  let [city, pickcity] = useState("");
  let [keyword, pickstate] = useState("");
  let [source, picksource] = useState("");

  const save = () => {
    let url = "https://note-management-system-backend-okgy.onrender.com/account";
    let userdata = {
      uname: name,
      umobile: mobile,
      uemail: email,
      upassword: password,
      ugender: gender,
      ucity: city,
      ustate: keyword,
      usource: source,
    };

    let postdata = {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(userdata),
    };

    fetch(url, postdata)
      .then((responsedata) => responsedata.json())
      .then((data) => {
        swal("Account Created Successfully!", "", "success");
        window.location.href = "https://github.com/paritosh31mishra/note_management_system/#/login";
      });
  };

  const validate = () => {
    if (!name || !email || !password || !mobile || !source || !gender || !city || !keyword) {
      swal("Please fill all fields!", "", "warning");
    } else {
      save();
    }
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow-lg p-4" style={{ maxWidth: "500px", width: "100%", borderRadius: "15px" }}>
        <h2 className="text-center mb-4 text-primary">Create New Account</h2>

        <div className="mb-3">
          <label className="form-label">User's Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" onChange={(obj) => pickname(obj.target.value)} value={name} />
        </div>

        <div className="mb-3">
          <label className="form-label">User's Email</label>
          <input type="email" className="form-control" placeholder="Enter your email" onChange={(obj) => pickemail(obj.target.value)} value={email} />
        </div>

        <div className="mb-3">
          <label className="form-label">User's Phone</label>
          <input type="number" className="form-control" placeholder="Enter your phone number" onChange={(obj) => pickmobile(obj.target.value)} value={mobile} />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Enter your password" onChange={(obj) => pickpassword(obj.target.value)} value={password} />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div className="d-flex">
            <input type="radio" name="gender" value="Male" onChange={(obj) => pickgender(obj.target.value)} /> Male &nbsp;
            <input type="radio" name="gender" value="Female" onChange={(obj) => pickgender(obj.target.value)} /> Female &nbsp;
            <input type="radio" name="gender" value="Other" onChange={(obj) => pickgender(obj.target.value)} /> Other
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">How did you hear about us?</label>
          <select className="form-select" onChange={(obj) => picksource(obj.target.value)} value={source}>
            <option value="">Select one</option>
            <option value="Linkedin">LinkedIn</option>
            <option value="Friends">Friends</option>
            <option value="Job Portal">Job Portal</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <select className="form-select" onChange={(obj) => pickcity(obj.target.value)} value={city}>
            <option value="">Select City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">State</label>
          <select className="form-select" onChange={(obj) => pickstate(obj.target.value)} value={keyword}>
            <option value="">Select State</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Delhi">Delhi</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
          </select>
        </div>

        <button className="btn btn-primary w-100 mt-3" onClick={validate}>Register</button>
      </div>
    </div>
  );
};

export default MyRegister;


// import {useState} from 'react';
// import swal from "sweetalert";
// const Myregister = () =>{

//     let [name, pickname] = useState("");
//     let [mobile, pickmobile] = useState("");
//     let [email, pickemail] = useState("");
//     let [password, pickpassword] = useState("");
//     let [gender, pickgender] = useState("");
//     let [city, pickcity] = useState("");
//     let [keyword, pickstate] = useState("");
//     let [source, picksource] = useState("");
//     let [visibility, pickvisibility] = useState("none");
//     //let [isChecked, setIsChecked] = useState(false);
   
    
   

//     const save = () =>{

//        let url = "https://note-management-system-backend-okgy.onrender.com/account";
//        let userdata = 
//        {
//           uname: name,
//           umobile : mobile,
//           uemail : email,
//           upassword : password,
//           ugender : gender,
//           ucity : city,
//           ustate : keyword,
//           usource : source
//        } 

//        let postdata = 
//        {
//         headers : {'Content-type' : 'application/json'},
//         method: "POST",
//         body : JSON.stringify(userdata)
//        }

//        fetch(url, postdata)
//        .then(responsedata => responsedata.json())
//        .then(data => {
//         swal("Account Created Successfully !!", "", "success");
//         window.location.href = "https://github.com/paritosh31mishra/note_management_system/#/login";
//        })
//     }


//     const validate = () => {
//       let status = true;

//      //name check
//       if(name == "") {
//       status = false;
//         document.getElementById("nameerror").innerText =
//           "Please fill name field ! ";
//       } else {
//         document.getElementById("nameerror").innerText = "";
//       }
  
//       // emailcheck
//       if(email == "") {
//       status = false;
//         document.getElementById("emailerror").innerText =
//           "Please fill email field ! ";
//       } else {
//         document.getElementById("emailerror").innerText = "";
//       }
  

//       // passwordcheck
//       if(password == "") {
//          status = false;
//            document.getElementById("passworderror").innerText =
//              "Please fill password field ! ";
//          } else {
//            document.getElementById("passworderror").innerText = "";
//          }
  
//          //mobilecheck
//          if(mobile == "") {
//             status = false;
//               document.getElementById("mobileerror").innerText =
//                 "Please fill mobile field ! ";
//             } else {
//               document.getElementById("mobileerror").innerText = "";
//             }
         
//          //sourcecheck
//       if(source == "") {
//          status = false;
//            document.getElementById("sourceerror").innerText =
//              "Please fill source field ! ";
//          } else {
//            document.getElementById("sourceerror").innerText = "";
//          }
     

//           //gendercheck
//       if(gender == "") {
//          status = false;
//            document.getElementById("gendererror").innerText =
//              "Please fill gender field ! ";
//          } else {
//            document.getElementById("gendererror").innerText = "";
//          }
     

//          // citycheck
//       if(city == "") {
//          status = false;
//            document.getElementById("cityerror").innerText =
//              "Please fill city field ! ";
//          } else {
//            document.getElementById("cityerror").innerText = "";
//          }
  
         
//        // statecheck
//       if(keyword == "") {
//          status = false;
//            document.getElementById("stateerror").innerText =
//              "Please fill state field ! ";
//          } else {
//            document.getElementById("stateerror").innerText = "";
//          }

      
//       if(status) {save();}
     

//     };


//     const states = [ "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
//     "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand",
//     "Uttar Pradesh",  "West Bengal",  "Andaman and Nicobar Islands", "Chandigarh",
//     "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep",     "Puducherry"]
    
    
    
//     const showlist = () =>{
//          pickvisibility((curr)=> (curr === "none" ? "block" : "none"));
//       }
    
//       const showstate = (state)=>{
//          pickvisibility((curr)=> (curr === "block" ? "none" : "block"));
//         pickstate(state);
//       }



//     return(
//                        <div className="container mt-4">
//                         <div className="row">
//                              <div className="col-lg-3"></div>
//                             <div className="col-lg-6  border bg-dark text-white p-3 rounded">
//                                     <div className="border p-4 ">
//                                      <h2 className="text-center">Create New Account</h2>
                                    
//                                     <div className='mb-3'>
//                                        <label><b>User's Name</b> </label>
//                                        <input type="text" placeholder="Enter your name"  className="form-control"  onChange={obj=> pickname(obj.target.value)} value={name}/>
//                                        <i className="error " id="nameerror"></i>
//                                        </div>

//                                        <div className='mb-3'>
//                                        <label><b>User's Email</b> </label>
//                                        <input type="email" placeholder="Enter your Email"  className="form-control" value={email} onChange={obj=>pickemail(obj.target.value)}/>
//                                        <i className="error " id="emailerror"></i>
//                                        </div>


//                                        <div className='mb-3'>
//                                        <label><b>User's Phone</b> </label>
//                                        <input type="number" placeholder="Enter your Phone no."  className="form-control" value={mobile} onChange={obj=>pickmobile(obj.target.value)}/>
//                                        <i className="error " id="mobileerror"></i>
//                                        </div>


//                                        <div className='mb-3'>
//                                        <label><b>User's Password</b> </label>
//                                        <input type="password" placeholder="Enter your Password"  className="form-control" value={password} onChange={obj=> pickpassword(obj.target.value)}/>
//                                        <i className="error " id="passworderror"></i>
//                                        </div>

//                                      <div className='mb-3'>
//                                        <label className='m-2'><b>Gender</b> </label>

//                                        <div>
//                                              <input type="radio" className='m-2' name="gender" value="Male" onChange={obj=> pickgender(obj.target.value)}/>Male
                                      

                                         
//                                           <input type="radio" className='m-2' name="gender" value="Female"  onChange={obj=> pickgender(obj.target.value)}/>Female
                                        

                                      
//                                           <input type="radio" className='m-2' name="gender" value="Other"   onChange={obj=> pickgender(obj.target.value)}/>others
//                                           </div>
//                                           <i className="error " id="gendererror"></i>
                                       
//                                     </div>

//                                     <div className='mb-3'>
//                                        <label className='m-2'><b>How did you hear about us?</b> </label>

//                                        <div>
//                                              <input type="radio" className='m-2' name="source" value="Linkedin" onChange={obj=> picksource(obj.target.value)}/>Linkedin
                                      

                                         
//                                           <input type="radio" className='m-2' name="source" value="Friends"  onChange={obj=> picksource(obj.target.value)}/>Friends
                                        

                                      
//                                           <input type="radio" className='m-2' name="source" value="Job Portal"   onChange={obj=> picksource(obj.target.value)}/>Job Portal

//                                           <input type="radio" className='m-2' name="source" value="Others"   onChange={obj=> picksource(obj.target.value)}/>others
//                                        </div>
//                                        <i className="error " id="sourceerror"></i>
//                                     </div>

                                 
//                                      <div className='mb-3'>
//                                     <label className='m-2'><b>City </b> </label>
//                                     <select type="search"
//                                        className="form-control"
//                                        onChange={(obj) => pickcity(obj.target.value)}
//                                        value={city}
//                                        >
//                                        <option value=""> select one </option>
//                                        <option value="Mumbai">Mumbai </option>
//                                        <option value="Pune">Pune</option>
//                                        <option value="Ahemdabad">Ahemdabad</option>
//                                     </select>
//                                     <i className="error " id="cityerror"></i>
//                                     </div>

//                                     <div className='mb-3'>
//                                     <label className='m-2'><b>State </b> </label>
//                                     <input type="text" id="search-box" className="form-control"
//                                        onChange={(obj) => pickstate(obj.target.value)} placeholder='Type state name ...' onKeyUp={showlist} value={keyword} />

//                                        <div className='result-box'>
//                                           <ul style={{display: visibility}} >
//                                         {
//                                           states.map((state, index) => {
//                                         if(state.toLowerCase().includes(keyword.toLowerCase()))
//                                        {
//                                          return(
//                                          <div onClick={()=> showstate(state)} key={index} value={state} id="statelist"> {state} </div>
//                                               )
//                                        }
//                                        })
//                                     }
//                                           </ul>
//                                       </div>
//                                       <i className="error " id="stateerror"></i>
//                                     </div>

//                                      <div className="text-center mt-3"> <button className="btn btn-info" onClick={validate}> Save</button></div>
//                                       </div>
//                             </div>
//                             <div className="col-lg-3"></div>
//                          </div>
//                       </div>
//     )
// }



// export default Myregister;
