import { FC } from 'react';
import usePhotoRandom from '../../hooks/usePhotoRanom';

const ArtclePhoto: FC = () => {
	const photo = usePhotoRandom();
	return (
		<>
			<picture></picture>
		</>
	);
};

export default ArtclePhoto;
