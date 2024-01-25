import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./src/database/publicFigure.sqlite",
	logging: false,
});

export default sequelize;