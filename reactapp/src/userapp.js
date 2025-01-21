import {Link} from "react-router-dom";


const UserModule = () => {
  

  return (
      <section className=" p-3 sticky" id="navbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <h2> Notes Management system </h2> 
                    </div>

                    <div className="col-lg-6 text-end">
                        <ul>
                  <li>  <Link className="  text-light " to="/" ><i className='fa fa-user-plus'></i> Create Account</Link></li>
                  
                  <li>   <Link className="text-light " to="/login"> <i className='fa fa-lock'></i> Login</Link></li>
                    </ul>
                </div>
            </div>
            </div>
        </section>
    
  
  );
};

export default UserModule;
