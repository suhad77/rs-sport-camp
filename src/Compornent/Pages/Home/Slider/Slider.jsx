// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const Slider = () => {
    

    return (
        <div className='h-[90vh] my-12'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper rounded-lg"
            >
                <SwiperSlide>
                    <img className='relative' src="https://img.freepik.com/free-vector/happy-new-year-2022-cricket-championship-concept-design-vector-illustration_460848-6690.jpg?size=626&ext=jpg&ga=GA1.2.697121856.1680261003&semt=ais" alt="" />
                    <div className='absolute text-center justify-center items-center space-y-4 bg-gradient-to-r from-zinc-500 w-full h-full flex flex-col '>
                        <h1 className='text-[#C0966B] font-bold text-7xl'>MAKE YOUR SUMMER</h1>
                        <p className='text-[#C0966B] font-bold text-5xl'>Improve your skills with us</p>
                        <button className='w-[180px] btn btn-neutral btn-lg rounded-full'>Enroll Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src="https://img.freepik.com/premium-vector/soccer-players-action-2023-new-year-vector-illustration-layout-template-design_45996-2258.jpg?size=626&ext=jpg&ga=GA1.1.697121856.1680261003&semt=ais" alt="" />
                    <div className='absolute text-center justify-center items-center space-y-4 bg-gradient-to-r from-zinc-500 w-full h-full flex flex-col '>
                        <h1 className='text-[#C0966B] font-bold text-7xl'>MAKE YOUR SUMMER</h1>
                        <p className='text-[#C0966B] font-bold text-5xl'>Improve your skills with us</p>
                        <button className='w-[180px] btn btn-neutral btn-lg rounded-full'>Enroll Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src="https://img.freepik.com/premium-photo/2023-new-year-sign-with-basketball-ball-3d-rendering_476612-21381.jpg?size=626&ext=jpg&ga=GA1.1.697121856.1680261003&semt=ais" alt="" />
                    <div className='absolute text-center justify-center items-center space-y-4 bg-gradient-to-r from-zinc-500 w-full h-full flex flex-col '>
                        <h1 className='text-[#C0966B] font-bold text-7xl'>MAKE YOUR SUMMER</h1>
                        <p className='text-[#C0966B] font-bold text-5xl'>Improve your skills with us</p>
                        <button className='w-[180px] btn btn-neutral btn-lg rounded-full'>Enroll Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src="https://img.freepik.com/free-psd/flat-design-paddle-tennis-lessons-banner-template_23-2149273641.jpg?size=626&ext=jpg&ga=GA1.1.697121856.1680261003&semt=ais" alt="" />
                    <div className='absolute text-center justify-center items-center space-y-4 bg-gradient-to-r from-zinc-500 w-full h-full flex flex-col '>
                        <h1 className='text-[#C0966B] font-bold text-7xl'>MAKE YOUR SUMMER</h1>
                        <p className='text-[#C0966B] font-bold text-5xl'>Improve your skills with us</p>
                        <button className='w-[180px] btn btn-neutral btn-lg rounded-full'>Enroll Now</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;