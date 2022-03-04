import { FC } from 'react';
import usePhotoRandom from '../../hooks/usePhotoRanom';
import styles from './gallery.module.scss';

const Gallery: FC = () => {
	const photos: any = usePhotoRandom({ count: 7 });
	return (
		<>
			<div className={styles.contentGallery}>
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
					<a href=''>more ...</a>
				</div>
			</div>
		</>
	);
};

export default Gallery;
