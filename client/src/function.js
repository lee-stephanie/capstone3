const toBase64 = file =>
	new Promise((resolve, reject) => {
		// FileReader object allows web apps to read the contents of Blob or File type objects
		const reader = new FileReader();
		console.log(reader);

		//The readAsDataURL method is used to read the contents of the specified Blob or File.
		reader.readAsDataURL(file);

		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});

const nodeServer = () => {
	return "http://localhost:4000/";
};

export { toBase64, nodeServer };
