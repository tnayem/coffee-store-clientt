import React, { use } from 'react';
import { AuthContext } from '../authContext/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser } = use(AuthContext)
    const handleSignUpUser = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const phone = e.target.phone.value
        const userInfo = { name, phone }
        console.log(userInfo);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                fetch('http://localhost:3000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.acknowledged) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your Account is created",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div className='flex min-h-screen justify-center items-center'>
            <form onSubmit={handleSignUpUser} className="fieldset bg-base-200 border-base-300 rounded-box w-5/12 border p-4 mx-auto py-5">
                <legend className="fieldset-legend font-bold text-center text-2xl">Sign UP</legend>

                <label className="label">Name</label>
                <input type="text" name='name' className="input w-full" placeholder="Name" />
                <label className="label">Phone Number</label>
                <input type="text" name='phone' className="input w-full" placeholder="Phone Number" />
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