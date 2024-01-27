import sequelize from './src/config/connection';
import server from './src/Server';

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection established successfully!');

		server.listen(8080, () => {
			console.log(`Server running at http://localhost:${process.env.PORT!}`);
		});
	}).catch((error) => {
		console.error(`Database connection failed: ${error}`);
	});