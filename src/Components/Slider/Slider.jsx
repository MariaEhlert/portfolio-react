import { useState } from 'react';
import './Slider.scss';
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

export const Slider = () => {
    const slideshow = [
        {
            url: require('../../Assets/images/slide/pexels-dina-nasyrova-3874609.jpg'),
            alt: 'slideImgOne'
        },
        {
            url: require('../../Assets/images/slide/pexels-dominika-roseclay-1036873.jpg'),
            alt: 'slideImgTwo'
        },
        {
            url: require('../../Assets/images/slide/pexels-markus-spiske-225767.jpg'),
            alt: 'slideImgThree'
        },
        {
            url: require('../../Assets/images/slide/pexels-nadi-lindsay-4442181.jpg'),
            alt: 'slideImgTour'
        }
    ]
    const [current, setCurrent] = useState(0);
    const length = slideshow.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if (!Array.isArray(slideshow) || slideshow.length <= 0) {
        return null;
    }
    
    return (
        <section className='sliderWrapper'>
            <HiArrowCircleLeft className='leftArrow' onClick={prevSlide} /> 
            <HiArrowCircleRight className='rightArrow' onClick={nextSlide} />
            {slideshow && slideshow.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img className='image' src={slide.url} alt={slide} />
                        )}
                    </div>
                )
            })}

        </section>
    );
}