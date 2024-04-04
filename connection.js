const mysql = require('mysql');
const dotenv = require('dotenv')
dotenv.config();
const conn = mysql.createConnection({
	host: 'localhost',
	user: process.env.DB_USER,
	password: process.env.DB_PSWD,
	database: 'all_exercises',
	dateStrings: true
})

conn.connect((err) => {
	if (err) {
		throw err;
	}
	else {
		console.log('Database connected!!!' + conn.config.database);
	}
})

module.exports = conn