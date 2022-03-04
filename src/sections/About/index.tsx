import { FC } from 'react';
import BtnRedirect from '../../components/BtnRedirect';
import usePhotoRandom from '../../hooks/usePhotoRanom';
import styles from './about.module.scss';

const About: FC = () => {
	const Dataphoto: any = usePhotoRandom({ count: 1, query: 'black' });
	const photo = Dataphoto[0];
	return (
		<>
			<section className={styles.AboutPage}>
				<article className={styles.aboutContent}>
					<div className={styles.aboutText}>
						<h1>About</h1>
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
						<BtnRedirect link={'me'} />
					</div>
					<picture className={styles.imgAbout}>
						<img src={photo?.urls?.regular} alt='SobreImage' />
					</picture>
				</article>
			</section>
		</>
	);
};

export default About;
