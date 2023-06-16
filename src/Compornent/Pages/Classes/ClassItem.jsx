import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useInstructor from '../../Hooks/useInstructor';

const ClassItem = ({ cls }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const [axiosSecure] = useAxiosSecure();
    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ['selectedClasses'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectedClasses?email=${user?.email}`);
            return res.data;
        }

    });

    console.log(selectedClasses);

    const { _id, className, classImage, instructorName, availableSeats, price } = cls;

    const alreadyExist = selectedClasses.find(selectedClass => selectedClass.classId === cls._id);

    const handleSelectedClass = (_id) => {

        if (!user) {
            Navigate('/login')
            return;
        }

        let email = user?.email;
        const selectedClass = { classId: _id, email, classImage, className, instructorName, availableSeats, price }

        fetch('http://localhost:5000/selectedClasses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(selectedClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class successfully selected.',
                    showConfirmButton: false,
                    timer: 2500
                });
                refetch();
            })
    }


    return (

        <div className={availableSeats === 0 ? 'card card-compact w-[90%] h-[420px] bg-red-400 shadow-xl mx-auto' : 'card card-compact w-[80%] h-[420px] bg-base-100 shadow-xl mx-auto'}>
            <figure><img src={classImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p><strong>Instructor Name:</strong> {instructorName}</p>
                <p><strong>Available Seats:</strong> {availableSeats}</p>
                <p><strong>Price:</strong> ${price}</p>
                <div className="">
                    {
                        (availableSeats === 0 || isAdmin || isInstructor || alreadyExist) ? <button className='btn btn-neutral border-none' disabled>Select</button> : <button onClick={() => handleSelectedClass(_id)} className='btn btn-neutral border-none'>Select</button>
                    }
                </div>
            </div>
        </div>

    );
};

export default ClassItem;