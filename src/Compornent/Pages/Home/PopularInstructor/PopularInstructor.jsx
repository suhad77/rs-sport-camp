import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Title from '../../../Title/Title';


const PopularInstructor = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [] } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/instructors')
        return res.data;
    })
    console.log(instructors);

    return (
        <div className='my-12'>
            <Title title='Popular Instructor'></Title>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols gap-4 mx-auto'>
                {
                    instructors.slice(0, 6).map(instructor => <div key={instructor._id} className="card w-96 bg-slate-50 shadow-xl mx-auto">
                        <figure className="px-10 pt-10">
                            <img src={instructor.photo} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{instructor.name}</h2>
                            <p>{instructor.email}</p>
                            <div className="card-actions">
                                <button className="btn btn-neutral">Contact</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;