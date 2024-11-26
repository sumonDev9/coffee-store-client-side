
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loaderdcoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loaderdcoffees);

  return (
    <>
      <div className='w-11/12 mx-auto'>
      <h1 className='text-4xl py-5 text-center text-red'>Hot Cold coffee: {coffees.length}</h1>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pb-10'>
      {
        coffees.map(coffee => 
        <CoffeeCard
        key={coffee._id} 
        coffees={coffees}
        setCoffees={setCoffees}
        coffee={coffee}></CoffeeCard>)
      }
     </div>
      </div>
    </>
  )
}

export default App
