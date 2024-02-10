import { WhatsApp } from '@material-ui/icons';
import React from 'react';

const Whatsapp = () => {
	return (
		<div className="whatsapp rounded-circle">
			<a
				href="https://wa.me/+6281380809602?&text=Terima kasih telah menghubungi HOI, Silahkan beri tahu apa yang dapat kami bantu?"
				target="_blank"
				rel="noreferrer"
			>
				<WhatsApp fontSize="Large" style={{ color: '#ffffff' }} />
			</a>
		</div>
	);
};
export default Whatsapp;
