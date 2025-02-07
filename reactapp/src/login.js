import swal from "sweetalert";
import { useState } from "react";

const Mylogin = () => {
  const [useremail, pickemail] = useState("");
  const [password, pickpassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    let url = "https://note-management-system-backend-okgy.onrender.com/account";
    let flag = 0;
    fetch(url)
      .then((response) => response.json())
      .then((userinfo) => {
        userinfo.map((acntdata) => {
          if (acntdata.email === useremail && acntdata.password === password) {
            flag = 1;
            localStorage.setItem("fullname", acntdata.name);
            window.location.href = "https://note-management-system-yrlw.onrender.com/#/";
            window.location.reload();
          }
        });
        if (flag === 0) {
          swal("Error", "Invalid credentials or user does not exist!", "warning");
        }
      })
      .finally(() => setLoading(false));
  };

  const validateForm = () => {
    let isValid = true;

    if (!useremail.trim()) {
      setEmailError("Please enter your email!");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Please enter your password!");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      login();
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center pt-4">
      <div className="col-lg-5 border rounded shadow-lg p-4 bg-white">
        <h3 className="text-center mb-4 text-primary">User Login</h3>
        
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className={`form-control ${emailError ? "border-danger" : ""}`}
            value={useremail}
            onChange={(e) => pickemail(e.target.value)}
          />
          {emailError && <small className="text-danger">{emailError}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${passwordError ? "border-danger" : ""}`}
            value={password}
            onChange={(e) => pickpassword(e.target.value)}
          />
          {passwordError && <small className="text-danger">{passwordError}</small>}
        </div>

        <div className="text-center">
          <button className="btn btn-primary w-100" onClick={validateForm} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mylogin;

// import swal from "sweetalert";
// import {useState} from 'react';

// const Mylogin = () =>{
//   let[useremail, pickemail] = useState("");
//   let[password, pickpassword] = useState("");


//   const login = () =>{
//      let url = "https://note-management-system-backend-okgy.onrender.com/account";
//      let flag = 0;
//      fetch(url)
//      .then(response => response.json())
//      .then(userinfo => {
//         userinfo.map((acntdata, index) =>{
//             if(acntdata.email === useremail && acntdata.password === password)
//              {
//                 flag = 1;
//                 localStorage.setItem("fullname", acntdata.name);
//                 window.location.href="https://note-management-system-yrlw.onrender.com/#/"
//               window.location.reload();// Reload the page(app.js) after login is success
//              }
//         })
//         if(flag === 0)
//         swal("Error", "invalid Or Not Exists", "warning");
//      })
//   }

//   const validation = () => {
//     let status = true;
//     // emailcheck
//     if (useremail == "") {
//     status = false;
//       document.getElementById("emailerror").innerText =
//         "Please fill email field ! ";
//     } else {
//       document.getElementById("emailerror").innerText = "";
//     }


//     // passwordcheck
   
//     if (password == "") {
//        status = false;
//          document.getElementById("passworderror").innerText =
//            "Please fill password field ! ";
//        } else {
//          document.getElementById("passworderror").innerText = "";
//        }

//     if(status) {login()}
//   };

 
//   return(
//      <div className="container mt-5">
//         <div className="row">
//             <div className="col-lg-3"></div>
//             <div className="col-lg-6 border rounded shadow bg-dark text-white  p-3">
//                 <div className="border p-4 ">
//                     <h3 className="text-center"> {console.log("paritosh")} User Login </h3>
//                     <div className="mb-4">
//                         <label>Email id</label>
//                         <input type="email"  className="form-control"  value={useremail} onChange={obj=> pickemail(obj.target.value)}/> 
//                         <i className="error " id="emailerror"></i>
//                     </div>

//                     <div className="mb-3">
//                         <label>Password</label>
//                         <input type="password" className="form-control"  value={password} onChange={obj=> pickpassword(obj.target.value)}/>
//                         <i className="error " id="passworderror"></i>
//                     </div>

//                     <div className="text-center">
//                         <button className="btn btn-info" onClick={validation}>Login</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//      </div>
//   )
// }

// export default Mylogin;
