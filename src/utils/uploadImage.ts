import multer from 'multer';

const storage = multer.diskStorage({
	destination: (_, __, callback) => {
		callback(null, './src/uploads/images');
	},

	filename: (_, file, callback) => {
		const { originalname } = file;

		const auxArray = originalname.split('.');
		const extension = auxArray[1];

		callback(null, `${Date.now()}-${Math.floor(Math.random() * 999)}.${extension}`);
	}
});

const upload = multer({ storage });

export default upload;