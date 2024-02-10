import React from 'react';
import Secheader from './common/Secondaryheader';

const About = () => {
	return (
		<>
			<Secheader sectitle="Tentang Kami" secdesc="PT. Hitam Orens Indonesia " />

			<section className="mx-auto">
				<div className="container mx-auto py-5 col-lg-10 col-xl-9">
					<div className="mb-5 text-center">
						<p className="display-6 mb-1">PT. Hitam Orens Indonesia </p>
					</div>
					<p>
						HOI adalah perusahaan yang berpengalaman, dengan nama merek
						perusahaan PT. Hitam Orens Indonesia yang fokus pada solusi
						teknologi dan infrastuktur serta pengawasan dengan ratusan kamera
						pengintai dan internet yang telah kami pasang, menjadikan kami mitra
						yang tepat dan dapat diandalkan untuk urusan keamanan dan internet
						anda.
					</p>
					<p>
						Konsultan yang berpengalaman, IT dan Engineer juga telah
						menyelesaikan banyak proyek IT dan infrastruktur yang dibuat khusus.
					</p>
				</div>
			</section>

			<section className="bg-light">
				<div className="container row py-5 m-auto col-lg-10 col-xl-9">
					<p className="display-6 text-center mb-4">VISI</p>
					<p>
						Memberikan layanan terbaik untuk cctv, internet dan infrastruktur
						bagi masyarakat indonesia. Dengan harga terbaik dan berkualitas.
					</p>
					<p className="display-6 text-center mb-4">MISI</p>

					<p>
						<ol>
							<li>
								Menjadi perusahaan yang bergerak di bidang keamanan (CCTV)
								terbaik
							</li>
							<li>
								Menjadi perusahaan yang bergerak di bidang Internet Cepat dan
								Berkualitas
							</li>
							<li>Menjadi Perusahaan yang membangun Infrastuktur terbaik</li>
						</ol>
					</p>
				</div>
			</section>
		</>
	);
};

export default About;
