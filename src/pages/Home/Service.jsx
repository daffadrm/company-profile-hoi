import React from 'react';
import { NavLink } from 'react-router-dom';
import photos1 from '../../images/services/Picture1.png';
import photos6 from '../../images/services/Picture6.png';
import photos7 from '../../images/services/Picture7.png';
import photos8 from '../../images/services/Picture8.png';

const Service = () => {
	const data = [
		{
			images: photos1,
			title: 'CCTV',
			desc: 'Bebas khawatir, amankan anggota keluarga atau hewan peliharaan dan toko Anda',
			to: '/layanan/cctv',
		},
		{
			images: photos7,
			title: 'INFRASTRUCTURE',
			desc: 'Kami menyediakan jasa konsultasi dan infrastruktur komputer IT',
			to: '/layanan/infrastructure',
		},
		{
			images: photos8,
			title: 'INTERNET',
			desc: 'Solusi sistem jaringan komputer di kantor Anda',
			to: '/layanan/internet',
		},
		{
			images: photos6,
			title: 'WEBSITE',
			desc: 'Membuat website profesional untuk menunjang bisnis anda.',
			to: '/layanan/website',
		},
	];
	return (
		<section>
			<div className="container mx-auto py-5">
				<div className="mb-4 text-center">
					<p
						className="display-6 mb-1 text-uppercase"
						style={{ color: '#ff4c00' }}
					>
						Layanan
					</p>
					<p className="text-muted">
						Kami menyediakan berbagai layanan untuk menjadi mitra keamanan Anda,
						mulai dari home living, toko, UMKM, gudang atau gedung
					</p>
				</div>
				<div className="row gy-5 d-flex align-items-center justify-content-evenly mt-0">
					{data.map((item, index) => (
						<div className="col-md-4 col-lg-3 text-center">
							<NavLink className="nav-link" to={item.to}>
								<div className="box_border position-relative rounded pt-3 pb-3 px-3">
									<img className="img-fluid" alt={'index'} src={item.images} />
									<p
										className="mb-2 mt-4 font-weight-bold"
										style={{ color: '#ff4c00' }}
									>
										{' '}
										{item.title}
									</p>
									<p className="text-muted text-left text-xl-center text-lg-center">
										{item.desc}
									</p>
								</div>
							</NavLink>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Service;
