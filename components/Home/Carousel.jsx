import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		centerMode: true,
		slidesToScroll: 1,
		// autoplay: true,
		// autoplaySpeed: 2000
	  };
	return(
		<div className='carousel'>
			<div className='col-12 row'>

			<Slider {...settings}>	
				<div className='carouselImage'>
					<img src="http://placekitten.com/g/400/200" />
				</div>
				<div className='carouselImage'>
					<img src="http://placekitten.com/g/400/200" />
				</div>
				<div className='carouselImage'>
					<img src="http://placekitten.com/g/400/200" />
				</div>
				<div className='carouselImage'>
					<img src="http://placekitten.com/g/400/200" />
				</div>
			</Slider>
			</div>
		</div>
	)
}