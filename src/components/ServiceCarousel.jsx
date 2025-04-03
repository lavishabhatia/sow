import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function NextArrow(props) {
  const { onClick } = props;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <button className=" hidden  arrow next" onClick={onClick}>
=======
    <button className="arrow next" onClick={onClick}>
>>>>>>> 39155a0 (carousel responsive)
=======
    <button className="hidden md:block arrow next" onClick={onClick}>
>>>>>>> 15c22fb (added the skeleton loading)
      <svg
        width="11"
        height="17"
        viewBox="0 0 11 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 14.6321L6.79892 8.29016L0 1.94819L2.09312 0L11 8.29016L2.09312 16.5803L0 14.6321Z"
          fill="#64615B"
        />
      </svg>
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <button className="hidden md:block arrow prev" onClick={onClick}>
=======
    <button className=" arrow prev" onClick={onClick}>
>>>>>>> 39155a0 (carousel responsive)
=======
    <button className="hidden md:block arrow prev" onClick={onClick}>
>>>>>>> 15c22fb (added the skeleton loading)
      <svg
        width="11"
        height="17"
        viewBox="0 0 11 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 14.6323L4.20108 8.29028L11 1.94822L8.90688 0L0 8.29028L8.90688 16.5806L11 14.6323Z"
          fill="#64615B"
        />
      </svg>
    </button>
  );
}

export default function ServiceCarousel({ data }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
<<<<<<< HEAD
<<<<<<< HEAD
          arrows: false,
=======
          arrows: true,
>>>>>>> 39155a0 (carousel responsive)
=======
          arrows: false,
>>>>>>> 15c22fb (added the skeleton loading)
        },
      },
    ],
  };

  return (
<<<<<<< HEAD
    <div className="overflow-hidden overflow-y-hidden w-full h-full">
      <Slider {...settings}>
        {data?.map((item) => (
          <div key={item.id} className="px-2 w-[391px] h-[552px]">
            <div className="relative w-full h-full ">
              <div className="">
                <img
                  src={item?.image_url}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-background text-[28px] font-semibold leading-8">
                {item.post_title}
              </div>
            </div>
          </div>
        ))}
      </Slider>
=======
    <div className="overflow-hidden overflow-y-hidden mb-14 w-full h-full">
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {data?.map((item) => (
            <div key={item.id} className="px-2 w-[391px] h-[552px]">
              <div className="relative w-full h-full">
                <img
                  src={item?.image_url}
                  alt={item.name}
                  className="object-cover w-[391px] h-[552px]"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-background text-[22px] font-semibold leading-8">
                  {item.post_title}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
>>>>>>> 39155a0 (carousel responsive)
    </div>
  );
}
