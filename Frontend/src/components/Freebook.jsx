import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import List from "../../public/list.json";
import Cards from "./Cards";

function Freebook() {
  // Filter Data which is free of cost
  const filteredData = List.filter((data) => data.category === "Free");

  // Slider Settings
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pb-2">
        <div>
          <h1 className="text-xl font-semibold">Free Offred Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            optio laudantium eum natus, molestias voluptatibus impedit
            exercitationem ullam fuga illo commodi minima nobis animi aliquid.
          </p>
        </div>
        <div className="mb-5">
          <Slider {...settings}>
            {filteredData.map((item) => (
                <Cards item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
