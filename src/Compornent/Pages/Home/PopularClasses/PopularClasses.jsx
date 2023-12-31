import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Title from '../../../Title/Title';


const PopularInstructor = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })
    console.log(classes);

    return (
        <div className='my-12'>
            <Title title='Popular Class'></Title>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols gap-4 mx-auto'>
                {
                    classes.slice(0, 6).map(classes => <div key={classes._id} className="card w-96 bg-slate-50 shadow-xl mx-auto">
                        <figure className="px-10 pt-10">
                            <img src={classes.classImage} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{classes.className}</h2>
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