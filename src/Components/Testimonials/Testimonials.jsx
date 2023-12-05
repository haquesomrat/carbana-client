import { TbCarSuv } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import custom css
import "./Testimonials.css";

const Testimonials = () => {
  const reviews = [
    {
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alina Myer",
      review:
        "The tire-changing process was incredibly swift and precise. The technicians worked diligently, using modern equipment and techniques to ensure a smooth transition. Their attention to detail was evident; they not only replaced the tires efficiently but also conducted a thorough check of the alignment and balancing, leaving me with a vehicle that felt like new.",
    },
    {
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Charlie Bose",
      review:
        "They are always quick and helpful! Highly recommended. They always make sure to check my oil filter and make sure it is clean as well as air intake. They are always helpful to ensure that you get the right price for your money.",
    },
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Joseph Gonzalez",
      review:
        "I have had the greatest experience with having my machine handled by them. The Lexus 570 came back to great shape after them having it checked and maintained. They have the best services when it comes to engine check, repair and cleaning. They replaced all my mirrors and gave me a new door open light that shows lexus 570 when opened on the ground. I can recommend them to anyone.",
    },
    {
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Ayo Ogunseinde",
      review:
        "Economy Lube was fast and efficient at changing my oil and providing up to date maintenance on my vehicle. They have friendly staff who took the time to answer all my questions. I highly recommend Carbana to anyone who demands great service.",
    },
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Christina",
      review:
        "I have gone 3 three times for oil changes. It’s great that it so fast. Twice they have told me I needed things done and showed me what the issue was. As well they try to help with the price. I am mechanically inclined, and I knew that I had not done anything that was needed since I owned my car. I am sorry people have had bad experiences, but you know that you can say no, go somewhere else have it checked and I pretty much guarantee the price will be close to double! I personally have called the other place I used to go to for the same service I had done and the price was a few hundred dollars more and no chance of discount.",
    },
    {
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Ali Morshedlou",
      review:
        "Have been going to Economy Lube for a few years. I would often been offered Upselling items such as transmission fluid change, fuel filter, cabin filter changes based on my mileage and history with this garage. After becoming aware of their practices, I switched to another reputable garage for my next oil change. I've just found that my transmission fluid had never been changed, fuel filter and cabin filter never changed as I was advised. I don't know how much extra I've paid for over the years for not getting the services done.",
    },
  ];
  return (
    <div className="container mx-auto py-10 lg:mb-10 px-3">
      <span className="flex justify-center ">
        <TbCarSuv className="text-4xl text-primary" />
      </span>
      <h2 className="text-3xl lg:text-5xl xl:text-6xl text-center font-semibold text-primary pt-4 pb-6">
        Testimonials
      </h2>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          centeredSlides={true}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.name}>
              <div className="card w-full bg-base-300 shadow-xl items-center p-4 min-h-[394px]">
                <figure className="h-20 w-20 rounded-full mb-4">
                  <img src={review.img} alt={review.name} />
                </figure>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <div className="card-body items-center text-center px-2 py-4">
                  <h2 className="card-title">{review.name}</h2>
                  <p className="text-lg text-primary">Happy Customer</p>
                  <p className="line-clamp-6 ">{review.review}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
