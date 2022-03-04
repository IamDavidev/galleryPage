import { FC } from 'react';
import ArtclePhoto from '../../components/ArticlePhoto';

import styles from './latestPhotos.module.scss';

const LatestPhoto: FC = () => {
	return (
		<>
			<section className={styles.PageLatest}>
				<div className={styles.contentLatest}>
					<header className={styles.titleLatest}>
						<h1>Trending Fotos</h1>
					</header>
					<div className={styles.contentImages}>
						<section className={styles.TrendingTop}>
							<article>
								<ArtclePhoto />
							</article>
						</section>
						<picture className={styles.TrendingSecond}>
							<article>
								<ArtclePhoto />
							</article>
						</picture>
						<section className={styles.TrendingTer}>
							<article>
								<ArtclePhoto />
							</article>
						</section>
					</div>
				</div>
			</section>
		</>
	);
};

export default LatestPhoto;
