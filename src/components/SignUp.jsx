import React, { use } from 'react';
import { AuthContext } from '../authContext/AuthContext';

const SignUp = () => {
    const {createUser}= use(AuthContext)
    const handleSignUpUser =(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error.message);
        })

    }
    return (
        <div className='flex min-h-screen justify-center items-center'>
            <form onSubmit={handleSignUpUser} className="fieldset bg-base-200 border-base-300 rounded-box w-5/12 border p-4 mx-auto py-5">
                <legend className="fieldset-legend font-bold text-center text-2xl">Sign UP</legend>

                <label className="label">Name</label>
                <input type="text" className="input w-full" placeholder="Name" />
                <label className="label">Email</label>
                <input type="email" name='email' className="input w-full" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" name='password' className="input w-full" placeholder="Password" />

                <button type='submit' className="btn btn-neutral mt-4">Sign UP</button>
            </form>
        </div>
    );
};

export default SignUp;