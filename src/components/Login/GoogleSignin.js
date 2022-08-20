import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import img from '../../img/google img.png'
import auth from '../../firebase.init';


const GoogleSignin = () => {
     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
     const navigate = useNavigate()

     
     const location = useLocation();
      let from = location.state?.from?.pathname || "/";

      if (user) {
        navigate(from, { replace: true });
      }
     
     useEffect(() => {
          if (error) {
            toast(error?.message);
          }
        }, [error]);
     return (
       <div className="grid sm:grid-cols-1 gap-10 justify-center items-center">
         <div className="hero min-h-screen bg-base-200">
           <div className="hero-content flex-col lg:flex-row-reverse">
             <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <div className="card-body">
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Email</span>
                   </label>
                   <input
                     type="text"
                     placeholder="email"
                     className="input input-bordered"
                   />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Password</span>
                   </label>
                   <input
                     type="text"
                     placeholder="password"
                     className="input input-bordered"
                   />
                   <label className="label">
                     <a href="#" className="label-text-alt link link-hover">
                       Forgot password?
                     </a>
                   </label>
                 </div>
                 <div className="form-control mt-6">
                   <button className="btn btn-primary">Login</button>
                 </div>
                 <button
                   onClick={() => signInWithGoogle()}
                   className="btn btn-outline btn-accent"
                 >
                   Continue with Google
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>
     );
};

export default GoogleSignin;



