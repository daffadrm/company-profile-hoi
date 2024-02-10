import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import logo from '../../images/logo-hoi.png';

const Footer = () => {
	const years = new Date().getFullYear();
	return (
		<>
			<footer>
				<div className="container row py-1 m-auto">
					<div className="col-md-12 d-flex align-items-center order-lg-1 order-md-2 flex-column py-5">
						<div className="row col-12">
							<div className="col-md-6">
								{/* <span className="lead mb-3 text-white">Support</span> */}
								{/* <img src="logo" alt="logo" /> */}
								<img src={logo} alt="logo1" className="img-fluid" width="160" />
								<p className="small text-white">
									HOI adalah perusahaan yang berpengalaman, dengan nama merek
									perusahaan PT. Hitam Orens Indonesia yang fokus pada solusi
									teknologi dan infrastuktur serta pengawasan.
									{/* <br />
									<br />
									<span className="m-2 ml-0 hdrcolor">
										<CallOutlinedIcon />
									</span>
									+4654664546
									<br />
									<br />
									<span className="m-2 ml-0 hdrcolor">
										<EmailOutlinedIcon />
									</span>
									sample@example.com
									<br />
									<br />
									<span className="m-2 ml-0 hdrcolor">
										<LocationOnOutlinedIcon />
									</span>
									New York, USA */}
								</p>
								<p className="small text-white">
									Dengan ratusan kamera pengintai dan internet yang telah kami
									pasang, menjadikan kami mitra yang tepat dan dapat diandalkan
									untuk urusan keamanan dan internet anda.
								</p>
								<p className="small text-white">
									Konsultan yang berpengalaman, IT dan Engineer juga telah
									menyelesaikan banyak proyek IT dan infrastruktur yang dibuat
									khusus.
								</p>
							</div>
							<div className="col-md-6">
								<span className="lead mb-3" style={{ color: '#ff4c00' }}>
									Kontak
								</span>
								<div className="row">
									<div className="col-md-12">
										<div className="d-flex align-items-center mb-4">
											<span className="m-2 ml-0 hdrcolor">
												<CallOutlinedIcon />
											</span>
											<span className="d-flex flex-column text-white">
												+62 813 8080 9602
											</span>
										</div>
									</div>
									<div className="col-md-12">
										<div className="d-flex align-items-center mb-4">
											<span className="m-2 ml-0 hdrcolor">
												<LocationOnOutlinedIcon />
											</span>
											<span className="d-flex flex-column text-white">
												Gedung Wirausaha lantai 1 unit 104, Jalan HR Rasuna Said
												Kav.C-5,Karet,Setiabudi Jakarta Selatan.12920
											</span>
										</div>
									</div>
								</div>

								{/* <p className="small text-white">
									Purchase lorem ipsum products.
									<br />
									<br />
									<span className="m-2 ml-0 hdrcolor">
										<CallOutlinedIcon />
									</span>
									+62 813 8080 9602
									<br />
									<br />
									<span className="m-2 ml-0 hdrcolor">
										<EmailOutlinedIcon />
									</span>
									demo@example.com
									<br />
									<br />
									<span className="m-2 ml-0 hdrcolor">
										<LocationOnOutlinedIcon />
									</span>
									<span>
										Gedung Wirausaha lantai 1 unit 104, Jalan HR Rasuna Said
										Kav.C-5,Karet,Setiabudi Jakarta Selatan.12920
									</span>
								</p> */}
							</div>
						</div>
					</div>
				</div>
				<div className="container align-items-center py-3 small text-center">
					<div className="text-white small">
						Copyright © {years} PT Hitam Orens Indonesia - All rights reserved
					</div>
					{/* <div className="text-white">
						<span className="mx-2">
							<TwitterIcon fontSize="small" />
						</span>
						<span className="mx-2">
							<LinkedInIcon fontSize="small" />
						</span>
						<span className="mx-2">
							<GitHubIcon fontSize="small" />
						</span>
					</div> */}
				</div>
			</footer>
		</>
	);
};

export default Footer;
