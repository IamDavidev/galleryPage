import styles from '../headerPage/headerPage.module.scss';

const HeaderPage = () => {
	return (
		<>
			<section className={styles.headerPage}>
				<div className={styles.title}>
					<h1>
						<a href='#gallery'>DavGallery</a>
					</h1>
				</div>
				<picture className={styles.imgHeader}>
					<img src='/src/assets/headerImg.jpg' alt='headerImageItsDavidev' />
				</picture>
			</section>
		</>
	);
};

export default HeaderPage;
