import React from 'react';
import AddCoffee from './AddCoffee';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const coffees = useLoaderData()
    console.log(coffees);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>
            <AddCoffee></AddCoffee>
        </div>
    );
};

export default Home;