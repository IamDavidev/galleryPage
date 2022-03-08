import usePhotoRandom from '../../hooks/usePhotoRanom';
import { photoType, typeDataPhoto } from '../../types/types';
import styles from '../headerPage/headerPage.module.scss';

const HeaderPage = () => {
	const Dataphoto: typeDataPhoto = usePhotoRandom({ count: 1, query: 'black' });
	const photo: photoType = Dataphoto[0];
	return (
		<>
			<section className={styles.headerPage}>
				<div className={styles.title}>
					<h1>
						<a href='#gallery'>DavGallery</a>
					</h1>
				</div>
				<picture className={styles.imgHeader}>
					<img src={photo?.urls?.regular} alt='headerImageItsDavidev' />
				</picture>
			</section>
		</>
	);
};

export default HeaderPage;
