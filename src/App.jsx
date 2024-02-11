import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Home from './pages/Home/index.jsx';
import Service from './pages/Service';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './pages/common/Navbar';
import Footer from './pages/common/Footer';
import Career from './pages/Career';
import Whatsapp from './pages/common/WhatsApp.jsx';
const App = () => {
	const handleNavbarDropdown = (path) => {
		console.log(`Navigasi ke ${path} dari navbar dropdown`);
		// Lakukan apa pun yang diperlukan di sini
	};
	return (
		<>
			<BrowserRouter>
				{/* <Navbar /> */}
				<Navbar onDropdownClick={handleNavbarDropdown} />
				<Whatsapp />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/layanan/:type" component={Service} />
					<Route exact path="/career" component={Career} />
					<Route exact path="/contact" component={Contact} />
					<Redirect to="/" />
				</Switch>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;