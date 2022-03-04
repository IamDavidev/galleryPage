const KEY_API: string = `
6t-ZtDGcWoOMOHDoJ8mAoPQAt4hUSgTrE4dJQx3wdj4
`;

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
