import classes from "./astrologerList.module.css";
import Slider from "react-slick";
import Astrologer from "./Astrologer";

const AstrologerList = (props) => {
  const { astrologer } = props;
  var settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className={classes.astrologerContainer}>
        <div className={classes.title}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2902/2902475.png"
            alt="star"
          />
          <div>Premium Astrologers</div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2902/2902475.png"
            alt="star"
          />
        </div>
        <div className={classes.astrologerList}>
          {astrologer.map((astro) => (
            <Astrologer
              name={astro.name}
              img={astro.img}
              speciality={astro.speciality}
              experience={astro.experience}
              skills={astro.skills}
              price={astro.price}
              key={astro.id}
            />
          ))}
        </div>
        <div className={classes.astrologerListMobile}>
        <Slider {...settings}>
          {astrologer.map((astro) => (
            <Astrologer
              name={astro.name}
              img={astro.img}
              speciality={astro.speciality}
              experience={astro.experience}
              skills={astro.skills}
              price={astro.price}
              key={astro.id}
            />
          ))}
          </Slider>
        </div>
      </div>
      <div className={classes.endImg}></div>
    </>
  );
};

export default AstrologerList;
