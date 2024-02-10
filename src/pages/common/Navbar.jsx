import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/main.svg';
import logoHOI from '../../images/logo-coba.jpeg';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import { RoomServiceOutlined } from '@material-ui/icons';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';

const Navbar = () => {
	const [isMobileNavExpanded, setMobileNavExpanded] = useState(false);
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const handleDropdownClick = (path) => {
		// Panggil fungsi atau lakukan apa pun yang diperlukan
		console.log(`Navigasi ke ${path}`);
		// Set path di sini jika perlu
		setDropdownOpen(false);
	};

	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen);
	};
	return (
		<>
			<div className="container-fluid navigation_bar">
				<nav className="navscroll navbar fixed-top navbar-expand-lg navbar-light py-2 px-3 shadow-md">
					<div className="container">
						<NavLink className="navbar-brand" to="/">
							<img
								src={logoHOI}
								alt="logo1"
								className="img-fluid"
								width="160"
								// style={{ height: 60 }}
							/>
						</NavLink>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							// aria-controls="navbarSupportedContent"
							aria-expanded={isMobileNavExpanded ? 'true' : 'false'}
							aria-label="Toggle navigation"
							onClick={() => setMobileNavExpanded(!isMobileNavExpanded)}
						>
							<div
								className="text-white"
								onClick={(e) => {
									e.stopPropagation(); // Mencegah penyebaran event ke atas (ke tombol)
								}}
							>
								<MenuIcon style={{ fontSize: 35, color: 'black' }} />
							</div>
						</button>
						<div
							className={`collapse navbar-collapse ${
								isMobileNavExpanded ? 'show' : ''
							}`}
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav ms-auto items-center">
								<li className="nav-item">
									<NavLink exact className="nav-link" to="/">
										<span className="d-lg-none d-xl-none me-3">
											<HomeIcon />
										</span>
										Beranda<span className="sr-only"></span>
									</NavLink>
								</li>
								<li className="nav-item">
									<div className="dropdown">
										<button
											className="dropbtn text-black"
											onClick={toggleDropdown}
										>
											<span className="d-lg-none d-xl-none me-3">
												<RoomServiceOutlined />
											</span>
											Layanan
										</button>
										{isDropdownOpen && (
											<div className="dropdown-content">
												<NavLink
													to="/layanan/cctv"
													className="nav-link"
													onClick={() => handleDropdownClick('/cctv')}
												>
													CCTV
												</NavLink>
												<NavLink
													to="/layanan/internet"
													className="nav-link"
													onClick={() => handleDropdownClick('/internet')}
												>
													Internet
												</NavLink>
												<NavLink
													to="/layanan/infrastructure"
													className="nav-link"
													onClick={() => handleDropdownClick('/infrastructure')}
												>
													Infrastructure
												</NavLink>
												<NavLink
													to="/layanan/website"
													className="nav-link"
													onClick={() => handleDropdownClick('/website')}
												>
													Website
												</NavLink>
												{/* Tambahkan item dropdown lain sesuai kebutuhan */}
											</div>
										)}
									</div>
								</li>
								<li className="nav-item">
									<NavLink exact className="nav-link" to="/about">
										<span className="d-lg-none d-xl-none me-3">
											<PeopleIcon />
										</span>
										Tentang Kami
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink exact className="nav-link" to="/contact">
										<span className="d-lg-none d-xl-none me-3">
											<CallOutlinedIcon />
										</span>
										Kontak
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
