import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import 'swiper/swiper-bundle.css'; 


import xaviour from "../assets/xaviour.jpg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";


const REVIEW = {
  content: "What our customers say about our delicious dishes",
  name: "AleemaKhan",
  profession: "CEO, Restaura Food",
};

const Review = () => {
  const reviews = [
    {
      image: customer1,
      name: "Hoor Aalam",
      profession: "Food Blogger",
      review: "The pasta was heavenly, and the ambiance is perfect!",
      rating: 5,
    },
    {
      image: customer2,
      name: "Sara Malik",
      profession: "Customer",
      review: "A great dining experience with friendly staff!",
      rating: 4,
    },
    {
      image: customer3,
      name: "Shehnaz Ali",
      profession: "Regular Customer",
      review: "The best place to enjoy authentic cuisine.",
      rating: 4,
    },
    {
      image: customer4,
      name: "Fatima Shah",
      profession: "Chef",
      review: "Impeccable service and mouth-watering dishes!",
      rating: 5,
    },
  ];

  return (
    <section className="container mx-auto my-12 px-4" id="review">
      <div className="flex flex-col items-center mb-10 text-center">
        <p className="text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:text-[2.5rem]">
          {REVIEW.content}
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <img
            src={xaviour}
            width={80}
            height={80}
            alt={REVIEW.name}
            className="rounded-full border border-gray-300 shadow-sm"
          />
          <div>
            <h6 className="text-xl font-semibold">{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 flex flex-col items-center text-center">
              <img
                src={review.image}
                alt={`${review.name}'s picture`}
                className="w-20 h-20 rounded-full border mb-4 transform hover:scale-110 transition duration-300"
              />
              <h3 className="text-xl font-semibold">{review.name}</h3>
              <p className="text-sm text-white-500">{review.profession}</p>
              <p className="text-white mt-3 italic">"{review.review}"</p>
              <div className="flex mt-2 text-yellow-400">
                {Array(review.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
