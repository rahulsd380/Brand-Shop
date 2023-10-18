import { useContext } from "react";
// import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Signin = () => {
    const {signIn} = useContext(AuthContext)

    const handleSignin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            console.log(result);
        })
        .then(error => {
            console.log(error);
        })
        
    }
    return (
        <div>
            <div>
             <div className="max-w-6xl mx-auto mt-10">
            </div>
            
            <div className="px-10 py-10 md:px-96 md:py-20">
            <div className="bg-slate-200 p-10 rounded-md">
                <h1 className="font-bold text-3xl mb-10 text-center">Login Your Account</h1>
                <form onSubmit={handleSignin}>
                <div>
                    <p className="font-semibold mb-3">Email Address</p>
                    <input className="p-2 rounded-md mb-3 w-full" type="email" name="email" placeholder="Enter your email address" />
                </div>
                <div>
                    <p className="font-semibold mb-3">Password</p>
                    <input className="p-2 rounded-md mb-8 w-full" type="password" name="password" placeholder="Enter your email password" />
                </div>
                <button className="bg-slate-900 p-3 rounded-md text-white w-full">Login</button>
                </form>
                
            </div>
        </div>
        </div>
        </div>
    );
};

export default Signin;