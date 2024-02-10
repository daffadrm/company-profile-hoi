import React from 'react';
import Secheader from './common/Secondaryheader';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const Contact = () => {
	return (
		<>
			<Secheader
				sectitle="Kontak"
				secdesc="Lorem Ipsum is simply random text."
			/>

			<section>
				<div className="container row py-5 m-auto">
					<div className="col-md-12 d-flex align-items-center order-lg-1 order-md-2 flex-column py-5">
						<div className="row col-12">
							<div className="col-md-12">
								<span className="lead mb-3" style={{ color: '#ff4c00' }}>
									Kontak
								</span>
								<div className="row">
									<div className="col-md-12">
										<div className="d-flex align-items-center mb-4">
											<span className="m-2 ml-0" style={{ color: '#ff4c00' }}>
												<CallOutlinedIcon />
											</span>
											<span className="d-flex flex-column">
												+62 813 8080 9602
											</span>
										</div>
									</div>
									<div className="col-md-12">
										<div className="d-flex align-items-center mb-4">
											<span className="m-2 ml-0" style={{ color: '#ff4c00' }}>
												<LocationOnOutlinedIcon />
											</span>
											<span className="d-flex flex-column">
												Gedung Wirausaha lantai 1 unit 104, Jalan HR Rasuna Said
												Kav.C-5,Karet,Setiabudi Jakarta Selatan.12920
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
