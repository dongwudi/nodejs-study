;(async () => {
  const Sequelize = require('sequelize')

  const sequelize = new Sequelize('kkb', 'root', 'example', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  })

  // test connection
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.')
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err)
    })

  //
  // const Fruit = sequelize.define('Fruit',{
  //   name: {type: Sequelize.STRING(20), allowNull: false},
  //   price: {type: Sequelize.FLOAT, allowNull: false},
  //   stock: {type: Sequelize.INTEGER, defaultValue: 0},
  // });

  // let ret = await Fruit.sync()

  // ret = await Fruit.create({
  //   name: '香蕉',
  //   price: 3.5
  // })

  // ret = await Fruit.findAll()
  // console.log(ret)
})()
