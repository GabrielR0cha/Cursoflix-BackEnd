import { Sequelize } from 'sequelize'

export const database = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'cursosflix_development',
  username: 'postgres',
  password: 'Briel@2004',
	define: {
    underscored: true
  }
})