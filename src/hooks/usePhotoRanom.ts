import { useState, useEffect } from 'react';

import getPhotoRandom from '../services/getPhotoRandom';

const usePhotoRandom = ({
	count,
	query,
}: {
	count: number;
	query?: string;
}) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getPhotoRandom({ count, query }).then(res => setData(res));
	}, [count]);

	return data;
};

export default usePhotoRandom;
