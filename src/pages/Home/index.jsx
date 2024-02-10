import React from 'react';
import web from '../../images/logo.png';
// import work1 from '../../images/brands/adobe.svg';
// import work2 from '../../images/brands/samsung.svg';
// import work3 from '../../images/brands/ebay.svg';
// import work4 from "../images/brands/amazon.svg"
// import product1 from '../../images/products/99.png';
import Carousel from './Carousel';
import Service from './Service';
import About from './About';
import Clients from './Clients';
import Work from './Work';
import Contact from './Contact';

const Home = () => {
	return (
		<>
			<Carousel />
			<About />
			<Service />
			<Work />
			<Clients />
			<Contact />
		</>
	);
};

export default Home;
