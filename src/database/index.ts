import { Sequelize } from 'sequelize'
const dbUrl = process.env.DATABASE_URL || ''

export const database = new Sequelize(dbUrl,{

	define: {
    underscored: true
  }
})