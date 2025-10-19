import React from 'react';
import { FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router';
import Swal from 'sweetalert2';
// taste, category, details,

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { coffeeName, chef, supplier, _id } = coffee;
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed);
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffees/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remainingCoffes = coffees.filter(singleCoffe => singleCoffe._id != id)
                            setCoffees(remainingCoffes)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })

            }
        });
    }
    return (
        <div className="card card-side bg-base-100 shadow-sm border-2">
            <figure>
                <img
                    src={coffee.Photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-around w-full items-center">
                <div className='space-y-1'>
                    <p>{coffeeName}</p>
                    <p>{chef}</p>
                    <p>{supplier}</p>
                </div>
                <div className="join join-vertical space-y-4">
                    <button className="btn join-item text-xl bg-[#D2B48C]"><FaEye /></button>
                    <Link to={`/update/${_id}`}><button className="btn join-item text-xl bg-[#3C393B]">{<MdEdit />}</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn join-item text-xl bg-[#EA4744]"><MdDeleteForever /></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;