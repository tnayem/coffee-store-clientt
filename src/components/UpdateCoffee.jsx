import React from 'react';
import { Link, useLoaderData } from 'react-router';

const UpdateCoffee = () => {
    const singleCoffee = useLoaderData()
    const { coffeeName, chef, supplier, _id, taste, category, details, Photo } = singleCoffee;
    console.log(singleCoffee);
    const handleUpdateCoffee = (e) => {
        e.preventDefault()
        const coffeeName = e.target.coffeeName.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const Photo = e.target.Photo.value;
        const updateCoffeeInfo = { coffeeName, chef, supplier, taste, category, details, Photo }
        fetch(`http://localhost:3000/coffees/${_id}`,{
            method:'PUT',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updateCoffeeInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <div className='bg-base-200'>
            <h2 className='text-2xl font-bold text-center py-5'>Update Coffee</h2>
            <Link to='/' className='btn'>Back to home</Link>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label">Name</label>
                        <input defaultValue={coffeeName} type="text" name='coffeeName' className="input w-full" placeholder="Enter coffee name" />
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label">Chef</label>
                        <input defaultValue={chef} type="text" name='chef' className="input w-full" placeholder="Enter Chef name" />
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label">Supplier</label>
                        <input defaultValue={supplier} type="text" name='supplier' className="input w-full" placeholder="Enter Supplier name" />
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label">Taste</label>
                        <input defaultValue={taste} type="text" name='taste' className="input w-full" placeholder="Enter Taste name" />
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label">Category</label>
                        <input defaultValue={category} type="text" name='category' className="input w-full" placeholder="Enter Category name" />
                    </fieldset>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label">Details</label>
                        <input defaultValue={details} type="text" name='details' className="input w-full" placeholder="Enter coffee Details" />
                    </fieldset>
                </div>
                <fieldset className="fieldset rounded-box p-4">
                    <label className="label">Photo</label>
                    <input defaultValue={Photo} type="text" name='Photo' className="input w-full" placeholder="Enter photo url" />
                </fieldset>
                <fieldset className="fieldset rounded-box p-4">
                    <input className='btn w-full bg-gray-300' type="submit" value="Update Coffee" />
                </fieldset>
            </form>
        </div>
    );
};

export default UpdateCoffee;