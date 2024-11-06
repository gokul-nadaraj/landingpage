import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Customers.css';

const Customers = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update navigation buttons when Swiper is initialized
  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      prevRef.current.style.display = "block";  
      nextRef.current.style.display = "block";  
    }
  }, [prevRef, nextRef]);

  return (
    <div className="customers-container container py-5">
      <div className="row justify-content-center">
        {/* Custom Arrow Buttons with refs */}
        <div className="col-auto swiper-button-prev" ref={prevRef}>
          <FontAwesomeIcon icon={faArrowLeft} className='icon' />
        </div>
        <div className="col-auto swiper-button-next" ref={nextRef}>
          <FontAwesomeIcon icon={faArrowRight} className='icon' />
        </div>
      </div>

      <Swiper
        modules={[Pagination, Navigation]} 
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1} // Change to 1 for mobile, adjust in CSS for responsiveness
        centeredSlides={true}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => {
          if (swiper.navigation) {
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        breakpoints={{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 }
        }}
      >
        {[
          { name: 'Marko Westin', title: 'Co-Founder' },
          { name: 'Marko Westin', title: 'Co-Founder' },
          { name: 'Marko Westin', title: 'Co-Founder' },
          { name: 'Marko Westin', title: 'Co-Founder' },
        ].map((customer, index) => (
          <SwiperSlide key={index}>
            <div className={`swiper-card card p-4 mb-4 text-center ${index === activeIndex ? 'active-card' : ''}`}>
              <FontAwesomeIcon icon={faThumbsUp} className={`thumbs-up ${index === activeIndex ? 'highlight' : ''}`} />
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                voluptatibus soluta corporis tempora obcaecati assumenda cumque
                commodi labore sit hic.
              </p>
              <h3 className={`card-title ${index === activeIndex ? 'highlight' : ''}`}>{customer.name}</h3>
              <h4 className={`card-subtitle text-muted ${index === activeIndex ? 'highlight' : ''}`}>{customer.title}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Customers;
