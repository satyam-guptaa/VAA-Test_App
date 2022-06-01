import { Carousel } from "react-bootstrap"
import "../carousel/carousel.css"

export default function MyCarousel({images}) {
    const keys = [1,2,3,4]
    return (
        <div className="carousel-container">
            <Carousel fade indicators={false} controls={false}>
                {images.map((image,i) => {
                  return (<Carousel.Item interval={3000} key={keys[i]}>
                    <img
                    className="d-block w-100 carouselImg"
                    src={image}
                    alt="First slide"
                    />
                  </Carousel.Item>)
                })}
            </Carousel>
        </div>
    )
}