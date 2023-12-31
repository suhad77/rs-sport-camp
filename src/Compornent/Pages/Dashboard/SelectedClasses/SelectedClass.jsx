import  { useState } from 'react';
import { Link } from 'react-router-dom';
import Payment from '../Payment/Payment';


const SelectedClass = ({ selectedClass, i, handleDelete }) => {
    const { _id, className, instructorName, price, classImage } = selectedClass;

    let [modal, setModal] = useState(false);

    const closeModal = () => {
        setModal(false)
    }



    return (
        <tr className="hover text-center">
            <th>{i + 1}</th>
            <th className='w-[15%]'><img className='w-[65%]' src={`${classImage}`} alt="" /></th>
            <td>{className}</td>
            <td>{instructorName}</td>
            <td>${price}</td>
            <td>
                <Link onClick={() => setModal(true)} className="btn btn-square btn-neutral btn-sm">Pay</Link>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <Payment isOpen={modal} closeModal={closeModal} selectedClass={selectedClass} />
        </tr>
    );
};

export default SelectedClass;