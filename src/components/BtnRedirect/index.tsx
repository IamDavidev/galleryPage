import styles from './btnRedirect.module.scss';

const BtnRedirect = ({ link }: { link: any }) => {
	const Links: any = {
		me: 'https://github.com/itsDavidev',
		gallery: 'https://youthful-neumann-3d117c.netlify.app',
	};

	return (
		<>
			<button className={styles.btnRedirect}>
				<a href={Links[link]} target='_blank'>
					Read More
				</a>
			</button>
		</>
	);
};

export default BtnRedirect;
