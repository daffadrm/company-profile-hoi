import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Secheader from './common/Secondaryheader';
import {
	DataInternet,
	DataCctv,
	DataInfrastructure,
	DataWebsite,
} from '../data/Servicesdata';

const Scards = (props) => {
	return (
		<div className="col-md-4 col-lg-4 mb-3 text-center">
			<div className="box_border col-lg-9 p-3 pt-4 m-auto rounded">
				<img src={props.scardimage} className="img-fluid mb-2" alt="cards" />
			</div>
		</div>
	);
};

const Service = () => {
	const params = useLocation();
	const [data, setData] = useState([]);
	const path = params?.pathname.replace('/layanan/', '');
	console.log(path, path);
	console.log(params?.pathname, 'paranms');
	useEffect(() => {
		if (path === 'internet') {
			setData(DataInternet);
		} else if (path === 'infrastructure') {
			setData(DataInfrastructure);
		} else if (path === 'cctv') {
			setData(DataCctv);
		} else if (path === 'website') {
			setData(DataWebsite);
		}
	}, [path]);
	return (
		<>
			<Secheader
				sectitle="Layanan"
				secdesc="Lorem Ipsum is simply random text."
			/>

			<section>
				<div className="container mx-auto py-5">
					<div className="mb-5 text-center">
						<p className="display-6 mb-1 text-uppercase">{path}</p>
					</div>
					<div className="row d-flex items-align-center justify-content-evenly">
						{data.map((val, ind) => {
							return (
								<Scards
									key={ind}
									scardimage={val.scardimage}
									scardtitle={val.scardtitle}
									scarddesc={val.scarddesc}
								/>
							);
						})}
					</div>
				</div>
			</section>

			<section className="bg-light">
				<div className="container py-5 text-center">
					<p className="display-6">
						Untuk konsultasi lebih lanjut terkait kebutuhan anda silahkan
						hubungi kami .
					</p>
					<button className="btn p-2 btn_custom col-lg-3 col-md-5 col-6">
						<a
							href="https://wa.me/+6281380809602?&text=Terima kasih telah menghubungi HOI, Silahkan beri tahu apa yang dapat kami bantu?"
							target="_blank"
							rel="noreferrer"
							style={{ color: 'white', textDecoration: 'none' }}
						>
							WhatsApp
						</a>
					</button>
				</div>
			</section>
		</>
	);
};

export default Service;
