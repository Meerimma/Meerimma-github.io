import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from "swiper";

import "swiper/css";
import "swiper/css/navigation"

import image from '../../../assets/Pizza/mainpizza.jpg'
import image1 from '../../../assets/Pizza/sliderpizza1.jpg'
import image2 from '../../../assets/Pizza/sliderpizza2.jpg'
import image4 from '../../../assets/Pizza/sliderpizza4.jpg'



const Slider = () => {
    return (
        <section className="slider">

            <div className="container">

                <Swiper
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className ="slider__block">
                            <img src={image} alt="" className ="slider__block-img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className ="slider__block">
                            <img src={image1} alt="" className ="slider__block-img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className ="slider__block">
                            <img src={image4} alt="" className ="slider__block-img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className ="slider__block">
                            <img src={image2} alt="" className ="slider__block-img"/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>



        </section>
    );
};

export default Slider;