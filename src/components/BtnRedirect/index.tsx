import styles from './btnRedirect.module.scss';

const BtnRedirect = ({ link }: { link: any }) => {
	const Links: any = {
		me: 'hola',
		gallery: 'gallery',
	};

	return (
		<>
			<button className={styles.btnRedirect}>
				<a href={Links[link]}> Read More</a>
			</button>
		</>
	);
};

export default BtnRedirect;
