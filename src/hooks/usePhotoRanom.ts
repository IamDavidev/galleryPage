import { useState, useEffect } from 'react';

import getPhotoRandom from '../services/getPhotoRandom';

// types

import { typeDataPhoto } from '../types/types';

const usePhotoRandom = ({
	count,
	query,
}: {
	count: number;
	query?: string;
}): typeDataPhoto => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getPhotoRandom({ count, query }).then(res => setData(res));
	}, [count]);

	return data;
};

export default usePhotoRandom;
