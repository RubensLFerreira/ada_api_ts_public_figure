import { DataTypes, UUIDV4 } from 'sequelize';
import sequelize from '../config/connection';

import User from './User';

const PublicFigure = sequelize.define('PublicFigure', {
	id: {
		type: DataTypes.UUID,
		defaultValue: UUIDV4,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	birth: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	height: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	about: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	gender: {
		type: DataTypes.ENUM('Male', 'Female', 'Other'),
		allowNull: false,
	},
	profession: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	nationality: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	photo: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	user_id: {
		type: DataTypes.UUID,
		allowNull: false,
		references: {
			model: User,
			key: 'id',
		},
	},
}, {
	tableName: 'public_figures',
	underscored: true,
});

// sequelize.sync({ force: true }).then(() => {
// 	console.log('Synchronized database');
// });

User.hasMany(PublicFigure, { foreignKey: 'user_id', as: 'PublicFigures' });
PublicFigure.belongsTo(User, { foreignKey: 'user_id' });

export default PublicFigure;
