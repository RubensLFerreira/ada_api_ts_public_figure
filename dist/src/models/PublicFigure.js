"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../config/connection"));
const User_1 = __importDefault(require("./User"));
const PublicFigure = connection_1.default.define('PublicFigure', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    birth: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    height: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    about: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    gender: {
        type: sequelize_1.DataTypes.ENUM('Male', 'Female', 'Other'),
        allowNull: false,
    },
    profession: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nationality: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    photo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: User_1.default,
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
User_1.default.hasMany(PublicFigure, { foreignKey: 'user_id', as: 'PublicFigures' });
PublicFigure.belongsTo(User_1.default, { foreignKey: 'user_id' });
exports.default = PublicFigure;
