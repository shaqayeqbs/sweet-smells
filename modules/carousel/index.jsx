import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classes from "./carousel.module.css";
import Link from "next/link";
import Image from "next/image";
function NextJsCarousel() {
  return (
    <div className={classes.container}>
      <div className={classes.sliderContainer}>
        <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={true}>
          <Link href="/perfumes/62b839b36f340928bda916c7">
            <div className={classes.slideritemdiv}>
              <Image
                src="/images/slide6.jpg"
                className={classes.img}
                alt="MISS DIOR"
                width={1000}
                height={400}
                layout="responsive"
              />
              <p className="legend">MISS DIOR</p>
            </div>
          </Link>
          <Link href="/perfumes/62c15e998246b16b0f615204">
            <div className={classes.slideritemdiv}>
              <Image
                src="/images/slider5.jpg"
                className={classes.img}
                alt="ACQUA DI GIO"
                width={1000}
                height={400}
                layout="responsive"
              />
              <p className="legend">ACQUA DI GIO</p>
            </div>
          </Link>
          <Link href="/perfumes/62b8391a6f340928bda916c4">
            <div className={classes.slideritemdiv}>
              <Image
                src="/images/slide3.jpg"
                className={classes.img}
                alt="BLUE DE CHANEL"
                width={1000}
                height={400}
                layout="responsive"
              />
              <p className="legend">BLUE DE CHANEL</p>
            </div>
          </Link>
          <Link href="/perfumes/62c15c078246b16b0f615203">
            <div className={classes.slideritemdiv}>
              <Image
                src="/images/silder6.jpg"
                className={classes.img}
                alt="GIORGIO ARMANI SI"
                width={1000}
                height={400}
                layout="responsive"
              />
              <p className="legend">GIORGIO ARMANI SI</p>
            </div>
          </Link>
        </Carousel>
      </div>
    </div>
  );
}

export default NextJsCarousel;
