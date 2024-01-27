import { DataTypes, UUIDV4 } from 'sequelize';
import sequelize from '../config/connection';

const User = sequelize.define('User', {
	id: {
		type: DataTypes.UUID,
		defaultValue: UUIDV4,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	role: {
		type: DataTypes.STRING,
		allowNull: false,
	},
}, {
	tableName: 'users',
	underscored: true,
});

// sequelize.sync({ force: true }).then(() => {
// 	console.log('Synchronized database');
// });

export default User;
