const KEY_API: string = `981MOvmLDapoheL-Z9ElWT-RvDlsC0k38qVoNELs_ng`;

const getPhotoRandom = async ({
	count,
	query,
}: {
	count: number;
	query?: string;
}): Promise<[]> => {
	const response = await fetch(
		`https://api.unsplash.com/photos/random/?count=${count}&client_id=${KEY_API}&query=${query}`
	).then(res => res.json());

	return response;
};

export default getPhotoRandom;
