import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Title from '../../Title/Title';
import { Helmet } from 'react-helmet';

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [], refetch } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/instructors')
        refetch();
        return res.data;
    })

    console.log(instructors);

    return (
        <div className='my-12'>
            <Helmet>
                <title>RsSportClub || Instructor</title>
            </Helmet>
            <Title title='All Instructors'></Title>
            <div className='grid grid-cols-3 gap-4 mx-auto'>
                {
                    instructors.map(instructor => <div key={instructor._key} className="card w-96 bg-slate-50 shadow-xl mx-auto">
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

export default Instructors;