import {useState} from "react";
import Header from "./Header"
const Login = () => {
    const[isSignin,setIssignin] = useState(true);
    const toggleSignInForm = () => {
       setIssignin(!isSignin);
    }
    return(
        <div>
            <Header />
            <div className="absolute" >
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg" alt="background-image" />
            </div>
            <form className=" w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-black text-white">
                <h1 className="text-3xl font-bold py-4">{isSignin ? "Sign In" : "Sign Up"}</h1>
                {!isSignin && <input type="box" placeholder="Full Name" className="p-4 my-4  w-full bg-gray-800 " />}
                <input type="box" placeholder="Email Address" className="p-4 my-4  w-full bg-gray-800 " />
                <input type="box" placeholder="Password" className="p-4 my-4  w-full bg-gray-800 " />
                <button className="p-4 my-6 w-full bg-red-700">{isSignin ? "Sign In" : "Sign Up"}</button>
                <p className="cursor-pointer" onClick={toggleSignInForm}>{isSignin ? "New to Netflix ? Sign Up" : "Already a user"}</p>
            </form>
        </div>
       
      
    )

}
export default Login;
