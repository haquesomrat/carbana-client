import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Brands.css";
import { Link } from "react-router-dom";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#ff4605",
        borderRadius: "5rem",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#ff4605",
        borderRadius: "5rem",
      }}
      onClick={onClick}
    />
  );
}

const Brands = () => {
  const brandItems = [
    {
      name: "Audi",
      img: "https://4.bp.blogspot.com/-ncvR60Yx2YM/VS-ZywZJtTI/AAAAAAAAAFg/U3maSgq3_Yk/s1600/audi.jpg",
    },
    {
      name: "Mercedes",
      img: "https://th.bing.com/th/id/R.f4b0a7ea836fa4a99c4688bbd3ad9ffe?rik=r5om3Xq2XFNPxg&pid=ImgRaw&r=0",
    },
    {
      name: "Cadillac",
      img: "https://th.bing.com/th/id/OIP.Oi6mOIlPxmrbUCajvDexGQHaE7?pid=ImgDet&w=474&h=315&rs=1",
    },
    {
      name: "Chevrolet",
      img: "https://i.pinimg.com/originals/26/d4/ff/26d4ff5d404969edae96fa63da9e4358.jpg",
    },
    {
      name: "Ford",
      img: "https://th.bing.com/th/id/OIP.lUxujG_R4CFiKy0vDsd9uwHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "Ferrari",
      img: "https://th.bing.com/th/id/R.4670b8700347dd46ec0313fe6f4d3728?rik=f5FztJZw5NeQaQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fCXUF4vo.jpg&ehk=ij6HIDK0baVmYo%2fUmPW1vOiBWIPbVyD2nGw2Gtek8cE%3d&risl=&pid=ImgRaw&r=0",
    },
  ];
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    lazyLoad: true,
    className: "h-auto pr-4",
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        arrows: true,
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mt-10 lg:mt-20 px-12">
      <div>
        <Slider {...settings}>
          {brandItems.map((item, id) => (
            <Link key={id} item={item} to={`/products/${item.name}`}>
              <div>
                <figure className="aspect-square">
                  <img
                    className="h-full object-cover rounded-xl"
                    src={item.img}
                    alt={item.name}
                  />
                </figure>
                <h2 className="text-3xl font-semibold text-center text-primary">
                  {item.name}
                </h2>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
