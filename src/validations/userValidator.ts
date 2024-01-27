import * as yup from 'yup';

const schemaUser = yup.object().shape({
	name: yup.string().required('Name is required'),
	email: yup.string().email().required('Email is required'),
	password: yup.string().min(3, 'At least 3 characters').required('Password is required'),
	role: yup.string().required('Role is required'),
});

export default schemaUser;