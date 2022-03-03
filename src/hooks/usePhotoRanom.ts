import { useState, useEffect } from 'react';

import getPhotoRandom from '../services/getPhotoRandom';

const usePhotoRandom = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		getPhotoRandom().then(res => setData(res));
	}, []);

	return data;
};

export default usePhotoRandom;
