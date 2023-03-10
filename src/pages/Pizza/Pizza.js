import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import image from '../../assets/Pizza/pizza1.png'
import {getPizza} from "../../redux/reducers/pizza";
import {useDispatch} from "react-redux";
import axios from "../../utils/axios";



const Pizza = () => {

    const dispatch = useDispatch()


    useEffect(()=>{
        axios('http://localhost:8080/pizza')
            .then(({data})=> dispatch(getPizza(data)))
            .catch((err)=> console.log(err) )
    },[])



    return (
        <section className="pizza">
            <div className="container">
                <h2 className="pizza-title">
                   Pizza
                </h2>

                <div className="pizza__sort">
                <select>
                    <option> Пицца</option>
                    <option> Суши</option>
                    <option> Закуски </option>
                </select>
                </div>


                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    className="pizzaList"
                >

                    <SwiperSlide>
                        <div className="pizza-list__card">
                            <div className="pizza-list__card-block">
                                <img src={image} alt=""/>
                                <div className="pizza-list__card-info">
                                    <h3 className="pizza-list__card-name">
                                        jvhbh,khbm
                                    </h3>
                                    <p className="pizza-list__card-descr">
                                       fgfjdf
                                    </p>

                                    <p className="pizza-list__card-price">
                                       466
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pizza-list__card">
                            <div className="pizza-list__card-block">
                                <img src={image} alt=""/>
                                <div className="pizza-list__card-info">
                                    <h3 className="pizza-list__card-name">
                                        Чикен Сладкий Чили
                                    </h3>
                                    <p className="pizza-list__card-descr">
                                        Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...
                                    </p>

                                    <p className="pizza-list__card-price">
                                        399
                                    </p>
                                </div>


                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pizza-list__card">
                            <div className="pizza-list__card-block">
                                <img src={image} alt=""/>

                                <div className="pizza-list__card-info">
                                    <h3 className="pizza-list__card-name">
                                        Чикен Сладкий Чили
                                    </h3>
                                    <p className="pizza-list__card-descr">
                                        Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...
                                    </p>

                                    <p className="pizza-list__card-price">
                                        399
                                    </p>
                                </div>


                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pizza-list__card">
                            <div className="pizza-list__card-block">
                                <img src={image} alt=""/>

                                <div className="pizza-list__card-info">
                                    <h3 className="pizza-list__card-name">
                                        Чикен Сладкий Чили
                                    </h3>
                                    <p className="pizza-list__card-descr">
                                        Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...
                                    </p>

                                    <p className="pizza-list__card-price">
                                        399
                                    </p>
                                </div>


                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pizza-list__card">
                            <div className="pizza-list__card-block">
                                <img src={image} alt=""/>

                                <div className="pizza-list__card-info">
                                    <h3 className="pizza-list__card-name">
                                        Чикен Сладкий Чили
                                    </h3>
                                    <p className="pizza-list__card-descr">
                                        Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...
                                    </p>

                                    <p className="pizza-list__card-price">
                                        399
                                    </p>
                                </div>


                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pizza-list__card">
                            <div className="pizza-list__card-block">
                                <img src={image} alt=""/>

                                <div className="pizza-list__card-info">
                                    <h3 className="pizza-list__card-name">
                                        Чикен Сладкий Чили
                                    </h3>
                                    <p className="pizza-list__card-descr">
                                        Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...
                                    </p>

                                    <p className="pizza-list__card-price">
                                        399
                                    </p>
                                </div>


                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>



            </div>
        </section>
    );
};

export default Pizza;