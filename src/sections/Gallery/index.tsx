import { FC } from 'react';
import BtnRedirect from '../../components/BtnRedirect';
import usePhotoRandom from '../../hooks/usePhotoRanom';
import styles from './gallery.module.scss';

const Gallery: FC = () => {
	const photos: any = usePhotoRandom({ count: 7, query: 'night' });
	return (
		<>
			<div className={styles.contentGallery} id='gallery'>
				<h1 className={styles.titleGallery}>Gallery</h1>
				<div className={styles.renderImages}>
					{photos ? (
						photos.map((photo: any) => {
							return (
								<picture key={photo.id} className={styles.pictureImage}>
									<img src={photo.urls.small} alt='' />
								</picture>
							);
						})
					) : (
						<p>loading ...</p>
					)}
				</div>
				<div className={styles.btn}>
					<BtnRedirect link={'gallery'} />
				</div>
			</div>
		</>
	);
};

export default Gallery;
