import React from 'react';

const Login = () => {
    return (
        <div className='flex min-h-screen justify-center items-center'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-5/12 border p-4 mx-auto py-5">
                <legend className="fieldset-legend font-bold text-center text-2xl">Login</legend>
                <label className="label">Email</label>
                <input type="email" className="input w-full" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input w-full" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
        </div>
    );
};

export default Login;