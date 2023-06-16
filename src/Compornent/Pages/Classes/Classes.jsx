import { useEffect, useState } from 'react';
import ClassItem from './ClassItem';
import Title from '../../Title/Title';
import { Helmet } from 'react-helmet';

const Classes = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://rs-sport-camp-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <div className='my-12'>
            <Helmet>
                <title>RsSportClub || Classes</title>
            </Helmet>
            <Title title='All Classes'></Title>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    classes.map(cls => <ClassItem
                        key={cls._id}
                        cls={cls}
                    ></ClassItem>)
                }
            </div>
        </div>
    );
};

export default Classes;