import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './../AuthProvider/AuthProvider';


const Signup = () => {
    const {signUp} = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
        
        signUp(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div>
                   <div>
            <div className="max-w-6xl mx-auto mt-10">
            </div>
            
            <div className="px-10 py-10 md:px-96 md:py-20">
            <div className="bg-slate-200 p-10 rounded-md">
                <h1 className="font-bold text-3xl mb-10 text-center">Register Your Account</h1>
                <form onSubmit={handleSignUp}>
                <div>
                    <p className="font-semibold mb-3">Your Name</p>
                    <input className="p-2 rounded-md mb-3 w-full" type="text" name="name" placeholder="Enter your full name" />
                </div>
                <div>
                    <p className="font-semibold mb-3">Photo URL</p>
                    <input className="p-2 rounded-md mb-3 w-full" type="text" name="photo" placeholder="Enter your pgoto url" />
                </div>
                <div>
                    <p className="font-semibold mb-3">Email Address</p>
                    <input className="p-2 rounded-md mb-3 w-full" type="email" name="email" placeholder="Enter your email address" />
                </div>
                <div>
                    <p className="font-semibold mb-3">Password</p>
                    <input className="p-2 rounded-md mb-8 w-full" type="password" name="password" placeholder="Enter your email password" />
                </div>
                <button className="bg-slate-900 p-3 rounded-md text-white w-full">Register</button>
                </form>
                <p className="text-center mt-4">Already Have An Account ? <Link to={"/signin"} className="text-[#D72050] font-semibold">Signin</Link></p>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Signup;