import React from 'react';
import { FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
    const { coffeeName, chef, supplier, taste, category, details, Photo } = coffee;
    return (
        <div className="card card-side bg-base-100 shadow-sm border-2">
            <figure>
                <img
                    src={Photo}
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
                    <button className="btn join-item text-xl bg-[#3C393B]">{<MdEdit />}</button>
                    <button className="btn join-item text-xl bg-[#EA4744]"><MdDeleteForever /></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;