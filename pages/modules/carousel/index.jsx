import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classes from "./carousel.module.css";

function NextJsCarousel() {
  return (
    <div className={classes.container}>
      <div className={classes.sliderContainer}>
        <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={true}>
          <div className={classes.slideritemdiv}>
            <div>
              <img
                src="/images/slider1.jpg"
                className={classes.img}
                alt="image1"
              />
            </div>
            <p className="legend">Image 1</p>
          </div>
          <div className={classes.slideritemdiv}>
            <img
              src="/images/slide6.jpg"
              className={classes.img}
              alt="image2"
            />
            <p className="legend">Image 2</p>
          </div>
          <div className={classes.slideritemdiv}>
            <img
              src="/images/slider5.jpg"
              className={classes.img}
              alt="image3"
            />
            <p className="legend">Image 3</p>
          </div>
          <div className={classes.slideritemdiv}>
            <img
              src="/images/slider4.jpg"
              className={classes.img}
              alt="image4"
            />
            <p className="legend">Image 4</p>
          </div>
          <div className={classes.slideritemdiv}>
            <img
              src="/images/silder6.jpg"
              className={classes.img}
              alt="image5"
            />
            <p className="legend">Image 5</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default NextJsCarousel;
