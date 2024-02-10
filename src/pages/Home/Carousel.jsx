import React from 'react';
import banner1 from '../../images/banner/wifi.png';
import banner2 from '../../images/banner/gedung.png';
import banner3 from '../../images/banner/cctv.png';

const Carousel = () => {
	return (
		<section>
			<div className="header_height align-items-center">
				<div
					id="carouselExampleIndicators"
					className="carousel slide"
					data-bs-ride="carousel"
					style={{ height: '100%', width: '100%' }}
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={banner1} className="d-block w-100" alt="First slide" />
						</div>
						<div className="carousel-item">
							<img src={banner2} className="d-block w-100" alt="Second slide" />
						</div>
						<div className="carousel-item">
							<img src={banner3} className="d-block w-100" alt="Third slide" />
						</div>
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselExampleIndicators"
						role="button"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleIndicators"
						role="button"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</a>
					<ol
						className="carousel-indicators d-flex justify-content-center"
						// style={{ backgroundColor: 'rgb(255, 76, 0)' }}
					>
						<li
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="0"
							className="active"
							// style={{ backgroundColor: 'rgb(255, 76, 0)' }}
						></li>
						<li
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="1"
						></li>
						<li
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide-to="2"
						></li>
					</ol>
				</div>
			</div>
		</section>
	);
};

export default Carousel;
