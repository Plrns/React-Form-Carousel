import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "./styles.css";

const photos = [
  {
    name: "Foto 1",
    url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpaperscraft.com%2Fimage%2Flightning_thunderstorm_overcast_128020_1280x720.jpg&f=1&nofb=1",
  },
  {
    name: "Foto 2",
    url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fq75p_vuYIOM%2Fmaxresdefault.jpg&f=1&nofb=1",
  },
  {
    name: "Foto 3",
    url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FHIPdyKJa2LA%2Fmaxresdefault.jpg&f=1&nofb=1",
  },
];

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div>
              <img
                src={photo.url}
                alt="Photos's Thunder"
                className="photo-carousel"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
