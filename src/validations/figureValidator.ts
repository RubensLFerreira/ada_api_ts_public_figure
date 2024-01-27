import * as yup from 'yup';

const schemaFigure = yup.object().shape({
	name: yup.string().required('Name is required'),
	birth: yup.date().required('Birth is required'),
	height: yup.number().required('Height is required'),
	about: yup.string().required('About is required'),
	gender: yup.string().required('Gender is required'),
	profession: yup.string().required('Profession is required'),
	nationality: yup.string().required('Nationality is required'),
	photo: yup.string().required('Photo is required'),
});

export default schemaFigure;