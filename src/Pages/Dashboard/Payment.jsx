import React from 'react'
import { useParams } from 'react-router'
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Payment = () => {

    const { parcelId } = useParams();
    const axiosSecure = UseAxiosSecure();

    const { isLoading, data: parcel } = useQuery({
        queryKey: ['parcel', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`);
            return res.data;
        }
    })
    if (isLoading) {
        return <div className='text-center mt-5 '>
            <span className="loading loading-infinity loading-xl"></span>
        </div>
    }

    return (
        <div>
            <h3>please pay: {parcel.
                parcelName}</h3>
            <button className='btn btn-primary
         text-black'>Pay</button>
        </div>
    )
}

export default Payment;