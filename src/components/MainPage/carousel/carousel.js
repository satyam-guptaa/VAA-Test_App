import { Carousel } from "react-bootstrap"
import "../carousel/carousel.css"

export default function MyCarousel({imgOne, imgTwo, imgThree, imgFour}) {
    return (
        <div className="carousel-container">
            <Carousel fade indicators={false} controls={false}>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100 carouselImg"
                    src={imgOne}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100 carouselImg"
                    src={imgTwo}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100 carouselImg"
                    src={imgThree}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100 carouselImg"
                    src={imgFour}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}