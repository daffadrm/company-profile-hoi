import React from 'react';
import Marquee from 'react-fast-marquee';
import client1 from '../../images/clients/Picture1.png';
import client2 from '../../images/clients/Picture2.png';
import client3 from '../../images/clients/Picture3.png';
import client4 from '../../images/clients/Picture4.png';
import client5 from '../../images/clients/Picture5.png';
import client6 from '../../images/clients/Picture6.png';
import client7 from '../../images/clients/Picture7.png';
import client8 from '../../images/clients/Picture8.png';
import client9 from '../../images/clients/Picture9.png';
import client10 from '../../images/clients/Picture10.png';
import client11 from '../../images/clients/Picture11.png';
import client12 from '../../images/clients/Picture12.png';
import client13 from '../../images/clients/Picture13.png';
import client14 from '../../images/clients/Picture14.png';
import client15 from '../../images/clients/Picture15.png';

const Clients = () => {
	const images = [
		client1,
		client2,
		client3,
		client4,
		client5,
		client6,
		client7,
		client8,
		client9,
		client10,
		client11,
		client12,
		client13,
		client14,
		client15,
	];
	return (
		<section className="bg-white">
			<div className="container mx-auto py-5">
				<div className="mb-5 text-center">
					<p
						className="display-6 mb-1 text-uppercase"
						style={{ color: '#ff4c00' }}
					>
						Clients
					</p>
					<p className="text-muted">
						Dari beragam Latar Belakang, mulai dari tempat tinggal pribadi,
						toko, gudang, dan gedung
					</p>
				</div>
				<Marquee>
					<div className="flex-row gy-2 brands_logo align-items-center m-auto d-flex">
						{images.map((item, index) => (
							<>
								<div className="text-center  ms-3">
									<img className="img-fluid" alt={index} src={item} />
								</div>
							</>
						))}
					</div>
				</Marquee>
			</div>
		</section>
	);
};

export default Clients;
