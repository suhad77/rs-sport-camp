import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import Title from '../../../Title/Title';
import { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import SelectedClass from './SelectedClass';
import { Helmet } from 'react-helmet';


const SelectedClasses = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: selectedClasses = [], refetch } = useQuery(['selectedClasses'], async () => {
        const res = await axiosSecure.get(`/selectedClasses?email=${user?.email}`)
        return res.data;
    })



    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://rs-sport-camp-server-suhad77.vercel.app/selectedClasses/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(

                                'Deleted!',
                                'Your selected class has been deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>RsSportClub || Selected Classes</title>
            </Helmet>
            <Title title='My Selected Class'></Title>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-lg bg-amber-50 text-center'>
                            <th>SL No.</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClasses.map((selectedClass, i) => <SelectedClass
                                key={selectedClass._id}
                                selectedClass={selectedClass}
                                i={i}
                                handleDelete={handleDelete}
                            ></SelectedClass>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default SelectedClasses;