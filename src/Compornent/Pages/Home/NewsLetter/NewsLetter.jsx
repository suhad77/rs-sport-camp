import Title from "../../../Title/Title";
import CountUp from 'react-countup';

const NewsLetter = () => {
    return (
        <div>
            <Title title='Student Count'></Title>
        <div className="bg-slate-300 w-[60%] mx-auto my-12 rounded-lg">
            <h2 className="text-center text-3xl py-6">Student</h2>
            <div className="grid grid-flow-col gap-5 text-center pb-6">
                <div className="flex flex-col">
                    <CountUp className="text-4xl" start={0} end={250} duration={2} delay={0}></CountUp>
                    <h4 className="text-2xl">Running Student</h4>
                </div>
                <div className="flex flex-col">
                <CountUp className="text-4xl" start={0} end={2500} duration={2} delay={0}></CountUp>
                    <h4 className="text-2xl">Totla Student</h4>
                </div>
                <div className="flex flex-col">
                <CountUp className="text-4xl" start={0} end={1235} duration={2} delay={0}></CountUp>
                    <h4 className="text-2xl">Success Student</h4>
                </div>
            </div>
        </div>
        </div>
    );
};

export default NewsLetter;