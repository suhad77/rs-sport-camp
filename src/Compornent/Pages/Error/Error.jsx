
import { Link } from 'react-router-dom';
import error404 from '../../../assets/error.json';
import Lottie from 'lottie-react';

const Error = () => {
    return (
        <div className='w-full'>
            <div className='flex items-center justify-center'>
                <Lottie animationData={error404} className='w-[40%]'></Lottie>
            </div>
            <div className='text-center'>
                <Link to='/' className='btn btn-outline'>Go to Home</Link>
            </div>
        </div>
    );
};

export default Error;