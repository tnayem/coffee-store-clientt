import React from 'react';

const SignUp = () => {
    return (
        <div className='flex min-h-screen justify-center items-center'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-5/12 border p-4 mx-auto py-5">
                <legend className="fieldset-legend font-bold text-center text-2xl">Sign UP</legend>

                <label className="label">Name</label>
                <input type="text" className="input w-full" placeholder="Name" />
                <label className="label">Email</label>
                <input type="email" className="input w-full" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input w-full" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Sign UP</button>
            </fieldset>
        </div>
    );
};

export default SignUp;