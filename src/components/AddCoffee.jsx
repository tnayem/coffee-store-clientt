import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleCoffeeSubmit = (e) => {
        e.preventDefault()
        const coffeeName = e.target.coffeeName.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const Photo = e.target.Photo.value;
        const coffeeInfo = { coffeeName, chef, supplier, taste, category, details, Photo }
        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(coffeeInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: "Add Coffee Successfully",
                    icon: "success",
                    draggable: true
                });
            })

    }
    return (
        <div className='bg-base-200'>
            <h2 className='text-2xl font-bold text-center py-5'>Add New Coffee</h2>
            <p className='w-9/12 mx-auto text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <Link to='/' className='btn'>Back to home</Link>
            <form onSubmit={handleCoffeeSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label">Name</label>
                        <input type="text" name='coffeeName' className="input w-full" placeholder="Enter coffee name" />
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label">Chef</label>
                        <input type="text" name='chef' className="input w-full" placeholder="Enter Chef name" />
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label">Supplier</label>
                        <input type="text" name='supplier' className="input w-full" placeholder="Enter Supplier name" />
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label">Taste</label>
                        <input type="text" name='taste' className="input w-full" placeholder="Enter Taste name" />
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label">Category</label>
                        <input type="text" name='category' className="input w-full" placeholder="Enter Category name" />
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label">Details</label>
                        <input type="text" name='details' className="input w-full" placeholder="Enter coffee Details" />
                    </fieldset>
                </div>
                <fieldset className="fieldset rounded-box p-4">
                    <label className="label">Photo</label>
                    <input type="text" name='Photo' className="input w-full" placeholder="Enter photo url" />
                </fieldset>
                <fieldset className="fieldset rounded-box p-4">
                    <input className='btn w-full bg-gray-300' type="submit" value="Add Coffee" />
                </fieldset>
            </form>
        </div>
    );
};

export default AddCoffee;