import AddCoffee from './AddCoffee';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';

const Home = () => {
    const initialCoffees = useLoaderData()
    const [coffees,setCoffees]=useState(initialCoffees)

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    coffees?.map(coffee => <CoffeeCard coffees={coffees} setCoffees={setCoffees} key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>
            <AddCoffee></AddCoffee>
        </div>
    );
};

export default Home;