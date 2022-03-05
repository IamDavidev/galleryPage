import { FC } from 'react';
import usePhotoRandom from '../../hooks/usePhotoRanom';
import { photoType, typeDataPhoto } from '../../types/types';
import BtnRedirect from '../BtnRedirect';
import styles from './ArticlePhoto.module.scss';

const ArtclePhoto: FC = () => {
	const Dataphoto: typeDataPhoto = usePhotoRandom({ count: 6 });
	const postion = Math.floor(Math.random() * 6);
	const photo: photoType = Dataphoto[postion];
	console.log(Dataphoto);
	return (
		<>
			<div className={styles.containerTrending}>
				<picture className={styles.pictureTrending}>
					<img
						src={photo?.urls?.small}
						alt='img Trending'
						className={styles.imgPicture}
					/>
				</picture>
				<h2 className={styles.titleTrending}>Lorem ipsum dolor</h2>
				<p className={styles.textTrending}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eum.
					Quidem id dolorem praesentium blanditiis?
				</p>
				<BtnRedirect link={'me'} />
			</div>
		</>
	);
};

export default ArtclePhoto;
