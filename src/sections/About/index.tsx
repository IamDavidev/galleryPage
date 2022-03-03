import { FC } from 'react';
import usePhotoRandom from '../../hooks/usePhotoRanom';
import styles from './about.module.scss';

interface photoContent {
	urls?: {
		regular: string;
	};
}

const About: FC = () => {
	const photo: photoContent = usePhotoRandom();
	console.log(photo);
	// TO DO : use swr to get the photo
	return (
		<>
			<section className={styles.AboutPage}>
				<article className={styles.aboutContent}>
					<div className={styles.aboutText}>
						<h1>Sobre</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Et rem
							velit aliquam, excepturi facere expedita accusamus qui porro vero
							eaque quisquam optio fuga temporibus quam recusandae perspiciatis,
							natus repellendus harum! Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Incidunt dolor quisquam rerum, at provident
							deleniti hic placeat quae exercitationem maiores officia explicabo
							sint. Sit quidem quia quasi temporibus. Consectetur, alias!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
							cupiditate maxime deleniti similique distinctio asperiores!
						</p>
					</div>
					<picture className={styles.imgAbout}>
						<img src={photo?.urls?.regular} alt='' />
					</picture>
				</article>
			</section>
		</>
	);
};

export default About;
