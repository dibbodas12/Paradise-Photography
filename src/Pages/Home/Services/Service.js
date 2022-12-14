import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';


const Service = () => {
    const [services,setServices] = useState([])
    
    useEffect(()=>{
        fetch("https://picture-perfect-server.vercel.app/home")
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='mt-6'>
            <h2 className='text-2xl text-center text-primary font-bold py-16'>Services with Grid View</h2>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <ServiceCard key={service._id}
                    service={service}
                    >
                    </ServiceCard>)
                }
                
            </div>
            <div className='text-center my-10 py-6'>
            <Link to='/services'><button className="btn btn-outline btn-primary">See All</button></Link>
            </div>
        </div>
    );
};

export default Service;