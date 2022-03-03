const getPhotoRandom = async (): Promise<Object> => {
	const response = await fetch(
		`https://api.unsplash.com/photos/random/?query&client_id=981MOvmLDapoheL-Z9ElWT-RvDlsC0k38qVoNELs_ng`
	).then(res => res.json());
	return response;
};

export default getPhotoRandom;
