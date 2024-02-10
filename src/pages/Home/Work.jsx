import React from 'react';
import work1 from '../../images/work/Access AP.jpg';
import work2 from '../../images/work/Foto Instalasi AP Pabrik.jpg';
import work3 from '../../images/work/Foto Instalasi CCTV 1.jpg';
import work4 from '../../images/work/Foto Instalasi CCTV 2.jpg';
import work5 from '../../images/work/Foto Penarikan FO.jpg';
import work6 from '../../images/work/Monitoring CCTV .jpg';
import work7 from '../../images/work/Splicing.jpg';

const Work = () => {
	const data = [work1, work2, work3, work4, work5, work6, work7];
	return (
		<section>
			<div className="container mx-auto py-5">
				<div className="mb-5 text-center">
					<p
						className="display-6 mb-1 text-uppercase"
						style={{ color: '#ff4c00' }}
					>
						Foto Kerja
					</p>
				</div>
				<div className="row gy-3 d-flex align-items-center justify-content-evenly">
					{data.map((item, index) => (
						<div className="col-md-3 text-center" key={index}>
							<img className="img-fluid" alt="product1" src={item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Work;
